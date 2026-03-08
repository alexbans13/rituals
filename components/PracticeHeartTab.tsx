import { View, Text, StyleSheet } from "react-native";
import { Practice } from "@/src/data/practices";

type HeartTabProps = { practice: Practice };

export default function HeartTab({ practice: p }: HeartTabProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: p.accentLight }]}>
        The Heart of {p.name}
      </Text>
      <Text style={styles.heart}>{p.heart}</Text>
      <View style={[styles.badgeCard, { borderColor: `${p.accentColor}40` }]}>
        <View style={[styles.badgeIcon, { backgroundColor: p.accentColor }]}>
          <Text style={styles.badgeEmoji}>🏅</Text>
        </View>
        <View style={styles.badgeText}>
          <Text style={[styles.badgeName, { color: p.accentLight }]}>
            {p.badge}
          </Text>
          <Text style={styles.badgeTranslation}>{p.badgeTranslation}</Text>
          <Text style={styles.badgeHint}>Complete this practice to earn</Text>
        </View>
      </View>
      <View style={[styles.originCard, { borderLeftColor: p.accentColor, backgroundColor: `${p.accentColor}10` }]}>
        <Text style={[styles.originLabel, { color: p.accentLight }]}>Origin</Text>
        <Text style={styles.originText}>
          {p.flag} {p.country} · Cultural tradition
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontFamily: "CormorantGaramond_600SemiBold",
    fontSize: 10,
    letterSpacing: 0.25,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  heart: {
    fontFamily: "CormorantGaramond_300Light",
    fontSize: 20,
    color: "#e8e0d0",
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  badgeCard: {
    marginTop: 32,
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  badgeIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeEmoji: {
    fontSize: 24,
  },
  badgeText: {},
  badgeName: {
    fontFamily: "CormorantGaramond_400Regular",
    fontSize: 22,
    fontWeight: "400",
  },
  badgeTranslation: {
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  badgeHint: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    color: "#444",
    marginTop: 4,
  },
  originCard: {
    marginTop: 20,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderLeftWidth: 3,
    borderRadius: 0,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  originLabel: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    letterSpacing: 0.08,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  originText: {
    fontFamily: "CormorantGaramond_400Regular_Italic",
    fontSize: 17,
    color: "#c0b8a8",
  },
});
