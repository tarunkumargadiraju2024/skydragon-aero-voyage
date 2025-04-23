
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type FleetModel = {
  name: string;
  passengers: string;
  range: string;
  description: string;
};

type FleetCategory = {
  value: string;
  label: string;
  models: FleetModel[];
};

const FLEET: FleetCategory[] = [
  {
    value: "light",
    label: "Light Jet",
    models: [
      {
        name: "Cessna Citation CJ2",
        passengers: "6",
        range: "1,781 nm",
        description: "Perfect balance of efficiency and comfort for short to medium-range trips.",
      },
      {
        name: "Beechcraft King Air 200/250",
        passengers: "6",
        range: "1,720 nm",
        description: "Versatile turboprop offering excellent performance and reliability.",
      }
    ]
  },
  {
    value: "mid",
    label: "Mid Jet",
    models: [
      {
        name: "Beechcraft Hawker 400",
        passengers: "6",
        range: "1,500 nm",
        description: "Efficient mid-size jet perfect for regional flights.",
      },
      {
        name: "Beechcraft Hawker 800/850/900",
        passengers: "7-8",
        range: "2,900 nm",
        description: "Exceptional comfort and range in the midsize category.",
      },
      {
        name: "Cessna Citation XLS+",
        passengers: "8",
        range: "2,100 nm",
        description: "Superior performance with remarkable cabin comfort.",
      },
      {
        name: "Bombardier Learjet 45",
        passengers: "8",
        range: "2,000 nm",
        description: "Classic design with modern amenities and reliability.",
      }
    ]
  },
  {
    value: "supermid",
    label: "Super Mid Jet",
    models: [
      {
        name: "Embraer Legacy 600/650",
        passengers: "13",
        range: "3,900 nm",
        description: "Spacious cabin with intercontinental range capabilities.",
      },
      {
        name: "Bombardier Challenger 605",
        passengers: "10-12",
        range: "4,000 nm",
        description: "Premium comfort with outstanding performance.",
      },
      {
        name: "Hawker 4000",
        passengers: "8",
        range: "3,280 nm",
        description: "Advanced composite construction with superior comfort.",
      },
      {
        name: "Gulfstream G200",
        passengers: "8",
        range: "3,400 nm",
        description: "Excellent range with spacious stand-up cabin.",
      },
      {
        name: "Gulfstream G150",
        passengers: "7",
        range: "3,000 nm",
        description: "Efficient performance with luxury amenities.",
      },
      {
        name: "Falcon 2000",
        passengers: "9",
        range: "3,350 nm",
        description: "Renowned French engineering with exceptional comfort.",
      }
    ]
  },
  {
    value: "large",
    label: "Large Jet",
    models: [
      {
        name: "Bombardier Global 5000/6000/7500",
        passengers: "13-18",
        range: "7,700 nm",
        description: "Ultimate luxury for long-range travel with multiple living spaces.",
      },
      {
        name: "Gulfstream G450/550",
        passengers: "13-18",
        range: "6,750 nm",
        description: "Exceptional performance with renowned cabin experience.",
      }
    ]
  }
];

type Props = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  error?: string;
};

export default function FleetCategorySelector({
  selectedCategory,
  setSelectedCategory,
  selectedModel,
  setSelectedModel,
  error,
}: Props) {
  // Get the currently selected category object
  const category = FLEET.find((c) => c.value === selectedCategory);

  return (
    <div>
      <label className="font-medium block mb-1">Select Fleet Category</label>
      <Select
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val);
          setSelectedModel(""); // clear model when category changes
        }}
      >
        <SelectTrigger className={cn("w-full bg-white", error && "border-destructive")}>
          <SelectValue placeholder="Choose Jet Category" />
        </SelectTrigger>
        <SelectContent className="z-[99] bg-white">
          <SelectGroup>
            <SelectLabel>Fleet Categories</SelectLabel>
            {FLEET.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* Model selection for chosen category */}
      {selectedCategory && category && (
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Select Jet Model</label>
          <Select
            value={selectedModel}
            onValueChange={(val) => setSelectedModel(val)}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder={`Select a ${category.label}`} />
            </SelectTrigger>
            <SelectContent className="z-[99] bg-white">
              <SelectGroup>
                <SelectLabel>{category.label} Options</SelectLabel>
                {category.models.map((model) => (
                  <SelectItem key={model.name} value={model.name}>
                    <span className="font-semibold">{model.name}</span>
                    <div className="text-xs text-muted-foreground">{model.description}</div>
                    <div className="text-xs text-skyblue-dark">
                      {model.passengers} pax • {model.range} range
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
      {error && <div className="mt-1 text-sm font-medium text-destructive">{error}</div>}
    </div>
  );
}
