
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const directors = [
  {
    name: "Capt. Anirudh Duvuru",
    role: "Corporate Captain",
    bio: "16 years of flying dreams as a corporate captain.",
    initials: "AD"
  },
  {
    name: "Siva Kranthi Kumar",
    role: "Aircraft Operations",
    bio: "14 years of excellence in aircraft operations.",
    initials: "SK"
  },
  {
    name: "Vijay Prakash",
    role: "Maintenance Engineering",
    bio: "20 years of precision and care in maintenance engineering.",
    initials: "VP"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding sky-gradient">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-blue">About Us</h2>
        <p className="section-subtitle">
          More than just charters — we craft experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="col-span-1 md:col-span-3">
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

          <div className="col-span-1 md:col-span-3">
            <h3 className="text-2xl font-semibold text-center text-brand-blue mt-12 mb-8">
              Meet Our Leadership
            </h3>
          </div>

          {directors.map((director, index) => (
            <div key={index} className="flex justify-center">
              <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm hover-lift border-t-4 border-t-skyblue">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-20 w-20 border-2 border-skyblue mb-4">
                      <AvatarFallback className="bg-brand-blue text-white">
                        {director.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="text-xl font-semibold text-brand-blue">
                      {director.name}
                    </h4>
                    <p className="text-skyblue-dark font-medium mb-2">
                      {director.role}
                    </p>
                    <p className="text-gray-600">
                      {director.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
