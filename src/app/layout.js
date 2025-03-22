import localFont from "next/font/local";
import "./globals.css";
import CommonLayout from "./components/common-layout";
import { AdityatechProvider } from "./components/context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased `}
      >
        <AdityatechProvider>
          <CommonLayout
            children = {children}
            />
        </AdityatechProvider>
      </body>
    </html>
  );
}
