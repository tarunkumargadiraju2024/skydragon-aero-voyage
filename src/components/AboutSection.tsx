
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

const engineeringContent = (
  <div className="my-10 fade-in opacity-85 bg-white/70 px-8 py-6 rounded-xl shadow-sm" style={{ opacity: 0.85 }}>
    <h4 className="text-2xl font-semibold text-skyblue-dark mb-3 font-playfair">
      Engineering, Our Expert Team: The Backbone of Reliable Maintenance
    </h4>
    <h5 className="text-lg font-semibold text-brand-blue mb-2">
      Well-Experienced &amp; Nurtured Professionals
    </h5>
    <p className="text-gray-700/90 mb-3">
      We take pride in our team of seasoned engineers and visionary leaders who bring decades of industry expertise to the table.
      Each member is carefully selected, thoroughly trained, and continuously nurtured to uphold the highest standards in aviation maintenance.
    </p>
    <div className="mb-2 text-brand-blue font-semibold">Key Highlights:</div>
    <ul className="list-disc list-inside text-gray-700/90 mb-4 pl-4">
      <li>Certified &amp; Skilled Engineers with hands-on expertise across multiple aircraft platforms.</li>
      <li>Leadership with Vision, driving innovation and excellence in MRO services.</li>
      <li>Continuous Training Culture to stay aligned with evolving technologies and global standards.</li>
      <li>Client-Centric Approach ensuring tailored support for every maintenance need.</li>
    </ul>
    <div className="mt-6 text-brand-blue/90 italic text-center font-semibold">
      Experience you can trust. Support you can count on.
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="section-padding sky-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-brand-blue font-playfair">About Us</h2>
        <p className="section-subtitle font-sans">
          More than just charters — we craft experiences.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12">
          <div className="col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-brand-blue mb-4 font-playfair">Our Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4 font-sans">
                Since our founding in 2017, SkyDragon Aero has been committed to redefining the private aviation experience. 
                We believe that luxury is found in the details - from the moment you consider a journey to the warm farewell 
                as you reach your destination.
              </p>
              <p className="text-gray-700 leading-relaxed font-sans">
                Our team brings together decades of aviation expertise with a genuine passion for service. 
                We understand that when you choose private aviation, you're seeking not just transportation, 
                but a seamless, personalized experience that values your time, comfort, and peace of mind.
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-2xl font-semibold text-center text-brand-blue mt-16 mb-12 font-playfair">
              Meet Our Leadership
            </h3>
          </div>

          {/* Engineering section, slightly faded */}
          <div className="col-span-1 max-w-4xl mx-auto">
            {engineeringContent}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {directors.map((director, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover-lift border-t-4 border-t-skyblue h-full">
                <CardContent className="pt-6 p-8">
                  <div className="flex flex-col items-center text-center h-full">
                    <Avatar className="h-24 w-24 border-2 border-skyblue mb-6">
                      <AvatarFallback className="bg-brand-blue text-white text-xl font-playfair">
                        {director.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="text-2xl font-semibold text-brand-blue font-playfair">
                      {director.name}
                    </h4>
                    <p className="text-skyblue-dark font-medium my-3 font-sans">
                      {director.role}
                    </p>
                    <p className="text-gray-600 italic mb-6 font-sans">
                      "{director.motto}"
                    </p>
                    <Separator className="my-6" />
                    <p className="text-gray-600 leading-relaxed font-sans">
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
