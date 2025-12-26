import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Youssef Nabil",
    description: "Full Stack Web Developer",
};
//test
export default function RootLayout({ children }) {
    return (
        // ${geistSans.variable} ${geistMono.variable}
        //   <div className="absolute inset-0 z-[-1] ">
        //   <Image className=" w-full mask-inner mask-outer" src="/bg/circle.jpg" alt=""  fill={true} objectFit="contain" />
        // </div>
        <html lang="en">
            <body className={` antialiased h-dvh  test w-screen overflow-hidden`}>
                <div className=" h-[calc(100%-100px)] overflow-hidden">{children}</div>
                    <div className="h-[100px] overflow-hidden">
                        <Navbar />
                    </div>
                    <Analytics/>
            </body>
        </html>
    );
}
