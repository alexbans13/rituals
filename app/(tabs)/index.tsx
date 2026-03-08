import { useState, useMemo } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { practices } from "@/src/data/practices";
import { useCompleted } from "@/src/context/CompletedContext";
import PracticeCard from "@/components/PracticeCard";
import { colors } from "@/src/constants/theme";

const FILTERS = ["All", "Restore", "Connect"] as const;

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { completedIds, isCompleted } = useCompleted();
  const [filter, setFilter] = useState<"All" | "Restore" | "Connect">("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? practices
        : practices.filter((p) => p.mood === filter),
    [filter]
  );

  const streakCount = completedIds.length;

  const openPractice = (id: string) => {
    router.push(`/practice/${id}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Good evening</Text>
              <Text style={styles.title}>rituals</Text>
            </View>
            <View style={styles.streakBadge}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <Text style={styles.streakCount}>{streakCount}</Text>
              <Text style={styles.streakLabel}>practiced</Text>
            </View>
          </View>
          <Text style={styles.tagline}>Borrow beauty from the world.</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipsRow}
            style={styles.chipsScroll}
          >
            {FILTERS.map((f) => (
              <Pressable
                key={f}
                onPress={() => setFilter(f)}
                style={[
                  styles.chip,
                  filter === f && styles.chipActive,
                  filter === f && { borderColor: colors.text },
                ]}
              >
                <Text
                  style={[
                    styles.chipText,
                    filter === f && styles.chipTextActive,
                    filter === f && { color: colors.background },
                  ]}
                >
                  {f}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View style={styles.cardsContainer}>
          {filtered.map((p, i) => (
            <PracticeCard
              key={p.id}
              practice={p}
              completed={isCompleted(p.id)}
              onSelect={(practice) => openPractice(practice.id)}
              index={i}
            />
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Seven cultures. Seven ways to live.{"\n"}All of them waiting for you.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingTop: 28,
    paddingHorizontal: 28,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 28,
  },
  greeting: {
    fontFamily: "CormorantGaramond_600SemiBold",
    fontSize: 11,
    letterSpacing: 0.25,
    color: colors.textMuted,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  title: {
    fontFamily: "CormorantGaramond_300Light",
    fontSize: 38,
    color: colors.text,
    lineHeight: 42,
    letterSpacing: -0.01,
  },
  streakBadge: {
    backgroundColor: "#3a2a14",
    borderWidth: 1,
    borderColor: "#8b6d3a",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  streakEmoji: {
    fontSize: 20,
  },
  streakCount: {
    fontFamily: "DMSans_600SemiBold",
    fontSize: 18,
    color: "#e8c97a",
    lineHeight: 18,
  },
  streakLabel: {
    fontFamily: "DMSans_400Regular",
    fontSize: 10,
    color: "#b89a5a",
    letterSpacing: 0.05,
  },
  tagline: {
    fontFamily: "CormorantGaramond_300Light_Italic",
    fontSize: 18,
    color: colors.textMuted,
    lineHeight: 27,
    marginBottom: 28,
  },
  chipsScroll: {
    marginHorizontal: -28,
  },
  chipsRow: {
    flexDirection: "row",
    gap: 8,
    paddingBottom: 4,
    marginBottom: 32,
    paddingHorizontal: 28,
  },
  chip: {
    borderRadius: 100,
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  chipActive: {
    backgroundColor: colors.text,
  },
  chipText: {
    fontFamily: "DMSans_500Medium",
    fontSize: 12,
    letterSpacing: 0.06,
    textTransform: "uppercase",
    color: colors.textSoft,
  },
  chipTextActive: {
    color: colors.background,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  footer: {
    marginTop: 40,
    paddingHorizontal: 28,
    alignItems: "center",
  },
  footerText: {
    fontFamily: "CormorantGaramond_400Regular_Italic",
    fontSize: 14,
    color: "#444",
    lineHeight: 24,
    textAlign: "center",
  },
});
