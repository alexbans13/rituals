import { useState, useEffect, useRef } from "react";

const practices = [
  {
    id: "shinrin-yoku",
    name: "Shinrin-yoku",
    translation: "Forest Bathing",
    country: "Japan",
    flag: "🇯🇵",
    tagline: "Let the forest breathe you back to life.",
    mood: "Restore",
    duration: "2–3 hours",
    difficulty: "Gentle",
    accentColor: "#4a7c59",
    accentLight: "#a8c5a0",
    textColor: "#e8f0e9",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoPoster: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    heart: "In Japan, the forest is not scenery — it is medicine. Shinrin-yoku, coined in 1982 by Japan's Forest Agency, emerged as a public health response to the rise of tech-heavy, stress-filled urban life. The Japanese understood something ancient: that trees emit phytoncides, airborne compounds that lower cortisol, reduce blood pressure, and strengthen the immune system. Forest bathing is not hiking. There is no destination. You are not exercising. You are simply being — slowly — inside the living world.",
    steps: [
      { icon: "📵", title: "Leave your phone behind", desc: "Or put it fully on silent. This is non-negotiable." },
      { icon: "🚶", title: "Walk without purpose", desc: "Find a forest, park, or tree-lined path. Walk at half your normal speed." },
      { icon: "👃", title: "Use all five senses", desc: "Touch bark. Listen for layers of sound. Notice the quality of light." },
      { icon: "🪨", title: "Find a sit spot", desc: "Stop somewhere that feels right. Sit for at least 10 minutes. Just observe." },
      { icon: "🌬️", title: "Breathe intentionally", desc: "Take five slow, deep breaths. Exhale longer than you inhale." },
    ],
    badge: "森の守護者",
    badgeTranslation: "Forest Guardian",
    communityPhotos: [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80",
      "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=400&q=80",
    ],
    nearbyLabel: "Find forests near you",
    completions: 4821,
  },
  {
    id: "fika",
    name: "Fika",
    translation: "The Coffee Ritual",
    country: "Sweden",
    flag: "🇸🇪",
    tagline: "Coffee, pastry, someone you love. That's it.",
    mood: "Connect",
    duration: "30–60 min",
    difficulty: "Gentle",
    accentColor: "#c17f3e",
    accentLight: "#e8c99a",
    textColor: "#fdf4e7",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoPoster: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    heart: "Fika is not a coffee break. In Sweden, fika is a verb, a mindset, and a social institution. Swedes fika with colleagues at 10am and 3pm as a near-sacred daily rhythm. It is the art of pausing — of insisting that human connection is more important than the next task. The triangle is simple: coffee, something sweet, and a person. No agenda. No phones on the table. Fika is Sweden's quiet protest against busyness.",
    steps: [
      { icon: "☕", title: "Make or order real coffee", desc: "Not a to-go cup. A proper brew in a mug that requires both hands." },
      { icon: "🥐", title: "Get a pastry", desc: "A cinnamon bun (kanelbullar) is canonical. Any pastry works. This is not optional." },
      { icon: "📞", title: "Invite one person", desc: "Text someone now. Not a group. One person. 'Coffee soon?'" },
      { icon: "🚫", title: "No phones on the table", desc: "Face-down. In a pocket. This is the whole point." },
      { icon: "⏳", title: "Stay longer than you planned", desc: "The magic of fika happens in the unplanned extra 20 minutes." },
    ],
    badge: "Kaffeälskare",
    badgeTranslation: "Coffee Lover",
    communityPhotos: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80",
    ],
    nearbyLabel: "Find independent cafés near you",
    completions: 7203,
  },
  {
    id: "hygge",
    name: "Hygge",
    translation: "The Art of Coziness",
    country: "Denmark",
    flag: "🇩🇰",
    tagline: "Warmth, togetherness, and the art of enough.",
    mood: "Restore",
    duration: "An evening",
    difficulty: "Gentle",
    accentColor: "#7a5c3e",
    accentLight: "#c9a87c",
    textColor: "#fdf0e0",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoPoster: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    heart: "Denmark is consistently ranked the world's happiest country, and hygge (pronounced 'hoo-ga') is a central reason why. It is the deliberate creation of warmth, atmosphere, and togetherness — not as an escape from life, but as an embrace of its small pleasures. Hygge is candles on a Tuesday. It is woolly socks and soup and a friend who stays too long. It is the radical act of deciding that right now, in this small room, is enough.",
    steps: [
      { icon: "🕯️", title: "Light candles everywhere", desc: "Danes burn more candles per capita than anywhere on Earth. Start here." },
      { icon: "🧦", title: "Dress for comfort", desc: "Soft clothes. Blankets available. The body signals safety to the mind." },
      { icon: "🍲", title: "Make something warm", desc: "Soup, hot chocolate, mulled wine. Something that simmers and smells good." },
      { icon: "👥", title: "Keep the group small", desc: "2–5 people. Intimate. Large parties are not hygge." },
      { icon: "📵", title: "Protect the atmosphere", desc: "No harsh overheads. No stressful topics. No scrolling. Just presence." },
    ],
    badge: "Hyggelig",
    badgeTranslation: "One who creates warmth",
    communityPhotos: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
      "https://images.unsplash.com/photo-1515446134809-993c501ca304?w=400&q=80",
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=80",
    ],
    nearbyLabel: "Find cozy spots near you",
    completions: 5910,
  },
  {
    id: "passeggiata",
    name: "Passeggiata",
    translation: "The Evening Stroll",
    country: "Italy",
    flag: "🇮🇹",
    tagline: "Walk slowly. Be seen. Belong.",
    mood: "Connect",
    duration: "30–45 min",
    difficulty: "Gentle",
    accentColor: "#b5451b",
    accentLight: "#e8a87c",
    textColor: "#fef5ee",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoPoster: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=800&q=80",
    heart: "Every evening, as the heat breaks and the light turns golden, Italian towns come alive with the passeggiata — the ritual evening walk. It is not exercise. There is no destination. The passeggiata is a social performance and a communal pleasure: you dress well, walk slowly, stop often, and acknowledge your neighbors. In an era of social media, this ancient practice of showing up — physically, beautifully — in your town's shared space feels almost revolutionary.",
    steps: [
      { icon: "👗", title: "Dress with intention", desc: "Not formal, but considered. The passeggiata is a gentle act of self-respect." },
      { icon: "🌅", title: "Go at golden hour", desc: "Between 6–8pm. After dinner is also traditional. Avoid midday." },
      { icon: "🚶‍♀️", title: "Walk the main street", desc: "Find your town's main drag, piazza, or waterfront. The route matters." },
      { icon: "👋", title: "Stop and talk", desc: "This is not a walk with headphones. When you see someone, stop. Chat." },
      { icon: "🍦", title: "Get a gelato", desc: "Optional but deeply traditional. Something to hold while you walk." },
    ],
    badge: "Flaneur",
    badgeTranslation: "One who wanders with grace",
    communityPhotos: [
      "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=400&q=80",
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=400&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80",
    ],
    nearbyLabel: "Find walkable streets near you",
    completions: 3442,
  },
  {
    id: "niksen",
    name: "Niksen",
    translation: "The Art of Doing Nothing",
    country: "Netherlands",
    flag: "🇳🇱",
    tagline: "Not meditation. Not mindfulness. Just... nothing.",
    mood: "Restore",
    duration: "10–20 min",
    difficulty: "Surprisingly hard",
    accentColor: "#3a5a7c",
    accentLight: "#8ab0d0",
    textColor: "#eaf2f8",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoPoster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    heart: "The Dutch have a word for what most of us are terrified to do: niksen — doing nothing, on purpose, without guilt. Not meditation (there's no technique). Not mindfulness (you're not monitoring your breath). Just sitting. Looking out a window. Letting your mind wander wherever it goes. Research suggests that niksen activates the brain's default mode network — the seat of creativity, insight, and emotional processing. The Dutch treat idleness not as laziness, but as maintenance.",
    steps: [
      { icon: "🪑", title: "Find a comfortable seat", desc: "Near a window is ideal. Somewhere with a view of something living — sky, trees, street." },
      { icon: "📵", title: "Put your phone in another room", desc: "Not face-down. Another room. Seriously." },
      { icon: "🚫", title: "Abandon all goals", desc: "You are not trying to relax. You are not trying to think. There is no objective." },
      { icon: "👁️", title: "Let your gaze go soft", desc: "Look without focusing. Think without directing. Drift." },
      { icon: "⏰", title: "Start with 10 minutes", desc: "It will feel long. That discomfort is exactly what you're working with." },
    ],
    badge: "Niksenik",
    badgeTranslation: "Master of purposeful nothing",
    communityPhotos: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80",
    ],
    nearbyLabel: "Find quiet parks near you",
    completions: 6127,
  },
  {
    id: "sobremesa",
    name: "Sobremesa",
    translation: "Over the Table",
    country: "Spain",
    flag: "🇪🇸",
    tagline: "The meal ends. Nobody moves. That's the point.",
    mood: "Connect",
    duration: "30–90 min",
    difficulty: "Gentle",
    accentColor: "#8b2635",
    accentLight: "#d4909a",
    textColor: "#fdf0f2",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoPoster: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    heart: "In Spain, the meal is never really about the food. The food is the excuse. The sobremesa — literally 'over the table' — is the sacred time after eating when no one leaves. The plates are cleared, wine glasses are topped up, and conversation deepens. Sobremesa can last longer than the meal itself. It is Spain's most protected institution: the unhurried, non-productive, beautiful act of staying with the people you just fed.",
    steps: [
      { icon: "🍽️", title: "Eat with people you like", desc: "Sobremesa doesn't work with strangers. Cook for friends, or gather at a restaurant." },
      { icon: "🍷", title: "Pour something to sip", desc: "Wine, coffee, digestivo. Something to hold that signals: we're not done yet." },
      { icon: "📵", title: "No phones, no bill request", desc: "The sobremesa begins the moment you push your plate away. Don't rush it." },
      { icon: "💬", title: "Let conversation deepen", desc: "Small talk is the door. The real conversation starts 20 minutes in." },
      { icon: "🚫", title: "Resist the urge to clean up", desc: "Dishes can wait. This cannot." },
    ],
    badge: "Sobremesista",
    badgeTranslation: "One who knows that the table is sacred",
    communityPhotos: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&q=80",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    ],
    nearbyLabel: "Find great dining near you",
    completions: 4109,
  },
  {
    id: "manaakitanga",
    name: "Manaakitanga",
    translation: "Radical Hospitality",
    country: "New Zealand / Māori",
    flag: "🇳🇿",
    tagline: "The stranger at your door is an honored guest.",
    mood: "Connect",
    duration: "An afternoon",
    difficulty: "Meaningful",
    accentColor: "#2d6a4f",
    accentLight: "#74c69d",
    textColor: "#eaf7ef",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoPoster: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    heart: "Manaakitanga is one of the most profound concepts in Māori culture: the act of lifting another person's mana (spiritual power and dignity) through generosity, hospitality, and respect. It is not mere politeness. Manaakitanga asks: how can I make this person feel truly seen, valued, and honored? It is the belief that to care for others is to care for yourself — that our dignity is inseparable from each other's. In practice, it begins with welcoming someone as if their arrival is the best thing that has happened all day.",
    steps: [
      { icon: "🚪", title: "Welcome someone new", desc: "Invite a newer acquaintance — a neighbor, a colleague — into your home." },
      { icon: "🍳", title: "Cook for them", desc: "Food made with intention is the oldest form of manaakitanga. Make something real." },
      { icon: "👂", title: "Ask and truly listen", desc: "Ask one deep question and listen without waiting to respond." },
      { icon: "🎁", title: "Send them home with something", desc: "Leftovers. A book. A small gift. Something that says: you were worth feeding." },
      { icon: "🔄", title: "Receive in return", desc: "Manaakitanga is not charity — it's reciprocal dignity. Let others give too." },
    ],
    badge: "Tangata Whenua",
    badgeTranslation: "Person of the land",
    communityPhotos: [
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&q=80",
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80",
    ],
    nearbyLabel: "Find cultural centers near you",
    completions: 2847,
  },
];

