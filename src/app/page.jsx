import { Carousel } from "@/app/carousel";
import { CarouselItem } from "@/app/carousel-item";

import {
  absol,
  angryPikachu,
  articuno,
  bulbasaur,
  butterfree,
  chansey,
  charizard,
  meowth,
  moltres,
  nidoqueen,
  persian,
  squirtle,
} from "@/assets/images/pokemon";

const carouselItemsList = [
  { id: 1, src: absol, alt: "Absol pokemon" },
  { id: 2, src: angryPikachu, alt: "Angry pikachu pokemon" },
  { id: 3, src: articuno, alt: "Articuno pokemon" },
  { id: 4, src: bulbasaur, alt: "Bulbasaur pokemon" },
  { id: 5, src: butterfree, alt: "Butterfree pokemon" },
  { id: 6, src: chansey, alt: "Chansey pokemon" },
  { id: 7, src: charizard, alt: "Charizard pokemon" },
  { id: 8, src: meowth, alt: "Meowth pokemon" },
  { id: 9, src: moltres, alt: "Moltres pokemon" },
  { id: 10, src: nidoqueen, alt: "Nidoqueen pokemon" },
  { id: 11, src: persian, alt: "Persian pokemon" },
  { id: 12, src: squirtle, alt: "Squirtle pokemon" },
];

const carouselId = "carousel";
const itemsGapClassName = "gap-x-5";

export default function Home() {
  return (
    <section className="w-full bg-purple-200">
      <div className="main-container bg-purple-300">
        <h1 className="text-center text-3xl">Simple Carousel</h1>

        <Carousel itemsGapClassName={itemsGapClassName} carouselId={carouselId}>
          {carouselItemsList.map((item) => {
            return <CarouselItem key={item.id} item={item} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}
