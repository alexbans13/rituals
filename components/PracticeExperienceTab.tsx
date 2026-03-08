import { View, Text, StyleSheet } from "react-native";
import { Practice } from "@/src/data/practices";

type ExperienceTabProps = { practice: Practice };

export default function ExperienceTab({ practice: p }: ExperienceTabProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: p.accentLight }]}>
        Your Starting Guide
      </Text>
      <View style={styles.steps}>
        {p.steps.map((step, i) => (
          <View key={i} style={styles.stepCard}>
            <View style={[styles.stepIcon, { backgroundColor: `${p.accentColor}25`, borderColor: `${p.accentColor}40` }]}>
              <Text style={styles.stepIconText}>{step.icon}</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDesc}>{step.desc}</Text>
            </View>
            <Text style={[styles.stepNum, { color: p.accentColor }]}>{i + 1}</Text>
          </View>
        ))}
      </View>
      <View style={[styles.journalCard, { borderColor: `${p.accentColor}30` }]}>
        <Text style={[styles.journalLabel, { color: p.accentLight }]}>
          After your practice
        </Text>
        <Text style={styles.journalPrompt}>
          "What did I notice that I usually walk past?"
        </Text>
        <View style={styles.journalCta}>
          <Text style={styles.journalCtaText}>📝 Write a reflection + add photo</Text>
        </View>
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
    marginBottom: 20,
  },
  steps: {
    gap: 12,
  },
  stepCard: {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  stepIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stepIconText: {
    fontSize: 20,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontFamily: "DMSans_500Medium",
    fontSize: 14,
    color: "#e8e0d0",
    marginBottom: 4,
  },
  stepDesc: {
    fontFamily: "DMSans_300Light",
    fontSize: 13,
    color: "#777",
    lineHeight: 20,
  },
  stepNum: {
    fontFamily: "CormorantGaramond_400Regular",
    fontSize: 22,
  },
  journalCard: {
    marginTop: 24,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },
  journalLabel: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    letterSpacing: 0.1,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  journalPrompt: {
    fontFamily: "CormorantGaramond_400Regular_Italic",
    fontSize: 18,
    color: "#c0b8a8",
    lineHeight: 27,
  },
  journalCta: {
    marginTop: 12,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
  },
  journalCtaText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    color: "#444",
  },
});
