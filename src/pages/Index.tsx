import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Seo
        title="AI Automation for South African Businesses | Digital Gems"
        description="Custom AI automation for South African businesses. Based in Durban, I build tools that cut admin, speed up replies and give your team back hours every week."
        path="/"
      />
      <Navbar />
      <Hero />
      <StatsBar />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <Industries />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
