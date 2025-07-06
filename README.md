# 🎧 Podcast Grid Viewer

This React application fetches podcast data from a public API and displays it in a responsive grid layout. It provides a clean user interface with a loading indicator and formatted timestamps.

## 🚀 Features

🔁 Fetches podcast data from a public API on component mount

- ⏳ Loading indicator while data is being fetched
- 🧾 Displays metadata: podcast image, title, seasons, genres, and last updated date
- 📅 Uses a utility function (DateUtils.format) to format update dates
- ⚛️ Built using React 18+, useState, useEffect, and StrictMode

## 🧠 How It Works
### 1. DataFetcher Component
   
This component handles:

- Fetching data from https://podcast-api.netlify.app/
- Managing loading state
- Rendering the fetched podcast cards

### 2. Data Display

Each podcast card shows:

- 🎙 Cover image
- 🏷 Title
- 🔢 Number of seasons
- 🧬 Genre(s)
- 🕒 Last updated (formatted via DateUtils.format())

## ✅ Expected Output

A grid of podcast cards displaying artwork, metadata, and last update info dynamically fetched from the API.
