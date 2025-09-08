import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Zap, Cpu, Database } from "lucide-react";
import heroImage from "@/assets/neural-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neural-blue rounded-full animate-neural-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-neural-purple rounded-full animate-neural-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-neural-cyan rounded-full animate-neural-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge 
            variant="outline" 
            className="border-neural-blue text-neural-blue bg-neural-blue/10 backdrop-blur-sm text-sm px-4 py-2"
          >
            <Zap className="w-4 h-4 mr-2" />
            ICML 2025 • Multi-Agent Framework
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-neural bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              AutoML-Agent
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Multi-Agent LLM Framework for <span className="text-neural-blue font-semibold">Full-Pipeline AutoML</span>
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm p-6 group hover:shadow-[var(--neural-shadow)] transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-neural-blue/20">
                  <Brain className="w-6 h-6 text-neural-blue" />
                </div>
                <h3 className="text-lg font-semibold">Multi-Agent System</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Coordinated agents handling data, models, and operations seamlessly
              </p>
            </Card>

            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm p-6 group hover:shadow-[var(--neural-shadow)] transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-neural-purple/20">
                  <Database className="w-6 h-6 text-neural-purple" />
                </div>
                <h3 className="text-lg font-semibold">Multi-Modal Data</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Images, text, tabular, graphs, and time series processing
              </p>
            </Card>

            <Card className="bg-gradient-card border-border/50 backdrop-blur-sm p-6 group hover:shadow-[var(--neural-shadow)] transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-neural-cyan/20">
                  <Cpu className="w-6 h-6 text-neural-cyan" />
                </div>
                <h3 className="text-lg font-semibold">End-to-End Pipeline</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                From data ingestion to model deployment automatically
              </p>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-neural hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-[var(--glow-effect)]"
            >
              Start Building
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neural-blue text-neural-blue hover:bg-neural-blue/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;