import "./globals.css";

import Header from "./components/other/Header";

export const metadata = {
  title: "Shop",
  description: "Semester 3 Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
