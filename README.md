# 🇳🇵 Nepal News Hub

> **Premium Static News Aggregator** • Real-time updates from 20+ top Nepali news sources.

![Nepal News Hub Mockup](https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop)

Nepal News Hub is a high-performance, visually stunning news aggregator designed to keep you informed with the latest stories from Nepal. It operates as a **zero-backend static site**, leveraging GitHub Actions for automated data fetching and Vercel for lightning-fast delivery.

---

## ✨ Key Features

- 🚀 **Ultra-Fast Performance**: Built with Next.js App Router for instant page transitions.
- 🎨 **Premium Aesthetics**: Modern "Glassmorphism" UI with dark mode and smooth animations.
- 🔄 **Autonomous Pipeline**: GitHub Actions fetch and parse RSS feeds every hour.
- 📂 **Smart Categorization**: News is automatically sorted into Politics, Business, Sports, Tech, and more.
- 📱 **Fully Responsive**: Seamless experience on mobile, tablet, and desktop.
- 🔗 **Direct Attribution**: Always links back to the original source, respecting publishers.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Automation**: [GitHub Actions](https://github.com/features/actions)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🏗️ How It Works

1.  **Ingestion**: A scheduled GitHub Action runs every hour.
2.  **Processing**: The `fetch-news.mjs` script parses 20+ RSS feeds, extracts high-quality images, and deduplicates headlines.
3.  **Storage**: Parsed data is committed as a static `news.json` in the `public/data` directory.
4.  **Deployment**: Vercel detects the new commit and automatically redeploys the static site with the latest data.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- NPM or Bunny/PNPM/Yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/nepal-news-hub.git
   cd nepal-news-hub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Manually fetch news data**:
   ```bash
   npm run fetch-news
   ```

---

## 🔧 Configuration

Add or remove news sources by editing [scripts/feeds.mjs](file:///c:/Users/LENOVO/Desktop/News hub/scripts/feeds.mjs):

```javascript
{ source: "Onlinekhabar", category: "General", url: "https://www.onlinekhabar.com/feed" }
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🤝 Acknowledgments

We aggregate headlines from public sources. Full content belongs to respective publishers. Special thanks to the Nepali digital news community for providing accessible RSS feeds.

---
<p align="center">Made with ❤️ for Nepal</p>
