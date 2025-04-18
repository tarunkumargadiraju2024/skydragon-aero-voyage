
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Sailboat, Ship } from "lucide-react";

const fleetCategories = [
  {
    id: "light",
    name: "Light Jets",
    icon: <Plane className="h-5 w-5" />,
    models: [
      {
        name: "Citation CJ2+",
        passengers: "6-7",
        range: "1,700 nm",
        description: "Perfect for short trips with exceptional comfort and efficiency."
      },
      {
        name: "Beechcraft King Air 250",
        passengers: "8-9",
        range: "1,720 nm",
        description: "Versatile turboprop offering reliability and access to shorter runways."
      }
    ]
  },
  {
    id: "mid",
    name: "Mid Jets",
    icon: <Sailboat className="h-5 w-5" />,
    models: [
      {
        name: "Dassault Falcon",
        passengers: "8-10",
        range: "4,000 nm",
        description: "Renowned for exceptional performance and elegant French design."
      },
      {
        name: "Hawker",
        passengers: "8-9",
        range: "3,000 nm",
        description: "Spacious cabin with remarkable comfort for mid-range journeys."
      },
      {
        name: "Challenger 650",
        passengers: "10-12",
        range: "4,000 nm",
        description: "Wide cabin design providing a true premium experience."
      }
    ]
  },
  {
    id: "heavy",
    name: "Heavy Jets",
    icon: <Ship className="h-5 w-5" />,
    models: [
      {
        name: "Global 7500",
        passengers: "14-17",
        range: "7,700 nm",
        description: "Ultimate luxury for long-range travel with four distinct living spaces."
      },
      {
        name: "Gulfstream 550",
        passengers: "14-19",
        range: "6,750 nm",
        description: "Exceptional performance with renowned cabin experience and comfort."
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
          Experience luxury and performance across our carefully curated collection of aircraft.
        </p>

        <Tabs defaultValue="light" className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-3 mb-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
