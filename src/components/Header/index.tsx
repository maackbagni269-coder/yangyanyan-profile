import { DoumiaoLogoBlock } from "@/components/DoumiaoLogoBlock";
import { JobIntentLinks } from "@/components/JobIntentLinks";
import { MarqueeIntro } from "@/components/MarqueeIntro";
import { MobileMenuButton } from "@/components/MobileMenu";
import { NavGrid } from "@/components/NavGrid";

export function Header() {
  return (
    <header className="site-header">
      <DoumiaoLogoBlock />
      <MarqueeIntro />
      <JobIntentLinks />
      <NavGrid />
      <MobileMenuButton />
    </header>
  );
}
