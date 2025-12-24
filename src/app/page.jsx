import { Carousel } from "@/app/carousel";

export default function Home() {
  return (
    <section className="w-full bg-purple-200">
      <div className="main-container bg-purple-300">
        <h1 className="text-center text-3xl">Simple Carousel</h1>

        <Carousel />
      </div>
    </section>
  );
}
