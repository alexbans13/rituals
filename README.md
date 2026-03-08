# Rituals

A mobile app for discovering and practicing cultural rituals from around the world. Built with **Expo** for iOS and Android.

## Features (Phase 1)

- **Discovery feed** — Browse 7 practices (Shinrin-yoku, Fika, Hygge, Passeggiata, Niksen, Sobremesa, Manaakitanga) with mood filters (All / Restore / Connect).
- **Practice detail** — Each practice has a hero video (Forest Bathing uses a local video; others use poster/remote), and four tabs: **Heart** (philosophy & badge), **Experience** (step-by-step guide), **Nearby** (map placeholder), **Community** (reflections).
- **My Rituals** — Placeholder tab for Phase 2 (passport, streaks, badges).
- **Completion tracking** — Mark practices as completed; state is kept in memory (persistence in Phase 2).

## Run the app

```bash
npm install
npm start
```

Then press `i` for iOS simulator, `a` for Android emulator, or `w` for web.

```bash
npm run ios     # iOS
npm run android # Android
npm run web     # Web
```

## Project structure

- `app/` — Expo Router screens: `(tabs)/index` (Home), `(tabs)/my-rituals`, `practice/[id]`.
- `src/data/practices.ts` — All practice data (from the original `rituals-app.jsx` prototype).
- `src/context/CompletedContext.tsx` — Completion state (in-memory).
- `components/` — `PracticeCard`, `PracticeHeartTab`, `PracticeExperienceTab`, `PracticeNearbyTab`, `PracticeCommunityTab`.
- `assets/videos/forest-bathing.mp4` — Single Forest Bathing video used for Shinrin-yoku (copied from your project root).

## Reference

The original web prototype is in `rituals-app.jsx` for reference. This Expo app reuses the same data and UI structure.
