import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import ROIStrip from "@/components/ROIStrip";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <ROIStrip />
      <Industries />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
