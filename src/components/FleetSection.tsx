
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, PlaneTakeoff, Plane2, JetTakeoff } from "lucide-react";

const fleetCategories = [
  {
    id: "light",
    name: "Light Jets",
    icon: <Plane className="h-5 w-5" />,
    models: [
      {
        name: "Cessna Citation CJ2",
        passengers: "6",
        range: "1,781 nm",
        description: "Perfect balance of efficiency and comfort for short to medium-range trips."
      },
      {
        name: "Beechcraft King Air 200/250",
        passengers: "6",
        range: "1,720 nm",
        description: "Versatile turboprop offering excellent performance and reliability."
      }
    ]
  },
  {
    id: "mid",
    name: "Mid Jets",
    icon: <PlaneTakeoff className="h-5 w-5" />,
    models: [
      {
        name: "Beechcraft Hawker 400",
        passengers: "6",
        range: "1,500 nm",
        description: "Efficient mid-size jet perfect for regional flights."
      },
      {
        name: "Beechcraft Hawker 800/850/900",
        passengers: "7-8",
        range: "2,900 nm",
        description: "Exceptional comfort and range in the midsize category."
      },
      {
        name: "Cessna Citation XLS+",
        passengers: "8",
        range: "2,100 nm",
        description: "Superior performance with remarkable cabin comfort."
      },
      {
        name: "Bombardier Learjet 45",
        passengers: "8",
        range: "2,000 nm",
        description: "Classic design with modern amenities and reliability."
      }
    ]
  },
  {
    id: "supermid",
    name: "Super Mid Jets",
    icon: <Plane2 className="h-5 w-5" />,
    models: [
      {
        name: "Embraer Legacy 600/650",
        passengers: "13",
        range: "3,900 nm",
        description: "Spacious cabin with intercontinental range capabilities."
      },
      {
        name: "Bombardier Challenger 605",
        passengers: "10-12",
        range: "4,000 nm",
        description: "Premium comfort with outstanding performance."
      },
      {
        name: "Hawker 4000",
        passengers: "8",
        range: "3,280 nm",
        description: "Advanced composite construction with superior comfort."
      },
      {
        name: "Gulfstream G200",
        passengers: "8",
        range: "3,400 nm",
        description: "Excellent range with spacious stand-up cabin."
      },
      {
        name: "Gulfstream G150",
        passengers: "7",
        range: "3,000 nm",
        description: "Efficient performance with luxury amenities."
      },
      {
        name: "Falcon 2000",
        passengers: "9",
        range: "3,350 nm",
        description: "Renowned French engineering with exceptional comfort."
      }
    ]
  },
  {
    id: "large",
    name: "Large Jets",
    icon: <JetTakeoff className="h-5 w-5" />,
    models: [
      {
        name: "Bombardier Global 5000/6000/7500",
        passengers: "13-18",
        range: "7,700 nm",
        description: "Ultimate luxury for long-range travel with multiple living spaces."
      },
      {
        name: "Gulfstream G450/550",
        passengers: "13-18",
        range: "6,750 nm",
        description: "Exceptional performance with renowned cabin experience."
      }
    ]
  }
];

const FleetSection = () => {
  return (
    <section id="fleet" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-blue">Our Impressive Fleet</h2>
        <p className="section-subtitle">
          Experience luxury and performance across our meticulously maintained collection of aircraft.
        </p>

        <Tabs defaultValue="light" className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {fleetCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-skyblue data-[state=active]:text-white"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {fleetCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.models.map((model, index) => (
                  <Card key={index} className="bg-cloud-light hover-lift border-t-4 border-t-skyblue overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-brand-blue">{model.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-gray-500 mb-1">Passengers</p>
                          <p className="font-semibold text-skyblue-dark">{model.passengers}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="text-gray-500 mb-1">Range</p>
                          <p className="font-semibold text-skyblue-dark">{model.range}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{model.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FleetSection;
