import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "Majestic Florist | Decor, Functions and Events",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>
  );
}
