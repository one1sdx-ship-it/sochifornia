import { Hero } from "@/components/sections/hero";
import { PartnersSection } from "@/components/sections/partners-section";
import { PopularToursSection } from "@/components/sections/popular-tours-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { GuidesSection } from "@/components/sections/guides-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { FaqSection } from "@/components/sections/faq-section";
import { LeadSection } from "@/components/sections/lead-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <PopularToursSection />
      <CategoriesSection />
      <WhyUsSection />
      <GallerySection />
      <GuidesSection />
      <ReviewsSection />
      <FaqSection />
      <LeadSection />
    </>
  );
}
