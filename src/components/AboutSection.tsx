
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const directors = [
  {
    name: "Capt. Anirudh Duvvuru",
    role: "Captain",
    motto: "Flying dreams, one charter at a time.",
    bio: "With over 16 years of experience as a corporate captain, Capt. Anirudh Duvvuru embodies calm command in the cockpit. His journey through thousands of flying hours across global skies has shaped him into a trusted leader known for delivering seamless, safe, and luxurious travel experiences for high-profile clients and corporate elites.",
    initials: "AD"
  },
  {
    name: "Siva Kranthi Kumar Chekuri",
    role: "Operations & Technical",
    motto: "Efficiency in the skies begins on the ground.",
    bio: "With a track record of 14 years in aircraft operations, Siva Kranthi ensures every flight is flawlessly coordinated from hangar to horizon. From pre-flight checks to regulatory compliance, his meticulous planning and operational insight are key to maintaining SkyDragon's reputation for on-time excellence.",
    initials: "SK"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding sky-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-brand-blue">About Us</h2>
        <p className="section-subtitle">
          More than just charters — we craft experiences.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12">
          <div className="col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-brand-blue mb-4">Our Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since our founding in 2017, SkyDragon Aero has been committed to redefining the private aviation experience. 
                We believe that luxury is found in the details - from the moment you consider a journey to the warm farewell 
                as you reach your destination.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team brings together decades of aviation expertise with a genuine passion for service. 
                We understand that when you choose private aviation, you're seeking not just transportation, 
                but a seamless, personalized experience that values your time, comfort, and peace of mind.
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-2xl font-semibold text-center text-brand-blue mt-16 mb-12">
              Meet Our Leadership
            </h3>
          </div>

          {/* Removed Engineering & Expert Team section as requested */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {directors.map((director, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover-lift border-t-4 border-t-skyblue h-full">
                <CardContent className="pt-6 p-8">
                  <div className="flex flex-col items-center text-center h-full">
                    <Avatar className="h-24 w-24 border-2 border-skyblue mb-6">
                      <AvatarFallback className="bg-brand-blue text-white text-xl">
                        {director.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="text-2xl font-semibold text-brand-blue">
                      {director.name}
                    </h4>
                    <p className="text-skyblue-dark font-medium my-3">
                      {director.role}
                    </p>
                    <p className="text-gray-600 italic mb-6">
                      "{director.motto}"
                    </p>
                    <Separator className="my-6" />
                    <p className="text-gray-600 leading-relaxed">
                      {director.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

