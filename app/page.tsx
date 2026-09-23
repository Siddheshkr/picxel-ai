import FeaturesSection from "@/components/ui/features";
import HerosSection from "@/components/ui/hero";
import PricingSection from "@/components/ui/pricing";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="pt-28">
      {/* Hero section ====>>> */}
      <HerosSection />
      {/* Stats ====>>> */}
      {/* Features ====> */}
      <FeaturesSection />
      {/* Pricing ====> */}
      <PricingSection />
      <Footer />
    </div>
  );
}
