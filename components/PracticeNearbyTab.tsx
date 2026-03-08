import { View, Text, StyleSheet } from "react-native";
import { Practice } from "@/src/data/practices";

const SUGGESTIONS = [
  { name: "English Garden", type: "Park · 2.3 km", rating: "4.8", time: "18 min walk" },
  { name: "Isar Riverbank", type: "Nature · 1.1 km", rating: "4.9", time: "9 min walk" },
  { name: "Olympia Park Forest", type: "Forest · 5.4 km", rating: "4.7", time: "12 min by bike" },
];

type NearbyTabProps = { practice: Practice };

export default function NearbyTab({ practice: p }: NearbyTabProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: p.accentLight }]}>{p.nearbyLabel}</Text>
      <Text style={styles.locationNote}>Based on your location in Munich, Bavaria</Text>
      <View style={styles.mapPlaceholder}>
        <View style={styles.mapDots}>
          {SUGGESTIONS.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                {
                  left: `${25 + i * 25}%`,
                  top: `${30 + (i % 2) * 30}%`,
                  backgroundColor: p.accentColor,
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.openMaps}>
          <Text style={styles.openMapsText}>Open in Maps →</Text>
        </View>
      </View>
      <View style={styles.list}>
        {SUGGESTIONS.map((s, i) => (
          <View key={i} style={styles.listItem}>
            <View style={[styles.listIcon, { backgroundColor: `${p.accentColor}20` }]}>
              <Text style={styles.listEmoji}>🗺</Text>
            </View>
            <View style={styles.listContent}>
              <Text style={styles.listName}>{s.name}</Text>
              <Text style={styles.listType}>{s.type}</Text>
            </View>
            <View style={styles.listRight}>
              <Text style={[styles.listRating, { color: p.accentLight }]}>⭐ {s.rating}</Text>
              <Text style={styles.listTime}>{s.time}</Text>
            </View>
          </View>
        ))}
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
    marginBottom: 8,
  },
  locationNote: {
    fontFamily: "DMSans_400Regular",
    fontSize: 13,
    color: "#555",
    marginBottom: 20,
  },
  mapPlaceholder: {
    borderRadius: 16,
    height: 180,
    backgroundColor: "#1a2a1a",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  mapDots: {
    ...StyleSheet.absoluteFillObject,
  },
  dot: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
  openMaps: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  openMapsText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    color: "#aaa",
  },
  list: {
    gap: 10,
  },
  listItem: {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  listIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  listEmoji: {
    fontSize: 22,
  },
  listContent: {
    flex: 1,
  },
  listName: {
    fontFamily: "DMSans_500Medium",
    fontSize: 14,
    color: "#e0d8c8",
  },
  listType: {
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },
  listRight: {
    alignItems: "flex-end",
  },
  listRating: {
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
  },
  listTime: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    color: "#555",
    marginTop: 2,
  },
});
