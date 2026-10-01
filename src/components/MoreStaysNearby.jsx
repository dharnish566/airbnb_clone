import React, { useRef, useState } from "react";

const stays = [
  {
    image: "/assets/images/similar/s1.jpeg",
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
  },
  {
    image: "/assets/images/similar/s2.jpeg",
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
  },
  {
    image: "/assets/images/similar/s3.jpeg",
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
  },
  {
    image: "/assets/images/similar/s4.jpeg",
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
  },
  {
    image: "/assets/images/similar/s5.jpeg",
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
  },
  {
    image: "/assets/images/similar/s6.jpeg",
    title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
    price: "₹45,648",
    rating: "5.0",
  },
  {
    image: "/assets/images/similar/s2.jpeg",
    title: "Luxury Apt | Private Pool | 6 Mins from Beach",
    price: "₹48,786",
    rating: "4.93",
  },
  {
    image: "/assets/images/similar/s4.jpeg",
    title: "Serendipity Cottage - Calm Stay in Calangute-Baga.",
    price: "₹22,824",
    rating: "4.92",
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className="block h-full w-full fill-current"
    >
      <path
        fillRule="evenodd"
        d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 22 22"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className="block h-full w-full fill-current translate-x-[2px] translate-y-[2px]"
    >
      <path
        d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
        fillRule="evenodd"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 22 22"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className="block h-full w-full fill-current translate-x-[3px] translate-y-[2px]"
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default function MoreStaysNearby() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(1);

  const scrollNext = () => {
    const track = trackRef.current;

    if (!track) return;

    const scrollAmount = track.clientWidth + 20;

    track.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setPage(2);
  };

  const scrollPrev = () => {
    const track = trackRef.current;

    if (!track) return;

    const scrollAmount = track.clientWidth + 20;

    track.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });

    setPage(1);
  };

  return (
    <section className="border-t border-[#ebebeb] py-12">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="m-0 text-[22px] font-medium leading-[26px]">
          More stays nearby
        </h2>

        <div className="flex items-center gap-2">
          <span className="mr-[6px] text-[14px] text-[#717171]">
            {page} / 2
          </span>

          {/* Previous */}
          <button
            id="simPrev"
            type="button"
            disabled={page === 1}
            onClick={scrollPrev}
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#b0b0b0] bg-white ${
              page === 1
                ? "cursor-default opacity-50"
                : "cursor-pointer"
            }`}
            aria-label="Previous stays"
          >
            <span className="h-[18px] w-[18px]">
              <ChevronLeft />
            </span>
          </button>

          {/* Next */}
          <button
            id="simNext"
            type="button"
            onClick={scrollNext}
            disabled={page === 2}
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#b0b0b0] bg-white ${
              page === 2
                ? "cursor-default opacity-50"
                : "cursor-pointer"
            }`}
            aria-label="Next stays"
          >
            <span className="h-[18px] w-[18px]">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={trackRef}
        id="simTrack"
        className="flex gap-5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none]"
      >
        {stays.map((stay, index) => (
          <div
            key={index}
            className="min-w-0 flex-[0_0_calc((100%-80px)/5)]"
          >
            <img
              src={stay.image}
              alt=""
              loading="lazy"
              className="block aspect-[3/2] w-full rounded-lg object-cover"
            />

            <div className="mt-2 line-clamp-2 overflow-hidden text-ellipsis text-[14px] font-medium">
              {stay.title}
            </div>

            <div className="mt-1 text-[13px]">
              {stay.price}
              &nbsp;
              <span className="inline-block h-[10px] w-[10px] align-[-1px]">
                <StarIcon />
              </span>
              {" "}
              {stay.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}