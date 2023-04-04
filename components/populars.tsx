"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PopularItemCard from "./pupolarItemCard";
import data from "../models/data.json";

export default function Populars() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 50 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div ref={ref} className="keen-slider mx-auto w-full">
      {data.popularTours.map((tour, index) => (
        <PopularItemCard
          title={tour.title}
          description={tour.description}
          image={tour.image}
        />
      ))}
    </div>
  );
}
