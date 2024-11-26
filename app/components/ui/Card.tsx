import Link from "next/link";
import Heart from "../Star";
import TextBody from "./text/TextBody";
import TextLabel from "./text/TextLabel";

interface CardProps {
  image: string;
  name: string;
  pricing: string;
  rating: string;
  votes: string;
  popular?: boolean; // Etiqueta opcional de "Popular"
}

export default function Card({
  image,
  name,
  pricing,
  rating,
  votes,
  popular = false,
}: CardProps) {
  return (
    <Link
      href={"/"}
      className="rounded-xl hover:bg-background hover:bg-opacity-35 ease-in-out duration-200"
    >
      <div className="rounded-xl max-w-sm flex flex-col gap-2">
        <img src={image} className="h-40 w-72 rounded-xl" />

        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2 items-start">
            <TextBody className="text-foreground">{name}</TextBody>
            <div className="flex flex-row gap-2 items-center">
              <Heart />
              <TextLabel>{rating}</TextLabel>
              <TextLabel className="text-body-gray">({votes} votes)</TextLabel>
              {}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <TextLabel className="px-4 py-1 rounded-lg bg-label text-card">
              {pricing}
            </TextLabel>
            {popular && (
              <TextLabel className="px-4 py-1 rounded-lg bg-[#F6C768] text-card">
                Popular
              </TextLabel>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
