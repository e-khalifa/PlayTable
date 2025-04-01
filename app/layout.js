import "./globals.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

export const metadata = {
  title: "PlayTable - Fun & Competitive Games",
  description: "Learn more about PlayTable and how we bring fun to players worldwide.",
  keywords: "games, leaderboard, multiplayer, PlayTable",
  openGraph: {
    title: "PlayTable - Fun & Competitive Games",
    description: "Enjoy various fun games and climb the leaderboard!",
    // url: "https://yourwebsite.com",
    siteName: "PlayTable",
    type: "website",
    images: [
      {
        // url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PlayTable Banner",
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer ></Footer>
      </body>
    </html>
  );
}

