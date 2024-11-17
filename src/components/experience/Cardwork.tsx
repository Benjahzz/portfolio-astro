import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CalendarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import type { CollectionEntry } from "astro:content";

interface CardworkProps {
  work: CollectionEntry<"works">;
}

const Cardwork: React.FC<CardworkProps> = ({ work }) => {
  const { title, companyLink, date, position, usedTools } = work.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center">
          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h4 className="text-sm font-medium">Cargo:</h4>
          <p>{position}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">
            Tecnologías más utilizadas:
          </h4>
          <div className="flex flex-wrap gap-2">
            {usedTools.map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" className="w-full">
            Ir a empresa
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Cardwork;
