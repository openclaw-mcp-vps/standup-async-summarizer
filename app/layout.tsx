import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StandupSync – Convert Slack Threads into Standup Summaries",
  description: "Analyzes team Slack conversations and generates daily standup summaries with blockers and progress. Perfect for engineering managers and remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="46470fb7-d3c3-4643-a7b5-51fb0ef3714d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
