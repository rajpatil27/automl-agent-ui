import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileImage, 
  FileText, 
  Database, 
  GitBranch, 
  TrendingUp, 
  Upload,
  CheckCircle
} from "lucide-react";

const dataTypes = [
  {
    id: "image",
    title: "Computer Vision",
    description: "Image classification and object detection",
    icon: FileImage,
    color: "neural-blue",
    examples: ["Butterfly Classification", "Shopee-IET Competition"],
    formats: ["JPG", "PNG", "BMP"]
  },
  {
    id: "text", 
    title: "Natural Language",
    description: "Text classification and sentiment analysis",
    icon: FileText,
    color: "neural-purple", 
    examples: ["E-commerce Text", "Textual Entailment"],
    formats: ["TXT", "CSV", "JSON"]
  },
  {
    id: "tabular",
    title: "Tabular Data",
    description: "Classification, clustering, and regression",
    icon: Database,
    color: "neural-cyan",
    examples: ["Banana Quality", "Software Defects"],
    formats: ["CSV", "XLSX", "TSV"]
  },
  {
    id: "graph",
    title: "Graph Learning", 
    description: "Node classification and graph analysis",
    icon: GitBranch,
    color: "accent",
    examples: ["Cora Dataset", "Citeseer Network"],
    formats: ["GML", "GraphML", "JSON"]
  },
  {
    id: "timeseries",
    title: "Time Series",
    description: "Forecasting and temporal pattern analysis", 
    icon: TrendingUp,
    color: "neural-glow",
    examples: ["Weather Prediction", "Electricity Load"],
    formats: ["CSV", "TSV", "JSON"]
  }
];

const DataUploadSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge 
            variant="outline"
            className="border-neural-purple text-neural-purple bg-neural-purple/10 mb-4"
          >
            Multi-Modal Support
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upload Your <span className="bg-gradient-neural bg-clip-text text-transparent">Data</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI agents automatically detect your data type and build the optimal machine learning pipeline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dataTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <Card 
                key={type.id}
                className="bg-gradient-card border-border/50 p-6 group hover:shadow-[var(--neural-shadow)] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${type.color}/20`}>
                      <IconComponent className={`w-6 h-6 text-${type.color}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {type.formats.join(" • ")}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-medium text-muted-foreground">Example Datasets:</p>
                    {type.examples.map((example, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-muted-foreground">{example}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload {type.title} Data
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Upload Zone */}
        <Card className="bg-gradient-card border-2 border-dashed border-border hover:border-neural-blue/50 transition-colors duration-300 p-12 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <div className="p-6 rounded-full bg-neural-blue/20 w-24 h-24 mx-auto flex items-center justify-center">
              <Upload className="w-12 h-12 text-neural-blue" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-2">Quick Start</h3>
              <p className="text-muted-foreground">
                Drag and drop your dataset or click to browse. 
                Our agents will automatically detect the format and start processing.
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-neural hover:opacity-90 text-primary-foreground font-semibold px-8"
            >
              Choose Files
            </Button>
            
            <p className="text-xs text-muted-foreground">
              Supports all major data formats • Max file size: 1GB
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DataUploadSection;