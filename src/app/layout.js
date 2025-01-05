import localFont from "next/font/local";
import "./globals.css";
import CommonLayout from "./components/common-layout";
import { FinInfoProvider } from "./components/context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased `}
      >
        <FinInfoProvider>
          <CommonLayout
            children = {children}
            />
        </FinInfoProvider>
      </body>
    </html>
  );
}
