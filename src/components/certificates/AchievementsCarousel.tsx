import type { CollectionEntry, InferEntrySchema } from "astro:content";
import {
  Carousel,
  CarouselContent,
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
          <CarouselItem className="basis-1/3 pl-4">
            <AchievementCard key={index} achievement={achievement.data} className="h-[99%]"/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AchievementsCarousel;
