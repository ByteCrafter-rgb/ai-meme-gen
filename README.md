# MemeAI 🎭

AI-powered meme generator built with **React + TypeScript + Vite**.  
Upload an image, generate multiple meme variations using an image LLM, choose your favorite, and save it to your collection.

---

## Features

- 📤 Image upload + preview
- 🤖 AI meme generation via OpenRouter image models
- 🖼 Generate multiple meme variations
- ✨ Loading skeleton while generation runs
- ✅ Meme selection workflow
- 💾 Save selected memes
- 📚 Saved meme history page
- 🎨 Planned caption editor + canvas tools

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### AI

- OpenRouter API
- Gemini image generation models

### Planned Storage

- Cloudinary

---

## Project Structure

```txt
src/

components/
│
├── sections/
│   ├── Navbar.tsx
│   └── middle/
│       ├── HeroSection.tsx
│       └── UploadSection.tsx
│
└── memes/
    ├── CurrentGeneration.tsx
    ├── MemeGrid.tsx
    ├── MemeCard.tsx
    ├── RegenerateButton.tsx
    ├── LoadingGrid.tsx
    │
    └── history/
        ├── HistorySection.tsx
        ├── HistoryGrid.tsx
        └── HistoryCard.tsx


pages/
├── Home.tsx
├── MyMemes.tsx
└── Saved.tsx


services/
├── memeAPI.ts
├── openrouter.ts
├── imageUtils.ts
├── history.ts
└── cloudinary.ts (planned)


types/
└── meme.ts
```

---

## App Flow

```txt
Upload image

↓

Preview image

↓

Generate

↓

Route → /my-memes

↓

Loading skeleton

↓

AI generates memes

↓

Display generated memes

↓

User selects meme

↓

Save selection

↓

Route → /saved

↓

History thumbnails
```

---

## Routes

### Home

```txt
/
```

Features:

- Hero section
- Upload section
- Image preview
- Generate button

---

### My Memes

```txt
/my-memes
```

Features:

- Loading grid
- Current generation
- Meme selection
- Save workflow
- Regenerate button

---

### Saved

```txt
/saved
```

Features:

- Saved meme history
- Thumbnail previews

---

## Environment Variables

Create:

```bash
.env
```

Add:

```env
VITE_OPENROUTER_API_KEY=YOUR_KEY
```

---

## Installation

Clone:

```bash
git clone <repo-url>
```

Install:

```bash
npm install
```

Run:

```bash
npm run dev
```

---

## AI Generation

Current flow:

```txt
Uploaded image

↓

Convert to base64

↓

OpenRouter image API

↓

Generate meme variations

↓

Render images
```

---

## Current Progress

### Completed

- Upload flow
- Image preview
- API integration
- AI image rendering
- Multi-meme generation
- Selection flow
- Save UI
- Routing
- Cloudinary storage migration
- Saved meme persistence

### Planned

- Caption editor
- Meme canvas
- Font customization
- Template swapping
- Humor styles
- Regenerate variants
- Download support
- Share support

---

## Future Vision

```txt
Upload

↓

Generate

↓

Select

↓

Edit caption

↓

Customize meme

↓

Save

↓

Share
```

---

Built with memes and questionable humor.