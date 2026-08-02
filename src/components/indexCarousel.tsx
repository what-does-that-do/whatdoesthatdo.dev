import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export function IndexCarousel({images}) {
    return (
        <Carousel className="w-full" opts={{align: "start", loop: true}} plugins={[Autoplay({delay: 3000,}),]}>
            <CarouselContent>
                {images.map((image) => (
                    <CarouselItem>
                        <img className="rounded-2xl shadow-lg overflow-hidden w-full h-[300px] md:h-[510px] object-cover" src={image} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}