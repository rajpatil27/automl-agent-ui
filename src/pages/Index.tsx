import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DataUploadSection from "@/components/DataUploadSection";
import AgentPipeline from "@/components/AgentPipeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DataUploadSection />
        <AgentPipeline />
      </main>
    </div>
  );
};

export default Index;