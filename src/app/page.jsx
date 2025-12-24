import { Carousel } from "@/app/carousel";
import { CarouselItem } from "@/app/carousel-item";

const carouselItemsList = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

const itemsGapClassName = "gap-x-5";

export default function Home() {
  return (
    <section className="w-full bg-purple-200">
      <div className="main-container bg-purple-300">
        <h1 className="text-center text-3xl">Simple Carousel</h1>

        <Carousel itemsGapClassName={itemsGapClassName}>
          {carouselItemsList.map((item) => {
            return <CarouselItem key={item.id} item={item} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}
