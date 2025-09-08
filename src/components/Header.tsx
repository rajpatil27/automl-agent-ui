import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Menu, Github, FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-neural">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-neural bg-clip-text text-transparent">
                AutoML-Agent
              </span>
              <Badge variant="secondary" className="text-xs px-2 py-0 h-auto">
                ICML 2025
              </Badge>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pipeline" className="text-muted-foreground hover:text-foreground transition-colors">
              Pipeline
            </a>
            <a href="#datasets" className="text-muted-foreground hover:text-foreground transition-colors">
              Datasets
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <FileText className="w-4 h-4 mr-2" />
              Paper
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-neural hover:opacity-90 text-white"
            >
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;