import Masonry from "@/blocks/Components/Masonry/Masonry";
import CallToAction from "@/components/shared/CallToAction";
import Page from "@/components/shared/Page";
import ParallaxSection from "@/components/shared/ParallaxSection";
import { images } from "@/utils/constants";
import AzureHero from "./subcomponents/AzureHero";
import AzureOverview from "./subcomponents/AzureOverview";
import AzureGoals from "./subcomponents/AzureGoals";
import AzureProcess from "./subcomponents/AzureProcess";
import AzureConclusion from "./subcomponents/AzureConclusion";

const AzureCaseStudy = () => {
  return (
    <>
      <AzureHero />
      <h2 className="text-6xl py-10 font-bold text-center text-gray-200 bg-[#111] leading-tight ">
        Azure II
      </h2>
      <AzureOverview />
      <ParallaxSection image={images.azureCaseStudy3} />

      <AzureGoals />
      <AzureProcess />
      <AzureConclusion />

      <CallToAction
        tagline="Looking to elevate your real estate project with premium 3D visualization? "
        taglineTwo="Contact Render Verse today!"
      />
    </>
  );
};

export default AzureCaseStudy;
