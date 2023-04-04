import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { HomePage } from "@/components/pages/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <HomePage />
    </main>
  );
}
