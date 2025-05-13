import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Middle from "./componenets/Middle";
import StudyInfo from "./componenets/Study";
import MiddleDown from "./componenets/Middledown";
import Fulldown from "./componenets/Fulldown";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
    
      >

        {children}
          <StudyInfo/>                      
      <Middle/>
      <MiddleDown/>  
      <Fulldown/>
    
      </body>
    </html>
  );
}