const moodColors = { Restore: "#4a7c59", Connect: "#b5451b", Wonder: "#7a5c3e" };

export default function RitualsApp() {
  const [screen, setScreen] = useState("home");
  const [selectedPractice, setSelectedPractice] = useState(null);
  const [activeTab, setActiveTab] = useState("heart");
  const [completedIds, setCompletedIds] = useState(["fika", "shinrin-yoku"]);
  const [filter, setFilter] = useState("All");
  const [heroVideoError, setHeroVideoError] = useState(false);
  const videoRef = useRef(null);

  const openPractice = (p) => {
    setSelectedPractice(p);
    setActiveTab("heart");
    setHeroVideoError(false);
    setScreen("practice");
    window.scrollTo(0, 0);
  };

  const goHome = () => setScreen("home");

  const markComplete = () => {
    if (!completedIds.includes(selectedPractice.id)) {
      setCompletedIds([...completedIds, selectedPractice.id]);
    }
  };

  const filtered = filter === "All" ? practices : practices.filter(p => p.mood === filter);

  return (
    <div style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      background: "#0d0d0d",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cormorant+SC:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 0px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.8; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important;
        }
        .tab-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 10px 0;
          transition: all 0.2s ease;
        }
        .back-btn {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          width: 42px; height: 42px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          font-size: 18px;
          color: white;
          transition: all 0.2s;
        }
        .back-btn:hover { background: rgba(255,255,255,0.22); }
        .complete-btn {
          border: none;
          border-radius: 100px;
          padding: 16px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.25s ease;
          width: 100%;
        }
        .complete-btn:hover { transform: translateY(-2px); }
        .filter-chip {
          border-radius: 100px;
          padding: 7px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.2s;
          white-space: nowrap;
        }
        .step-card {
          animation: fadeUp 0.5s ease both;
        }
      `}</style>

      {/* PHONE FRAME */}
      <div style={{
        width: "min(430px, 100vw)",
        minHeight: "100vh",
        background: "#0f0f0f",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 0 80px rgba(0,0,0,0.8)",
      }}>

        {screen === "home" && <HomeScreen practices={filtered} filter={filter} setFilter={setFilter} completedIds={completedIds} onSelect={openPractice} />}
        {screen === "practice" && selectedPractice && (
          <PracticeScreen
            practice={selectedPractice}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onBack={goHome}
            completed={completedIds.includes(selectedPractice.id)}
            onComplete={markComplete}
          />
        )}
      </div>
    </div>
  );
}

function HomeScreen({ practices, filter, setFilter, completedIds, onSelect }) {
  const filters = ["All", "Restore", "Connect"];
  const streakCount = completedIds.length;

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", paddingBottom: 40 }}>
      {/* Header */}
      <div style={{
        padding: "56px 28px 0",
        animation: "fadeUp 0.6s ease both",
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start', marginBottom: 32",
          marginBottom: 28,
        }}>
          <div>
            <div style={{
              fontFamily: "'Cormorant SC', serif",
              fontSize: 11,
              letterSpacing: "0.25em",
              color: "#888",
              textTransform: "uppercase",
              marginBottom: 6,
            }}>Good evening</div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 38,
              fontWeight: 300,
              color: "#f5f0e8",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}>rituals</h1>
          </div>

          {/* Streak badge */}
          <div style={{
            background: "linear-gradient(135deg, #3a2a14, #6b4c1e)",
            border: "1px solid #8b6d3a",
            borderRadius: 16,
            padding: "10px 16px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 20 }}>🔥</div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 18, fontWeight: 600, color: "#e8c97a", lineHeight: 1 }}>{streakCount}</div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#b89a5a", letterSpacing: "0.05em" }}>practiced</div>
          </div>
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 18,
          fontWeight: 300,
          fontStyle: "italic",
          color: "#888",
          lineHeight: 1.5,
          marginBottom: 28,
        }}>Borrow beauty from the world.</p>

        {/* Filter chips */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 32 }}>
          {filters.map(f => (
            <button key={f} className="filter-chip" onClick={() => setFilter(f)} style={{
              background: filter === f ? "#f5f0e8" : "transparent",
              color: filter === f ? "#0f0f0f" : "#aaa",
              borderColor: filter === f ? "#f5f0e8" : "rgba(255,255,255,0.12)",
            }}>{f}</button>
          ))}
        </div>
      </div>

      {/* Practice Cards */}
      <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 16 }}>
        {practices.map((p, i) => (
          <PracticeCard key={p.id} practice={p} completed={completedIds.includes(p.id)} onSelect={onSelect} index={i} />
        ))}
      </div>

      {/* Bottom tagline */}
      <div style={{ textAlign: "center", marginTop: 40, padding: "0 28px" }}>
        <div style={{
          fontFamily: "'Cormorant Garamond'",
          fontSize: 14,
          fontStyle: "italic",
          color: "#444",
          lineHeight: 1.7,
        }}>Seven cultures. Seven ways to live.<br/>All of them waiting for you.</div>
      </div>
    </div>
  );
}

function PracticeCard({ practice: p, completed, onSelect, index }) {
  return (
    <div
      className="card-hover"
      onClick={() => onSelect(p)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        height: 220,
        animation: `fadeUp 0.5s ease ${index * 0.08}s both`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Background image */}
      <img
        src={p.videoPoster}
        alt={p.name}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          filter: "brightness(0.55)",
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${p.accentColor}80 0%, rgba(0,0,0,0.1) 100%)`,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)",
      }} />

      {/* Content */}
      <div style={{ position: "absolute", inset: 0, padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 100,
            padding: "5px 12px",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <span style={{ fontSize: 14 }}>{p.flag}</span>
            <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#ddd", letterSpacing: "0.06em", textTransform: "uppercase" }}>{p.country}</span>
          </div>

          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100,
              padding: "5px 12px",
            }}>
              <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#ccc", letterSpacing: "0.05em" }}>{p.mood}</span>
            </div>
            {completed && (
              <div style={{
                background: p.accentColor,
                borderRadius: "50%",
                width: 28, height: 28,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13,
              }}>✓</div>
            )}
          </div>
        </div>

        {/* Bottom content */}
        <div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: p.accentLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>{p.translation}</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond'",
            fontSize: 30,
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 6,
            letterSpacing: "-0.01em",
          }}>{p.name}</h2>
          <p style={{
            fontFamily: "'Cormorant Garamond'",
            fontSize: 15,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.4,
          }}>{p.tagline}</p>

          <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
            <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#888" }}>⏱ {p.duration}</span>
            <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#888" }}>👥 {p.completions.toLocaleString()} practiced</span>
          </div>
        </div>
      </div>

      {/* Play indicator */}
      <div style={{
        position: "absolute",
        right: 20, bottom: 70,
        width: 36, height: 36,
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(8px)",
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 12,
        color: "white",
      }}>▶</div>
    </div>
  );
}

