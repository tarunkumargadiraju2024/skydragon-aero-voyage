import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Wrench,
  Plane,
  Utensils,
  Settings,
  PlaneTakeoff,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Private Charters",
    description:
      "Elegant and efficient private flights tailored to your schedule and preferences. Experience travel without compromise.",
    icon: <Plane className="h-10 w-10 text-skyblue" />,
    scrollTo: "fleet",
  },
  {
    title: "Corporate Solutions",
    description:
      "Customized aviation services designed for businesses, ensuring your team travels efficiently and in comfort.",
    icon: <Briefcase className="h-10 w-10 text-skyblue" />,
  },
  {
    title: "Spare Parts Support",
    description:
      "Comprehensive FDI marketing and distribution of aircraft parts in India, keeping your fleet in pristine condition.",
    icon: <Wrench className="h-10 w-10 text-skyblue" />,
    expandable: true,
    expandedContent: (
      <div className="text-gray-700/90 text-left space-y-3 mt-3">
        <p>
          Our comprehensive Spare Parts Support ensures operational readiness and reliability for your fleet. We offer a wide range of certified components and consumables, tailored to meet the demands of both scheduled maintenance and urgent repairs. Our inventory and sourcing capabilities cover key categories:
        </p>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <b>Rotables</b><br />
            Rotable components are designed for repair and reuse, making them a cost-effective solution for long-term maintenance planning. We provide timely access to a broad inventory of airworthy, overhauled, and serviceable rotable parts, ensuring reduced aircraft downtime and optimized operational efficiency.
          </li>
          <li>
            <b>Expandables</b><br />
            Expendables are single-use components that are replaced after each use. Our inventory includes fast-moving and critical expendables—ranging from hardware and seals to filters and gaskets—sourced from trusted OEMs and fully compliant with aviation standards.
          </li>
          <li>
            <b>POLs (Petroleum, Oil &amp; Lubricants)</b><br />
            We supply high-quality Petroleum, Oil, and Lubricants (POLs) essential for the smooth operation and maintenance of aircraft systems. Our POLs inventory includes engine oils, hydraulic fluids, greases, and specialty lubricants, all compliant with OEM specifications and aviation-grade standards.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Aircraft Management",
    description:
      "Professional management of your aircraft, optimizing operations, maintenance, and financial performance.",
    icon: <Settings className="h-10 w-10 text-skyblue" />,
    expandable: true,
    expandedContent: (
      <div className="text-gray-700/90 text-left space-y-3 mt-3">
        <h4 className="font-bold text-brand-blue mb-2">Aircraft Management</h4>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <b>Aircraft Acquisition &amp; Leasing</b>
            <ul className="list-disc ml-6">
              <li>
                <b>Aircraft Availability &amp; Condition:</b> Ensuring the aircraft is always ready for operation, well-maintained, and meets regulatory requirements.
              </li>
              <li>
                <b>Purchasing:</b> Evaluate the market, assess options (new or pre-owned), and negotiate terms.
              </li>
              <li>
                <b>Leasing:</b> Flexibility in fleet management via:
                <ul className="list-disc ml-6">
                  <li><b>Wet Lease:</b> Lessor provides aircraft, crew, maintenance, and insurance.</li>
                  <li><b>Dry Lease:</b> Lessor provides only aircraft; lessee provides crew, maintenance, insurance.</li>
                </ul>
              </li>
              <li>
                <b>Financing:</b> Options include loans, bank financing, operating/capital leases.
              </li>
            </ul>
          </li>
          <li>
            <b>Scheduling</b>
            <ul className="list-disc ml-6">
              <li>Flight routes/timings, crew availability, maintenance schedules, and weather/airspace coordination.</li>
              <li>Flight planning: optimized for fuel, time, safety.</li>
              <li>Crew/maintenance scheduling to minimize downtime and maximize readiness.</li>
            </ul>
          </li>
          <li>
            <b>Charter Services</b>
            <ul className="list-disc ml-6">
              <li>Private/charter/corporate flights tailored to client preferences.</li>
              <li>Regulation compliance; competitive pricing covering all costs.</li>
            </ul>
          </li>
          <li>
            <b>Onboard Services</b>
            <ul className="list-disc ml-6">
              <li>Certified cabin crew, personalized catering, and exceptional client service.</li>
            </ul>
          </li>
          <li>
            <b>Communication</b>
            <ul className="list-disc ml-6">
              <li>Flight status updates, timely notifications, and emergency comms for passengers, staff, authorities.</li>
            </ul>
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Trip Support",
    description:
      "Comprehensive services including crew arrangement, ground handling, and international operations.",
    icon: <PlaneTakeoff className="h-10 w-10 text-skyblue" />,
    expandable: true,
    expandedContent: (
      <div className="text-gray-700/90 text-left space-y-3 mt-3">
        <h4 className="text-xl font-semibold text-brand-blue flex items-center gap-2 mb-2">
          ✈️ Comprehensive Trip Support Services
        </h4>
        <div className="mb-2 italic text-sm text-skyblue-dark font-medium">
          Your Journey, Seamlessly Coordinated
        </div>
        <p>
          Trip Support encompasses all critical services required to ensure smooth, compliant, and efficient flight operations—especially for international and non-scheduled missions. From takeoff to touchdown, we handle every detail so your crew and passengers can focus on the journey, not the logistics.
        </p>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🧭 Flight Planning</b>
          <ul className="list-disc ml-5 mt-1">
            <li>Precision route optimization for safety and efficiency</li>
            <li>Accurate fuel planning tailored to each mission</li>
            <li>Up-to-date weather briefings and meteorological insights</li>
            <li>Comprehensive NOTAM and TFR (Temporary Flight Restriction) analysis</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🌍 Overflight &amp; Landing Permits</b>
          <ul className="list-disc ml-5 mt-1">
            <li>End-to-end permit management as per country-specific regulations</li>
            <li>Monitoring lead times and permit validity for hassle-free operations</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🛬 Ground Handling Coordination</b>
          <ul className="list-disc ml-5 mt-1">
            <li>Liaison with FBOs and ground service providers</li>
            <li>Ramp services including GPU, stairs, water, and lavatory arrangements</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>⛽ Fuel Arrangements</b>
          <ul className="list-disc ml-5 mt-1">
            <li>Competitive fuel pricing with guaranteed availability</li>
            <li>Fuel release coordination and credit facilities</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>👨‍✈️ Crew Support</b>
          <ul className="list-disc ml-5 mt-1">
            <li>Hotel accommodations for crew</li>
            <li>Visa facilitation and support</li>
            <li>Ground transport coordination</li>
            <li>Duty time management and compliance</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🍽️ Catering Services</b>
          <ul className="list-disc ml-5 mt-1">
            <li>Customized in-flight catering for passengers and crew</li>
            <li>Special dietary needs accommodated on request</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🛃 Security, Customs &amp; Immigration (CIQ)</b>
          <ul className="list-disc ml-5 mt-1">
            <li>CIQ handling in coordination with airport authorities</li>
            <li>Security arrangements tailored to mission requirements</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🅿️ Slot &amp; Parking Management</b>
          <ul className="list-disc ml-5 mt-1">
            <li>Airport slot application and tracking</li>
            <li>Guaranteed parking space coordination</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>💼 Passenger Concierge (Optional)</b>
          <ul className="list-disc ml-5 mt-1">
            <li>Meet &amp; assist services at departure and arrival</li>
            <li>VIP handling for executives and high-profile travelers</li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🛠️ Technical Support (Optional)</b>
          <ul className="list-disc ml-5 mt-1">
            <li>On-ground AOG support coordination</li>
            <li>Spare parts sourcing</li>
            <li>Liaison with local maintenance teams</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Hospitality",
    description:
      "Exquisite personalized catering, premium hotel bookings, and seamless ground transfers for a complete luxury experience.",
    icon: <Utensils className="h-10 w-10 text-skyblue" />,
    expandable: true,
    expandedContent: (
      <div className="text-gray-700/90 text-left space-y-3 mt-3">
        <h4 className="text-xl font-semibold text-brand-blue flex items-center gap-2 mb-2">
          🛎️ Hospitality Services
        </h4>
        <div className="mb-2 italic text-sm text-skyblue-dark font-medium">
          Luxury in the Sky &amp; Comfort on the Ground
        </div>
        <p>
          At the heart of every charter experience is world-class hospitality. We go beyond transportation to deliver an elevated experience — whether you’re flying for business or leisure. Our hospitality services are curated to provide seamless comfort, privacy, and personalized care at every stage of your journey.
        </p>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>✨ In-Flight Experience</b>
          <ul className="list-disc ml-5 mt-1">
            <li>
              <b>Personalized Cabin Service:</b> Professional cabin crew trained in luxury hospitality, ensuring your comfort, privacy, and safety throughout the flight.
            </li>
            <li>
              <b>Gourmet Catering:</b> Curated menus featuring international cuisines, premium beverages, and customized meal options to suit your dietary preferences.
            </li>
            <li>
              <b>Entertainment &amp; Amenities:</b> Onboard Wi-Fi (where available), entertainment options, and luxury amenities tailored to your needs.
            </li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🛬 Ground-Level Luxury</b>
          <ul className="list-disc ml-5 mt-1">
            <li>
              <b>VIP Lounge Access:</b> Exclusive access to private terminals and FBO lounges with fast-track immigration and customs clearance.
            </li>
            <li>
              <b>Meet &amp; Assist:</b> Personalized concierge support from arrival to departure, including baggage handling and expedited airport processes.
            </li>
            <li>
              <b>Luxury Transfers:</b> Chauffeured ground transportation in premium vehicles, coordinated to your schedule.
            </li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div>
          <b>🧳 Tailored to You</b>
          <ul className="list-disc ml-5 mt-1">
            <li>
              <b>Bespoke Experiences:</b> From birthday celebrations at 30,000 feet to business-class setups for airborne meetings, we tailor every flight to your occasion.
            </li>
            <li>
              <b>Discretion &amp; Security:</b> Total confidentiality and secure services for celebrities, executives, and dignitaries.
            </li>
          </ul>
        </div>
        <div className="border-t border-cloud-dark my-2" />
        <div className="italic text-skyblue-dark text-center mt-2">
          Fly with us, where every detail is designed for distinction.
        </div>
      </div>
    ),
  },
];

const engineeringContent = (
  <div className="my-10 fade-in" style={{ opacity: 0.85 }}>
    <h4 className="text-2xl font-semibold text-skyblue-dark mb-3">
      Engineering, Our Expert Team: The Backbone of Reliable Maintenance
    </h4>
    <h5 className="text-lg font-semibold text-brand-blue mb-2">
      Well-Experienced &amp; Nurtured Professionals
    </h5>
    <p className="text-gray-700/90 mb-4">
      We take pride in our team of seasoned engineers and visionary leaders who bring decades of industry expertise to the table. Each member is carefully selected, thoroughly trained, and continuously nurtured to uphold the highest standards in aviation maintenance.
    </p>
    <ul className="list-disc list-inside text-gray-700/90 mb-4">
      <li>Certified &amp; Skilled Engineers with hands-on expertise across multiple aircraft platforms.</li>
      <li>Leadership with Vision, driving innovation and excellence in MRO services.</li>
      <li>Continuous Training Culture to stay aligned with evolving technologies and global standards.</li>
      <li>Client-Centric Approach ensuring tailored support for every maintenance need.</li>
    </ul>
    {/* Tagline */}
    <div className="mt-6 text-brand-blue/90 italic text-center font-semibold">
      Experience you can trust. Support you can count on.
    </div>
  </div>
);

const ServicesSection = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  const handleCardClick = (index: number) => {
    const service = services[index];
    if (service.scrollTo) {
      const el = document.getElementById(service.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (service.expandable) {
      handleToggle(index);
    }
  };

  return (
    <section id="services" className="section-padding sky-gradient">
      <div className="container mx-auto">
        <h2 className="section-title text-brand-blue">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive aviation solutions delivered with warmth and expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const isExpandable = Boolean(service.expandable);
            const isOpen = openCard === index;
            return (
              <Card
                key={index}
                className={`bg-white/80 backdrop-blur-sm border-none shadow-md hover-lift overflow-hidden group transition-all duration-300 ${
                  isOpen ? "ring-2 ring-skyblue" : ""}`}
                tabIndex={isExpandable || service.scrollTo ? 0 : -1}
                onClick={() => handleCardClick(index)}
                onKeyDown={
                  isExpandable || service.scrollTo
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") handleCardClick(index);
                      }
                    : undefined
                }
                role={isExpandable || service.scrollTo ? "button" : undefined}
                aria-expanded={isOpen}
              >
                <CardContent className="p-6 flex flex-col items-center text-center cursor-pointer select-none">
                  <div className="rounded-full bg-cloud-light p-5 mb-5 group-hover:bg-skyblue/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  {isExpandable && (
                    <span className="mt-2 text-skyblue font-medium transition-colors underline">
                      {isOpen ? "Close" : "Learn More"}
                    </span>
                  )}
                  {isExpandable && isOpen && (
                    <div className="mt-5 fade-in">{service.expandedContent}</div>
                  )}
                </CardContent>
                <div className="h-1 w-0 group-hover:w-full bg-skyblue transition-all duration-300"></div>
              </Card>
            );
          })}
        </div>

        {/* Engineering section now at the bottom after services */}
        <div className="max-w-4xl mx-auto bg-white/80 rounded-2xl shadow-md px-8 py-6 mb-6 mt-16" style={{ opacity: 0.875 }}>
          {engineeringContent}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
