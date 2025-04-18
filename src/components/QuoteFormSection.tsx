
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  description: z.string().min(10, { message: "Please provide some details about your flight" }),
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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Quote request submitted",
        description: "We'll be in touch with you shortly.",
      });
      form.reset();
    }, 1500);
  }

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