function PracticeScreen({ practice: p, activeTab, setActiveTab, onBack, completed, onComplete }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setVideoFailed(true));
    }
  }, []);

  const tabs = ["heart", "experience", "nearby", "community"];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", animation: "slide-in-right 0.4s ease both" }}>

      {/* HERO VIDEO SECTION */}
      <div style={{ position: "relative", height: "72vh", overflow: "hidden" }}>

        {/* Video / fallback image */}
        {!videoFailed ? (
          <>
            <video
              ref={videoRef}
              src={p.videoUrl}
              poster={p.videoPoster}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
              onLoadedData={() => setVideoLoaded(true)}
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                opacity: videoLoaded ? 1 : 0,
                transition: "opacity 0.8s ease",
              }}
            />
            {/* Poster shown until video loads */}
            <img
              src={p.videoPoster}
              alt={p.name}
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                opacity: videoLoaded ? 0 : 1,
                transition: "opacity 0.8s ease",
              }}
            />
          </>
        ) : (
          <img
            src={p.videoPoster}
            alt={p.name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}

        {/* Color wash overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(160deg, ${p.accentColor}50 0%, transparent 60%)`,
        }} />

        {/* Bottom gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #0a0a0a 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)",
        }} />

        {/* Top controls */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          padding: "52px 22px 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <button className="back-btn" onClick={onBack}>←</button>

          <div style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 100,
            padding: "6px 14px",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <span style={{ fontSize: 16 }}>{p.flag}</span>
            <span style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#ddd", letterSpacing: "0.06em" }}>{p.country}</span>
          </div>

          <div style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "50%",
            width: 42, height: 42,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, cursor: "pointer",
          }}>⬆</div>
        </div>

        {/* Video playing indicator */}
        {!videoFailed && (
          <div style={{
            position: "absolute", top: 58, left: "50%",
            transform: "translateX(-50%)",
          }}>
            <div style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 100,
              padding: "4px 12px",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <div style={{
                width: 6, height: 6,
                borderRadius: "50%",
                background: "#ff5555",
                animation: "pulse-ring 1.5s infinite",
              }} />
              <span style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em" }}>LIVE</span>
            </div>
          </div>
        )}

        {/* Hero text */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "0 24px 24px",
          animation: "fadeUp 0.6s ease 0.1s both",
        }}>
          <div style={{
            fontFamily: "'DM Sans'",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: p.accentLight,
            marginBottom: 6,
          }}>{p.translation} · {p.duration}</div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond'",
            fontSize: 52,
            fontWeight: 300,
            color: "#fff",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: 10,
          }}>{p.name}</h1>

          <p style={{
            fontFamily: "'Cormorant Garamond'",
            fontSize: 19,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.4,
            maxWidth: 320,
          }}>{p.tagline}</p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 20, marginTop: 14 }}>
            <div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 16, fontWeight: 500, color: p.accentLight }}>{p.completions.toLocaleString()}</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#666", letterSpacing: "0.06em", textTransform: "uppercase" }}>Practiced</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
            <div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 16, fontWeight: 500, color: p.accentLight }}>{p.difficulty}</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#666", letterSpacing: "0.06em", textTransform: "uppercase" }}>Entry</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
            <div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 16, fontWeight: 500, color: p.accentLight }}>{p.mood}</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "#666", letterSpacing: "0.06em", textTransform: "uppercase" }}>Mood</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div style={{ background: "#0a0a0a", borderRadius: "24px 24px 0 0", marginTop: -24, position: "relative", zIndex: 2 }}>

        {/* Tab nav */}
        <div style={{
          display: "flex",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "0 24px",
          gap: 28,
        }}>
          {tabs.map(tab => (
            <button
              key={tab}
              className="tab-btn"
              onClick={() => setActiveTab(tab)}
              style={{
                color: activeTab === tab ? p.accentLight : "#555",
                borderBottom: activeTab === tab ? `2px solid ${p.accentColor}` : "2px solid transparent",
              }}
            >{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ padding: "28px 24px 120px" }}>

          {activeTab === "heart" && <HeartTab practice={p} />}
          {activeTab === "experience" && <ExperienceTab practice={p} />}
          {activeTab === "nearby" && <NearbyTab practice={p} />}
          {activeTab === "community" && <CommunityTab practice={p} />}

        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div style={{
        position: "fixed",
        bottom: 0, left: "50%",
        transform: "translateX(-50%)",
        width: "min(430px, 100vw)",
        padding: "16px 24px 32px",
        background: "linear-gradient(to top, #0a0a0a 70%, transparent 100%)",
        zIndex: 100,
      }}>
        <button
          className="complete-btn"
          onClick={onComplete}
          style={{
            background: completed ? "transparent" : `linear-gradient(135deg, ${p.accentColor}, ${p.accentLight}40)`,
            color: completed ? p.accentLight : "#fff",
            border: completed ? `1px solid ${p.accentColor}` : "none",
            boxShadow: completed ? "none" : `0 8px 32px ${p.accentColor}60`,
          }}
        >
          {completed ? `✓  Practiced — earn ${p.badge}` : `Begin ${p.name}`}
        </button>
      </div>
    </div>
  );
}

