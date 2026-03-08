import { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useVideoPlayer, VideoView } from "expo-video";
import { getPracticeById } from "@/src/data/practices";
import { useCompleted } from "@/src/context/CompletedContext";
import PracticeHeartTab from "@/components/PracticeHeartTab";
import PracticeExperienceTab from "@/components/PracticeExperienceTab";
import PracticeNearbyTab from "@/components/PracticeNearbyTab";
import PracticeCommunityTab from "@/components/PracticeCommunityTab";
import { colors } from "@/src/constants/theme";

// Single Forest Bathing video (one local file per plan)
const forestBathingVideo = require("@/assets/videos/forest-bathing.mp4");

const TABS = ["heart", "experience", "nearby", "community"] as const;

export default function PracticeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();

  const practice = useMemo(() => (id ? getPracticeById(id) : undefined), [id]);
  const { isCompleted, markComplete } = useCompleted();

  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("heart");
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const videoSource = useMemo(() => {
    if (!practice) return "";
    if (practice.id === "shinrin-yoku") return forestBathingVideo;
    return practice.videoUrl;
  }, [practice?.id, practice?.videoUrl]);

  const player = useVideoPlayer(
    videoSource,
    (p) => {
      p.loop = true;
      p.muted = true;
      p.play();
    }
  );

  if (!practice) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Practice not found</Text>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  const p = practice;
  const completed = isCompleted(p.id);
  const heroHeight = windowHeight * 0.72;

  const renderVideoOrPoster = () => {
    if (videoFailed || !videoSource || videoSource === "") {
      return (
        <Image
          source={{ uri: p.videoPoster }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
      );
    }
    return (
      <>
        <Image
          source={{ uri: p.videoPoster }}
          style={[StyleSheet.absoluteFill, { opacity: videoReady ? 0 : 1 }]}
          resizeMode="cover"
        />
        <View style={[StyleSheet.absoluteFill, { opacity: videoReady ? 1 : 0 }]}>
          <VideoView
            player={player}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            nativeControls={false}
            onFirstFrameRender={() => setVideoReady(true)}
          />
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.hero, { height: heroHeight }]}>
        {renderVideoOrPoster()}
        <LinearGradient
          colors={[`${p.accentColor}80`, "transparent"]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 0.8, y: 1 }}
        />
        <LinearGradient
          colors={["#0a0a0a", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.15)"]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
        />
        <View style={[styles.heroTop, { paddingTop: insets.top + 12 }]}>
          <Pressable style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backBtnText}>←</Text>
          </Pressable>
          <View style={styles.countryPill}>
            <Text style={styles.flag}>{p.flag}</Text>
            <Text style={styles.countryText}>{p.country}</Text>
          </View>
          <View style={styles.placeholderBtn} />
        </View>
        {!videoFailed && videoSource && (
          <View style={styles.liveBadge}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        )}
        <View style={styles.heroBottom}>
          <Text style={[styles.heroMeta, { color: p.accentLight }]}>
            {p.translation} · {p.duration}
          </Text>
          <Text style={styles.heroTitle}>{p.name}</Text>
          <Text style={styles.heroTagline}>{p.tagline}</Text>
          <View style={styles.statsRow}>
            <View>
              <Text style={[styles.statValue, { color: p.accentLight }]}>
                {p.completions.toLocaleString()}
              </Text>
              <Text style={styles.statLabel}>Practiced</Text>
            </View>
            <View style={styles.statDivider} />
            <View>
              <Text style={[styles.statValue, { color: p.accentLight }]}>
                {p.difficulty}
              </Text>
              <Text style={styles.statLabel}>Entry</Text>
            </View>
            <View style={styles.statDivider} />
            <View>
              <Text style={[styles.statValue, { color: p.accentLight }]}>
                {p.mood}
              </Text>
              <Text style={styles.statLabel}>Mood</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.tabRow}>
          {TABS.map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tabBtn,
                activeTab === tab && { borderBottomColor: p.accentColor },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: activeTab === tab ? p.accentLight : "#555" },
                ]}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </Pressable>
          ))}
        </View>
        <ScrollView
          style={styles.tabContent}
          contentContainerStyle={styles.tabContentInner}
          showsVerticalScrollIndicator={false}
        >
          {activeTab === "heart" && <PracticeHeartTab practice={p} />}
          {activeTab === "experience" && <PracticeExperienceTab practice={p} />}
          {activeTab === "nearby" && <PracticeNearbyTab practice={p} />}
          {activeTab === "community" && <PracticeCommunityTab practice={p} />}
        </ScrollView>
      </View>

      <LinearGradient
        colors={["transparent", "#0a0a0a"]}
        style={styles.stickyGradient}
        pointerEvents="none"
      />
      <View style={[styles.stickyCta, { paddingBottom: insets.bottom + 16 }]}>
        <Pressable
          onPress={() => {
            markComplete(p.id);
          }}
          style={[
            styles.completeBtn,
            completed
              ? { backgroundColor: "transparent", borderWidth: 1, borderColor: p.accentColor }
              : { backgroundColor: p.accentColor },
          ]}
        >
          <Text
            style={[
              styles.completeBtnText,
              { color: completed ? p.accentLight : "#fff" },
            ]}
          >
            {completed ? `✓  Practiced — earn ${p.badge}` : `Begin ${p.name}`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDeep,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundDeep,
  },
  errorText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 16,
    color: colors.textMuted,
  },
  hero: {
    overflow: "hidden",
  },
  heroTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  backBtnText: {
    fontSize: 18,
    color: "#fff",
  },
  countryPill: {
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  flag: {
    fontSize: 16,
  },
  countryText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 12,
    color: "#ddd",
    letterSpacing: 0.06,
  },
  placeholderBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  liveBadge: {
    position: "absolute",
    top: 58,
    left: "50%",
    marginLeft: -40,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ff5555",
  },
  liveText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 10,
    color: "rgba(255,255,255,0.7)",
    letterSpacing: 0.08,
  },
  heroBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  heroMeta: {
    fontFamily: "DMSans_400Regular",
    fontSize: 11,
    letterSpacing: 0.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  heroTitle: {
    fontFamily: "CormorantGaramond_300Light",
    fontSize: 52,
    color: "#fff",
    lineHeight: 49,
    letterSpacing: -0.02,
    marginBottom: 10,
  },
  heroTagline: {
    fontFamily: "CormorantGaramond_400Regular_Italic",
    fontSize: 19,
    color: "rgba(255,255,255,0.72)",
    lineHeight: 27,
    maxWidth: 320,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 14,
  },
  statValue: {
    fontFamily: "DMSans_500Medium",
    fontSize: 16,
  },
  statLabel: {
    fontFamily: "DMSans_400Regular",
    fontSize: 10,
    color: "#666",
    letterSpacing: 0.06,
    textTransform: "uppercase",
  },
  statDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  content: {
    flex: 1,
    backgroundColor: colors.backgroundDeep,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    overflow: "hidden",
  },
  tabRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 24,
    gap: 28,
  },
  tabBtn: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabText: {
    fontFamily: "DMSans_400Regular",
    fontSize: 13,
    letterSpacing: 0.08,
    textTransform: "uppercase",
  },
  tabContent: {
    flex: 1,
  },
  tabContentInner: {
    padding: 28,
    paddingBottom: 120,
  },
  stickyGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    pointerEvents: "none",
  },
  stickyCta: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  completeBtn: {
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  completeBtnText: {
    fontFamily: "DMSans_500Medium",
    fontSize: 15,
    letterSpacing: 0.04,
  },
});
