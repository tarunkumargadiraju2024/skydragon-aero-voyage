import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FleetImageGallery from "./FleetImageGallery";

const fleetCategories = [
  {
    id: "light",
    name: "Light Jets",
    models: [
      {
        name: "Cessna Citation CJ2",
        passengers: "6",
        range: "1,781 nm",
        description: "Perfect balance of efficiency and comfort for short to medium-range trips.",
        images: [
          "/lovable-uploads/ab8b7f08-ef9f-44a5-8ffb-c1177471ad4f.png",
          "/lovable-uploads/bef91858-b212-42b3-a5b6-0b8f12b87036.png"
        ]
      },
      {
        name: "Beechcraft King Air 200/250",
        passengers: "6",
        range: "1,720 nm",
        description: "Versatile turboprop offering excellent performance and reliability.",
        images: [
          "/lovable-uploads/07c1d6b9-e132-4bce-899f-7af5d72eb44d.png",
          "/lovable-uploads/f976091d-646a-464d-b928-fe2b285c3f36.png"
        ]
      }
    ]
  },
  {
    id: "mid",
    name: "Mid Jets",
    models: [
      {
        name: "Beechcraft Hawker 400",
        passengers: "6",
        range: "1,500 nm",
        description: "Efficient mid-size jet perfect for regional flights.",
        images: [
          "/lovable-uploads/123f89a4-0fe5-496f-90fe-994fb7309486.png",
          "/lovable-uploads/d55d2a1f-87fd-421c-ad30-06a3fe183e42.png"
        ]
      },
      {
        name: "Beechcraft Hawker 800/850/900",
        passengers: "7-8",
        range: "2,900 nm",
        description: "Exceptional comfort and range in the midsize category.",
        images: [
          "/lovable-uploads/48067916-d682-47fd-9d9f-115939643a31.png",
          "/lovable-uploads/3837fbe1-9d47-412f-b5db-626752b6ceb3.png"
        ]
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
        description: "Classic design with modern amenities and reliability.",
        images: [
          "/lovable-uploads/f617f2ee-a42d-43f7-9225-7238af904923.png",
          "/lovable-uploads/2fdb183c-f043-4a2f-9940-4948a7d374af.png"
        ]
      }
    ]
  },
  {
    id: "supermid",
    name: "Super Mid Jets",
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
                className="data-[state=active]:bg-skyblue data-[state=active]:text-white"
              >
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {fleetCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.models.map((model, index) => (
                  <FleetImageGallery key={index} model={model}>
                    <Card className="bg-cloud-light hover-lift border-t-4 border-t-skyblue overflow-hidden cursor-pointer">
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
                  </FleetImageGallery>
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
