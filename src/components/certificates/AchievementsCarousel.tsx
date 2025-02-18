import type { CollectionEntry } from "astro:content";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import AchievementCard from "./AchievementCard";

interface AchievementsCarouselProps {
  achievements: CollectionEntry<"achievements">[];
}

const AchievementsCarousel: React.FC<AchievementsCarouselProps> = ({
  achievements,
}) => {
  
  return (
    <Carousel>
      <CarouselContent className="-ml-4">
        {achievements.map((achievement, index) => (
          <CarouselItem className=" sm:basis-1/2 lg:basis-1/3 pl-4" key={achievement.data.title}>
            <AchievementCard key={index} achievement={achievement.data} className="h-[99%]"/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className="hidden lg:inline-flex"/>
      <CarouselNext className="hidden lg:inline-flex"/>
      <CarouselDots className="mt-2"/>
    </Carousel>
  );
};

export default AchievementsCarousel;
