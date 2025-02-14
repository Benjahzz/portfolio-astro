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
          <CarouselItem className="basis-1/3 pl-4 h-full" key={index}>
            <AchievementCard key={index} achievement={achievement.data} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AchievementsCarousel;
