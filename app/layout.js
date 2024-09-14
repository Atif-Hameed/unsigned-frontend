import localFont from "next/font/local";
import "./globals.css";


const dinNext = localFont({
  src: [
    {
      path: "./fonts/DINNextW1G-Light.otf",
      weight: '300'
    },
    {
      path: "./fonts/DINNextW1G-Regular.otf",
      weight: '400'
    },
    {
      path: "./fonts/DINNextW1G-Medium.otf",
      weight: '500'
    },
    {
      path: "./fonts/DINNextW1G-Heavy.otf",
      weight: '600'
    },
    {
      path: "./fonts/DINNextW1G-Bold.otf",
      weight: '700'
    },
    {
      path: "./fonts/DINNextW1G-Black.otf",
      weight: '800'
    },
  ],
  variable: '--font-dinNext'
})



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${dinNext.variable} font-dinNext antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}