import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  AdvancedImage,
  lazyload,
  responsive,
} from "@cloudinary/react";
import { cloudinaryClient } from "@/utils/cloudinary/cloudinaryClient";
import type { InferEntrySchema } from "astro:content";
import { formatDate } from "@/utils/formatDate";
import { fill } from "@cloudinary/url-gen/actions/resize";

interface AchievementCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  achievement: InferEntrySchema<"achievements">;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  className,
}) => {
  const { date, description, imageUrl, title, type, url, buttonText } =
    achievement;

  let headerImage = cloudinaryClient.image(
    `portfolio-renew/${imageUrl}`
  ).resize(fill().width(40).height(40)).quality("auto")
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center">
          <AdvancedImage
            cldImg={headerImage}
            plugins={[lazyload(), responsive()]}
            className="w-10 h-10 mr-2 object-contain"
          />
          <h2>{title}</h2>
        </div>
        <Badge className="w-fit">{type}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600  text-ellipsis overflow-hidden line-clamp-3 ">
          {description}
        </p>
        <p className="text-gray-500 text-sm mt-2">
          {formatDate(date)}
        </p>
      </CardContent>
      <CardFooter>
        <a href={url} target="_blank" rel="noreferrer" >
          <Button variant={"outline"}>{buttonText}</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default AchievementCard;
