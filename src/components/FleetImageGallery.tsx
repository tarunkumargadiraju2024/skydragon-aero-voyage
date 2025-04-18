
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface FleetImageGalleryProps {
  model: {
    name: string;
    images?: string[];
  };
  children: React.ReactNode;
}

const FleetImageGallery = ({ model, children }: FleetImageGalleryProps) => {
  if (!model.images?.length) {
    return <>{children}</>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <Carousel>
          <CarouselContent>
            {model.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${model.name} - View ${index + 1}`}
                    className={cn(
                      "h-full w-full object-cover",
                      "transition-all duration-300"
                    )}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

export default FleetImageGallery;
