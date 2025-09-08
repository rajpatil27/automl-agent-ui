import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Settings, 
  MessageSquare, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const agents = [
  {
    id: "data",
    title: "Data Agent",
    description: "Intelligent data preprocessing and feature engineering",
    icon: Database,
    color: "neural-blue",
    capabilities: [
      "Automated data cleaning",
      "Feature selection",
      "Missing value handling",
      "Data validation"
    ]
  },
  {
    id: "model", 
    title: "Model Agent",
    description: "Smart model selection and hyperparameter optimization",
    icon: Brain,
    color: "neural-purple",
    capabilities: [
      "Architecture search",
      "Hyperparameter tuning", 
      "Model comparison",
      "Performance optimization"
    ]
  },
  {
    id: "operation",
    title: "Operation Agent", 
    description: "Deployment and monitoring of ML models",
    icon: Settings,
    color: "neural-cyan",
    capabilities: [
      "Model deployment",
      "Performance monitoring",
      "Auto-scaling",
      "Error handling"
    ]
  },
  {
    id: "prompt",
    title: "Prompt Agent",
    description: "Instruction generation and task orchestration",
    icon: MessageSquare,
    color: "accent", 
    capabilities: [
      "Task planning",
      "Instruction generation",
      "Agent coordination",
      "Result interpretation"
    ]
  }
];

const AgentPipeline = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge 
            variant="outline"
            className="border-neural-cyan text-neural-cyan bg-neural-cyan/10 mb-4"
          >
            <Zap className="w-4 h-4 mr-2" />
            Intelligent Automation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Multi-Agent <span className="bg-gradient-neural bg-clip-text text-transparent">Pipeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four specialized AI agents work together to create the perfect machine learning solution for your data
          </p>
        </div>

        {/* Pipeline Flow */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {agents.map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <div key={agent.id} className="relative">
                  <Card className="bg-gradient-card border-border/50 p-6 h-full group hover:shadow-[var(--neural-shadow)] transition-all duration-300">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-2xl bg-${agent.color}/20 group-hover:bg-${agent.color}/30 transition-colors`}>
                        <IconComponent className={`w-8 h-8 text-${agent.color}`} />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{agent.description}</p>
                      </div>

                      <div className="space-y-2 w-full">
                        {agent.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center space-x-2 text-left">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* Arrow between agents */}
                  {index < agents.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="bg-background rounded-full p-2 border border-border shadow-lg">
                        <ArrowRight className="w-4 h-4 text-neural-blue" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile arrows */}
          <div className="md:hidden flex justify-center mt-4 space-x-2">
            {agents.slice(0, -1).map((_, index) => (
              <ArrowRight key={index} className="w-5 h-5 text-neural-blue" />
            ))}
          </div>
        </div>

        {/* Manager Agent */}
        <Card className="bg-gradient-neural p-8 text-center border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">Agent Manager</h3>
            <p className="text-white/90 text-lg mb-6">
              The orchestrator that coordinates all agents, manages the pipeline flow, 
              and ensures optimal results for your specific use case.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Task Coordination
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Resource Management  
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Quality Assurance
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AgentPipeline;