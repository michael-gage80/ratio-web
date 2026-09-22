import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Anatomy from "@/components/home/Anatomy";
import TryIt from "@/components/home/TryIt";
import Method from "@/components/home/Method";
import Profile from "@/components/home/Profile";
import DuelTeaser from "@/components/home/DuelTeaser";
import Modules from "@/components/home/Modules";
import Principles from "@/components/home/Principles";
import Ambassadors from "@/components/home/Ambassadors";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Anatomy />
      <TryIt />
      <Method />
      <Profile />
      <DuelTeaser />
      <Modules />
      <Principles />
      <Ambassadors />
    </>
  );
}
