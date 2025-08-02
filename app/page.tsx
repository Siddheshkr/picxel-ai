import FeaturesSection from "@/components/ui/features";
import HerosSection from "@/components/ui/hero";
import PricingSection from "@/components/ui/pricing";

export default function Home() {
  return (
    <div className="pt-28">
      {/* Hero section ====>>> */}
      <HerosSection />
      {/* Stats ====>>> */}
      {/* Features ====> */}
      <FeaturesSection/>
      {/* Pricing ====> */}
      <PricingSection/>
    </div>
  );
}
