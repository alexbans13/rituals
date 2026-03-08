import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Practice } from "@/src/data/practices";
import { typography, colors } from "@/src/constants/theme";

type PracticeCardProps = {
  practice: Practice;
  completed: boolean;
  onSelect: (practice: Practice) => void;
  index: number;
};

export default function PracticeCard({
  practice: p,
  completed,
  onSelect,
  index,
}: PracticeCardProps) {
  return (
    <Pressable
      onPress={() => onSelect(p)}
      style={({ pressed }) => [
        styles.card,
        { opacity: pressed ? 0.95 : 1 },
      ]}
    >
      <Image
        source={{ uri: p.videoPoster }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.darkOverlay} />
      <View
        style={[
          styles.gradientOverlay,
          {
            backgroundColor: `${p.accentColor}80`,
          },
        ]}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.countryPill}>
            <Text style={styles.flag}>{p.flag}</Text>
            <Text style={styles.countryText}>{p.country}</Text>
          </View>
          <View style={styles.rightRow}>
            <View style={styles.moodPill}>
              <Text style={styles.moodText}>{p.mood}</Text>
            </View>
            {completed && (
              <View style={[styles.checkBadge, { backgroundColor: p.accentColor }]}>
                <Text style={styles.checkText}>✓</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.bottomContent}>
          <Text style={[styles.translation, { color: p.accentLight }]}>
            {p.translation}
          </Text>
          <Text style={styles.name}>{p.name}</Text>
          <Text style={styles.tagline}>{p.tagline}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>⏱ {p.duration}</Text>
            <Text style={styles.meta}>👥 {p.completions.toLocaleString()} practiced</Text>
          </View>
        </View>
      </View>
      <View style={styles.playIndicator}>
        <Text style={styles.playIcon}>▶</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    height: 220,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 32,
    elevation: 8,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    padding: 18,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  countryPill: {
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  flag: {
    fontSize: 14,
  },
  countryText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    color: "#ddd",
    letterSpacing: 0.06,
  },
  rightRow: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  moodPill: {
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  moodText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    color: "#ccc",
    letterSpacing: 0.05,
  },
  checkBadge: {
    borderRadius: 14,
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  checkText: {
    fontSize: 13,
    color: "#fff",
  },
  bottomContent: {},
  translation: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    letterSpacing: 0.12,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  name: {
    fontFamily: "CormorantGaramond_400Regular",
    fontSize: 30,
    color: "#fff",
    lineHeight: 33,
    marginBottom: 6,
    letterSpacing: -0.01,
  },
  tagline: {
    fontFamily: "CormorantGaramond_400Regular_Italic",
    fontSize: 15,
    color: "rgba(255,255,255,0.75)",
    lineHeight: 21,
  },
  metaRow: {
    flexDirection: "row",
    gap: 14,
    marginTop: 10,
  },
  meta: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    color: "#888",
  },
  playIndicator: {
    position: "absolute",
    right: 20,
    bottom: 70,
    width: 36,
    height: 36,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  playIcon: {
    fontSize: 12,
    color: "#fff",
  },
});
