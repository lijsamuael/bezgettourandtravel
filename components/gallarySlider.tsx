"use client";
import React, { MutableRefObject } from "react";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import data from "../models/data.json";

function GallarySlider(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 4,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [GallarySlider(instanceRef)]
  );

  return (
    <div className="flex flex-col space-y-16 max-w-[1200px] mx-auto">
      {data.gallery.map((item, index) => (
        <div className="">
          <h1 className="text-4xl  text-center pt-4 md:pt-16 pb-6">Photo Galleries from <span className="font-bold">{item.place.toUpperCase()}</span></h1>
          <div className="grid grid-cols-1 ssm:grid-cols-2 gap-2">
            {item.images.map((photo, index) => (
              <img
                className=" h-[200px] md:h-[400px] w-full max-w-full rounded-lg"
                src={`./images/${item.place}/${photo}`}
                alt=""
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
