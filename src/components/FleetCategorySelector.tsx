
import { useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue, SelectLabel, SelectGroup } from "@/components/ui/select";
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
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedModels: Record<string, string>; // key: category, value: jet name
  setSelectedModels: (models: Record<string, string>) => void;
  error?: string;
};

export default function FleetCategorySelector({
  selectedCategories,
  setSelectedCategories,
  selectedModels,
  setSelectedModels,
  error,
}: Props) {
  // Clean up selected models if user removes a category
  useEffect(() => {
    setSelectedModels(models =>
      Object.fromEntries(
        Object.entries(models).filter(([key]) =>
          selectedCategories.includes(key)
        )
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories.join(",")]);

  return (
    <div>
      <label className="font-medium block mb-1">Fleet Preferences</label>
      <div className={cn("p-2 space-y-1 bg-white rounded border", error && "border-destructive")}>
        {FLEET.map(option => (
          <div
            key={option.value}
            className={cn(
              "flex flex-col lg:flex-row lg:items-center px-2 py-2 hover:bg-skyblue/10 rounded cursor-pointer transition",
              selectedCategories.includes(option.value) && "bg-skyblue/10"
            )}
            onClick={() => {
              if (selectedCategories.includes(option.value)) {
                setSelectedCategories(selectedCategories.filter(v => v !== option.value));
              } else {
                setSelectedCategories([...selectedCategories, option.value]);
              }
            }}
          >
            <div className="flex items-center">
              <Checkbox
                checked={selectedCategories.includes(option.value)}
                tabIndex={-1}
                aria-label={option.label}
                className="mr-3"
              />
              <span className="font-medium">{option.label}</span>
            </div>
            <span className="block text-xs text-muted-foreground ml-8 mt-1 lg:mt-0 lg:ml-4 max-w-xs">{option.models.map(m => m.name).join(", ")} ({option.models.length} options)</span>
          </div>
        ))}
      </div>
      {error && <div className="mt-1 text-sm font-medium text-destructive">{error}</div>}
      {/* For each selected category, show select */}
      <div className="mt-4 space-y-4">
        {selectedCategories.map(catValue => {
          const category = FLEET.find(f => f.value === catValue);
          if (!category) return null;
          return (
            <div key={catValue}>
              <label className="block text-sm font-medium mb-2">Select {category.label}</label>
              <Select
                value={selectedModels[catValue] || ""}
                onValueChange={val => setSelectedModels({ ...selectedModels, [catValue]: val })}
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder={`Select a ${category.label}`} />
                </SelectTrigger>
                <SelectContent className="z-[99] bg-white">
                  <SelectGroup>
                    <SelectLabel>{category.label} Options</SelectLabel>
                    {category.models.map(model => (
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
          );
        })}
      </div>
    </div>
  );
}
