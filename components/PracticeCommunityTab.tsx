import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Practice } from "@/src/data/practices";

const POSTS = [
  { user: "Maria K.", location: "Kyoto, Japan", time: "2 days ago", reflection: "Sat under a cedar for 40 minutes. Forgot my name in the best way.", photoIndex: 0 },
  { user: "Thomas H.", location: "Munich, Germany", time: "5 days ago", reflection: "Third time this month. The trees feel familiar now.", photoIndex: 1 },
  { user: "Saoirse L.", location: "Vancouver, Canada", time: "1 week ago", reflection: "Did this with my daughter. She found a beetle. Two hours flew by.", photoIndex: 2 },
];

type CommunityTabProps = { practice: Practice };

export default function CommunityTab({ practice: p }: CommunityTabProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.label, { color: p.accentLight }]}>
          From the community
        </Text>
        <Text style={styles.count}>{p.completions.toLocaleString()} practiced</Text>
      </View>
      <View style={styles.posts}>
        {POSTS.map((post, i) => (
          <View key={i} style={styles.post}>
            <Image
              source={{ uri: p.communityPhotos[post.photoIndex] }}
              style={styles.postImage}
              resizeMode="cover"
            />
            <View style={styles.postContent}>
              <View style={styles.postMeta}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.postUser}>{post.user}</Text>
                  <Text style={styles.postLocation}>📍{post.location}</Text>
                </View>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
              <Text style={styles.postReflection}>"{post.reflection}"</Text>
              <View style={[styles.badgeEarned, { backgroundColor: `${p.accentColor}20`, borderColor: `${p.accentColor}40` }]}>
                <Text style={styles.badgeEmoji}>🏅</Text>
                <Text style={[styles.badgeText, { color: p.accentLight }]}>{p.badge} earned</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <Pressable style={[styles.addYourOwn, { borderColor: `${p.accentColor}40` }]}>
        <Text style={styles.addEmoji}>📸</Text>
        <Text style={styles.addText}>Share your {p.name} experience</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 20,
  },
  label: {
    fontFamily: "CormorantGaramond_600SemiBold",
    fontSize: 10,
    letterSpacing: 0.25,
    textTransform: "uppercase",
  },
  count: {
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    color: "#555",
  },
  posts: {
    gap: 16,
  },
  post: {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
    borderRadius: 16,
    overflow: "hidden",
  },
  postImage: {
    width: "100%",
    height: 160,
  },
  postContent: {
    padding: 14,
  },
  postMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  postUser: {
    fontFamily: "DMSans_500Medium",
    fontSize: 13,
    color: "#e0d8c8",
  },
  postLocation: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    color: "#444",
    marginLeft: 8,
  },
  postTime: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    color: "#444",
  },
  postReflection: {
    fontFamily: "CormorantGaramond_400Regular_Italic",
    fontSize: 17,
    color: "#9a9080",
    lineHeight: 26,
  },
  badgeEarned: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  badgeEmoji: {
    fontSize: 12,
  },
  badgeText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
  },
  addYourOwn: {
    marginTop: 16,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
  },
  addEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  addText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 13,
    color: "#555",
  },
});
