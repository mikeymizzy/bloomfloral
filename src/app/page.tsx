import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "Majestic Florist | Bespoke Floral Decor & Event Styling in Johannesburg",
  description:
    "Discover luxury bespoke floral arrangements and event styling for weddings, corporate functions, and celebrations. Expert florist in Johannesburg.",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>
  );
}
