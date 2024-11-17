import { Circle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import Cardwork from "./Cardwork";
import type { CollectionEntry } from "astro:content";

interface TimelineItemProps {
  work: CollectionEntry<"works">;
  side: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  work,
  side,
}) => {
  const {
    title,
    description,
    date,
    color,
  } = work.data;
  return (
    <div
      className={`flex ${side === "left" ? "flex-row-reverse" : "flex-row"} w-full mb-8`}
    >
      <div
        className={`w-5/12 ${side === "left" ? "text-left pl-4 md:pl-0 md:pr-8" : "text-right pr-4 md:pr-0 md:pl-8"}`}
      >
        <p className="text-sm font-medium text-gray-400 mb-1">
          {date}
        </p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="w-2/12 flex justify-center relative">
        <Popover>
          <PopoverTrigger asChild>
            <div
              className={`absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 ${color} rounded-full z-10 cursor-pointer hover:scale-105 transition-transform`}
            >
              <Circle className="w-6 h-6 text-white" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="p-4 rounded-lg bg-white shadow-lg">
            <Cardwork work={work} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default TimelineItem;
