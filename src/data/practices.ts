export interface PracticeStep {
  icon: string;
  title: string;
  desc: string;
}

export interface Practice {
  id: string;
  name: string;
  translation: string;
  country: string;
  flag: string;
  tagline: string;
  mood: string;
  duration: string;
  difficulty: string;
  accentColor: string;
  accentLight: string;
  textColor: string;
  videoUrl: string;
  videoPoster: string;
  heart: string;
  steps: PracticeStep[];
  badge: string;
  badgeTranslation: string;
  communityPhotos: string[];
  nearbyLabel: string;
  completions: number;
}

export const practices: Practice[] = [
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

export const moodColors: Record<string, string> = {
  Restore: "#4a7c59",
  Connect: "#b5451b",
  Wonder: "#7a5c3e",
};

export function getPracticeById(id: string): Practice | undefined {
  return practices.find((p) => p.id === id);
}
