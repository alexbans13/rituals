import { View, Text, StyleSheet } from "react-native";
import { colors } from "@/src/constants/theme";

export default function MyRitualsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Rituals</Text>
      <Text style={styles.subtitle}>Passport, streaks & badges — coming in Phase 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontFamily: "CormorantGaramond_400Regular",
    fontSize: 28,
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    color: colors.textMuted,
  },
});
