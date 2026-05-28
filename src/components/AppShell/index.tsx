"use client";

import { BigTypeBackground } from "@/components/BigTypeBackground";
import { DoumiaoCharacter } from "@/components/DoumiaoCharacter";
import { FloatingMotifs } from "@/components/FloatingMotifs";
import { Header } from "@/components/Header";
import { HeroQuote } from "@/components/HeroQuote";
import { InteractionHint } from "@/components/InteractionHint";

export function AppShell() {
  return (
    <div className="app-shell">
      <main className="home-stage" aria-label="杨艳艳 Portfolio 首页舞台">
        <BigTypeBackground />
        <FloatingMotifs />
        <DoumiaoCharacter />
        <InteractionHint />
      </main>
      <HeroQuote />
      <Header />
    </div>
  );
}
