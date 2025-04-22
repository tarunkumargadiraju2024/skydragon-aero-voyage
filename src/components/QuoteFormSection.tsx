
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const fleetOptions = [
  {
    value: "light",
    label: "Light Jet",
    details: "6 passengers, ~1,700 nm range. Perfect for short trips.",
  },
  {
    value: "mid",
    label: "Mid Jet",
    details: "6-8 passengers, ~2,000-2,900 nm range. Great comfort & regional flights.",
  },
  {
    value: "supermid",
    label: "Super Mid Jet",
    details: "7-13 passengers, ~3,000-4,000 nm range. Spacious cabins & superior range.",
  },
  {
    value: "large",
    label: "Large Jet",
    details: "13-18 passengers, ~6,700-7,700 nm range. Ultimate luxury for long-haul.",
  },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  description: z.string().min(10, { message: "Please provide some details about your flight" }),
  fleetPreferences: z.array(z.string()).min(1, { message: "Please select at least one fleet option." }),
});

const QuoteFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
      fleetPreferences: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log("Submitting form with values:", values);

    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.description,
        fleetPreferences: values.fleetPreferences,
      };

      console.log("Sending payload to Supabase:", payload);

      const response = await fetch("https://dmfuweiqgthbmxhpqqur.functions.supabase.co/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }

      // Try to parse the response as JSON
      let data;
      try {
        const responseText = await response.text();
        console.log("Raw response:", responseText);

        if (responseText.trim()) {
          data = JSON.parse(responseText);
          console.log("Parsed response data:", data);
        } else {
          data = { success: true };
        }
      } catch (e) {
        console.error("Failed to parse response as JSON:", e);
        if (response.ok) {
          data = { success: true };
        } else {
          throw new Error("Invalid response format from server");
        }
      }

      setIsSubmitted(true);
      toast({
        title: "Quote request submitted",
        description: "We'll be in touch with you shortly.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending enquiry:", error);
      toast({
        title: "Error",
        description: `There was a problem submitting your request: ${error instanceof Error ? error.message : "Unknown error"}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Render the custom multi-select popover here
  const fleetSelections = form.watch("fleetPreferences");
  const isFleetOpen = useState(false);

  return (
    <section id="quote" className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-cloud-light to-skyblue/5">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-skyblue/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-brand-blue">Let's Plan Your Next Flight</h2>
        <p className="section-subtitle">
          Share your journey details with us, and we'll craft the perfect aviation experience for you.
        </p>

        <div className="max-w-2xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your request has been received. Our team will contact you shortly to discuss your journey.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="text-skyblue border-skyblue hover:bg-skyblue hover:text-white"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Fleet multi-select starts here */}
                <FormField
                  control={form.control}
                  name="fleetPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fleet Preferences</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between flex items-center text-left bg-white",
                              !field.value?.length && "text-muted-foreground"
                            )}
                          >
                            {field.value && field.value.length > 0
                              ? fleetOptions
                                  .filter(opt => field.value.includes(opt.value))
                                  .map(opt => opt.label)
                                  .join(", ")
                              : "Select fleet type(s)"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0 z-50">
                          <div className="p-2 space-y-1">
                            {fleetOptions.map((option) => (
                              <div
                                key={option.value}
                                className={cn(
                                  "flex flex-col lg:flex-row lg:items-center px-2 py-2 hover:bg-skyblue/10 rounded cursor-pointer transition",
                                  field.value.includes(option.value) && "bg-skyblue/10"
                                )}
                                onClick={() => {
                                  if (field.value.includes(option.value)) {
                                    field.onChange(field.value.filter((v: string) => v !== option.value));
                                  } else {
                                    field.onChange([...field.value, option.value]);
                                  }
                                }}
                              >
                                <div className="flex items-center">
                                  <Checkbox
                                    checked={field.value.includes(option.value)}
                                    tabIndex={-1}
                                    aria-label={option.label}
                                    className="mr-3"
                                    readOnly
                                  />
                                  <div>
                                    <span className="font-medium">{option.label}</span>
                                  </div>
                                </div>
                                <span className="block text-xs text-muted-foreground ml-8 mt-1 lg:mt-0 lg:ml-4 max-w-xs">{option.details}</span>
                              </div>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Name, Contact, Description fields as before */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Flight Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your journey - dates, destinations, number of passengers, and any special requests."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-skyblue text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Your Charter"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
