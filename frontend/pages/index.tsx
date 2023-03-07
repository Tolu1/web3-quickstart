import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="relative -top-16 p-6 bg-slate-500 bg-opacity-10 rounded-lg shadow-sm animate-bounce">
            <span className="text-2xl font-bold opacity-40 md:text-4xl xl:text-6xl">
              Web3 Quickstart
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