function HeartTab({ practice: p }) {
  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <div style={{
        fontFamily: "'Cormorant SC'",
        fontSize: 10,
        letterSpacing: "0.25em",
        color: p.accentLight,
        textTransform: "uppercase",
        marginBottom: 16,
      }}>The Heart of {p.name}</div>

      <p style={{
        fontFamily: "'Cormorant Garamond'",
        fontSize: 20,
        fontWeight: 300,
        color: "#e8e0d0",
        lineHeight: 1.75,
        letterSpacing: "0.01em",
      }}>{p.heart}</p>

      {/* Badge preview */}
      <div style={{
        marginTop: 32,
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${p.accentColor}40`,
        borderRadius: 16,
        padding: 20,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        <div style={{
          width: 56, height: 56,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${p.accentColor}, #1a1a1a)`,
          border: `2px solid ${p.accentColor}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24,
          flexShrink: 0,
        }}>🏅</div>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: 22, color: p.accentLight, fontWeight: 400 }}>{p.badge}</div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#666", marginTop: 2 }}>{p.badgeTranslation}</div>
          <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#444", marginTop: 4 }}>Complete this practice to earn</div>
        </div>
      </div>

      {/* Culture note */}
      <div style={{
        marginTop: 20,
        padding: "16px 18px",
        borderLeft: `3px solid ${p.accentColor}`,
        background: `${p.accentColor}10`,
        borderRadius: "0 12px 12px 0",
      }}>
        <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: p.accentLight, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Origin</div>
        <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: 17, color: "#c0b8a8", fontStyle: "italic" }}>
          {p.flag} {p.country} · Cultural tradition
        </div>
      </div>
    </div>
  );
}

function ExperienceTab({ practice: p }) {
  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <div style={{
        fontFamily: "'Cormorant SC'",
        fontSize: 10,
        letterSpacing: "0.25em",
        color: p.accentLight,
        textTransform: "uppercase",
        marginBottom: 20,
      }}>Your Starting Guide</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {p.steps.map((step, i) => (
          <div
            key={i}
            className="step-card"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
              padding: "16px 18px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              animationDelay: `${i * 0.08}s`,
            }}
          >
            <div style={{
              width: 42, height: 42,
              borderRadius: 12,
              background: `${p.accentColor}25`,
              border: `1px solid ${p.accentColor}40`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20,
              flexShrink: 0,
            }}>{step.icon}</div>
            <div>
              <div style={{
                fontFamily: "'DM Sans'",
                fontSize: 14,
                fontWeight: 500,
                color: "#e8e0d0",
                marginBottom: 4,
              }}>{step.title}</div>
              <div style={{
                fontFamily: "'DM Sans'",
                fontSize: 13,
                fontWeight: 300,
                color: "#777",
                lineHeight: 1.5,
              }}>{step.desc}</div>
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond'",
              fontSize: 22,
              color: p.accentColor,
              marginLeft: "auto",
              flexShrink: 0,
            }}>{i + 1}</div>
          </div>
        ))}
      </div>

      {/* Journal prompt */}
      <div style={{
        marginTop: 24,
        background: `linear-gradient(135deg, ${p.accentColor}18, transparent)`,
        border: `1px solid ${p.accentColor}30`,
        borderRadius: 16,
        padding: 20,
      }}>
        <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: p.accentLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>After your practice</div>
        <div style={{ fontFamily: "'Cormorant Garamond'", fontSize: 18, fontStyle: "italic", color: "#c0b8a8", lineHeight: 1.5 }}>
          "What did I notice that I usually walk past?"
        </div>
        <div style={{
          marginTop: 12,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 10,
          padding: 14,
          fontFamily: "'DM Sans'",
          fontSize: 12,
          color: "#444",
          cursor: "pointer",
          border: "1px dashed rgba(255,255,255,0.1)",
          textAlign: "center",
        }}>📝 Write a reflection + add photo</div>
      </div>
    </div>
  );
}

function NearbyTab({ practice: p }) {
  const suggestions = [
    { name: "English Garden", type: "Park · 2.3 km", rating: "4.8", time: "18 min walk" },
    { name: "Isar Riverbank", type: "Nature · 1.1 km", rating: "4.9", time: "9 min walk" },
    { name: "Olympia Park Forest", type: "Forest · 5.4 km", rating: "4.7", time: "12 min by bike" },
  ];

  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <div style={{
        fontFamily: "'Cormorant SC'",
        fontSize: 10,
        letterSpacing: "0.25em",
        color: p.accentLight,
        textTransform: "uppercase",
        marginBottom: 8,
      }}>{p.nearbyLabel}</div>

      <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#555", marginBottom: 20 }}>Based on your location in Munich, Bavaria</p>

      {/* Map placeholder */}
      <div style={{
        borderRadius: 16,
        height: 180,
        background: "linear-gradient(135deg, #1a2a1a, #0d1a0d)",
        border: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Fake map grid */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}>
          {[...Array(8)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 25} x2="100%" y2={i * 25} stroke={p.accentColor} strokeWidth="0.5" />
          ))}
          {[...Array(12)].map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="100%" stroke={p.accentColor} strokeWidth="0.5" />
          ))}
        </svg>
        {/* Pin dots */}
        {suggestions.map((s, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${25 + i * 25}%`,
            top: `${30 + (i % 2) * 30}%`,
            width: 12, height: 12,
            borderRadius: "50%",
            background: p.accentColor,
            boxShadow: `0 0 12px ${p.accentColor}`,
            border: "2px solid white",
          }} />
        ))}
        <div style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 8,
          padding: "8px 14px",
          fontFamily: "'DM Sans'",
          fontSize: 12,
          color: "#aaa",
        }}>Open in Maps →</div>
      </div>

      {/* Location list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {suggestions.map((s, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14,
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            animation: `fadeUp 0.4s ease ${i * 0.1}s both`,
          }}>
            <div style={{
              width: 44, height: 44,
              borderRadius: 12,
              background: `${p.accentColor}20`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22,
            }}>🗺</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 14, fontWeight: 500, color: "#e0d8c8" }}>{s.name}</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#555", marginTop: 2 }}>{s.type}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: p.accentLight }}>⭐ {s.rating}</div>
              <div style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#555", marginTop: 2 }}>{s.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommunityTab({ practice: p }) {
  const posts = [
    { user: "Maria K.", location: "Kyoto, Japan", time: "2 days ago", reflection: "Sat under a cedar for 40 minutes. Forgot my name in the best way.", photo: p.communityPhotos[0] },
    { user: "Thomas H.", location: "Munich, Germany", time: "5 days ago", reflection: "Third time this month. The trees feel familiar now.", photo: p.communityPhotos[1] },
    { user: "Saoirse L.", location: "Vancouver, Canada", time: "1 week ago", reflection: "Did this with my daughter. She found a beetle. Two hours flew by.", photo: p.communityPhotos[2] },
  ];

  return (
    <div style={{ animation: "fadeUp 0.4s ease both" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 20,
      }}>
        <div style={{ fontFamily: "'Cormorant SC'", fontSize: 10, letterSpacing: "0.25em", color: p.accentLight, textTransform: "uppercase" }}>
          From the community
        </div>
        <div style={{ fontFamily: "'DM Sans'", fontSize: 12, color: "#555" }}>{p.completions.toLocaleString()} practiced</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {posts.map((post, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16,
            overflow: "hidden",
            animation: `fadeUp 0.4s ease ${i * 0.1}s both`,
          }}>
            <img
              src={post.photo}
              alt="community"
              style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <div>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 500, color: "#e0d8c8" }}>{post.user}</span>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#444", marginLeft: 8 }}>📍{post.location}</span>
                </div>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#444" }}>{post.time}</span>
              </div>
              <p style={{
                fontFamily: "'Cormorant Garamond'",
                fontSize: 17,
                fontStyle: "italic",
                color: "#9a9080",
                lineHeight: 1.5,
              }}>"{post.reflection}"</p>

              {/* Badge earned */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginTop: 10,
                background: `${p.accentColor}20`,
                border: `1px solid ${p.accentColor}40`,
                borderRadius: 100,
                padding: "4px 10px",
              }}>
                <span style={{ fontSize: 12 }}>🏅</span>
                <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: p.accentLight }}>{p.badge} earned</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add your own */}
      <div style={{
        marginTop: 16,
        border: `1px dashed ${p.accentColor}40`,
        borderRadius: 16,
        padding: "18px",
        textAlign: "center",
        cursor: "pointer",
      }}>
        <div style={{ fontSize: 24, marginBottom: 6 }}>📸</div>
        <div style={{ fontFamily: "'DM Sans'", fontSize: 13, color: "#555" }}>Share your {p.name} experience</div>
      </div>
    </div>
  );
}
