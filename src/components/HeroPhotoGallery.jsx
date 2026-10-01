import React from "react";
import { galleryImages, listing } from "../data/listing.js";

function GridIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      role="presentation"
      className="block h-full w-full fill-current"
    >
      <path
        fillRule="evenodd"
        d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
      />
    </svg>
  );
}

function HeroPhotoGallery({ onOpenPhotoTour }) {

  const image1 = "/images/rooms/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg";
  const image2 = "/images/rooms/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg";
  const image3 = "/images/rooms/9be71047-fc52-438a-9270-75cb470f6752.jpeg";
  const image4 = "/images/rooms/67c61c6f-6260-4809-9510-0360e58a345d.jpeg";
  const image5 = "/images/rooms/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg";
  const title = listing?.title || "Romantic Jacuzzi 1BHK Candolim";

  return (
    <section
      id="heroPhotos"
      aria-label="Photos of this place"
      className="relative mb-12"
    >
      {/* PHOTO GRID */}
      <div
        id="heroGrid"
        className="
          grid
          grid-cols-1
          md:grid-cols-[35fr_17fr_17fr]
          grid-rows-2
          gap-2
          aspect-auto
          md:aspect-[1120/494]
          overflow-hidden
          rounded-xl
        "
      >
        {/* IMAGE 1 */}
        <button
          type="button"
          aria-label={`${title} image 1`}
          onClick={() => onOpenPhotoTour?.(image1)}
          className="
            relative
            row-span-2
            block
            overflow-hidden
            border-0
            bg-[#eee]
            p-0
            cursor-pointer
            group
          "
        >
          <img
            src={image1}
            alt={`${title} main view`}
            decoding="async"
            loading="eager"
            className="
              block
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.03]
            "
          />
        </button>

        {/* IMAGE 2 */}
        <button
          type="button"
          aria-label={`${title} image 2`}
          onClick={() => onOpenPhotoTour?.(image2)}
          className="
            relative
            hidden
            md:block
            overflow-hidden
            border-0
            bg-[#eee]
            p-0
            cursor-pointer
            group
          "
        >
          <img
            src={image2}
            alt={`${title} view 2`}
            decoding="async"
            loading="lazy"
            className="
              block
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.03]
            "
          />
        </button>

        {/* IMAGE 3 */}
        <button
          type="button"
          aria-label={`${title} image 3`}
          onClick={() => onOpenPhotoTour?.(image3)}
          className="
            relative
            hidden
            md:block
            overflow-hidden
            border-0
            bg-[#eee]
            p-0
            cursor-pointer
            group
          "
        >
          <img
            src={image3}
            alt={`${title} view 3`}
            decoding="async"
            loading="lazy"
            className="
              block
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.03]
            "
          />
        </button>

        {/* IMAGE 4 */}
        <button
          type="button"
          aria-label={`${title} image 4`}
          onClick={() => onOpenPhotoTour?.(image4)}
          className="
            relative
            hidden
            md:block
            overflow-hidden
            border-0
            bg-[#eee]
            p-0
            cursor-pointer
            group
          "
        >
          <img
            src={image4}
            alt={`${title} view 4`}
            decoding="async"
            loading="lazy"
            className="
              block
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.03]
            "
          />
        </button>

        {/* IMAGE 5 */}
        <button
          type="button"
          aria-label={`${title} image 5`}
          onClick={() => onOpenPhotoTour?.(image5)}
          className="
            relative
            hidden
            md:block
            overflow-hidden
            border-0
            bg-[#eee]
            p-0
            cursor-pointer
            group
          "
        >
          <img
            src={image5}
            alt={`${title} view 5`}
            decoding="async"
            loading="lazy"
            className="
              block
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.03]
            "
          />
        </button>
      </div>

      {/* SHOW ALL PHOTOS BUTTON */}
      <button
        type="button"
        id="showAllPhotos"
        onClick={() => onOpenPhotoTour?.(null)}
        className="
          absolute
          bottom-6
          right-6
          inline-flex
          items-center
          gap-2
          rounded-lg
          border
          border-[#222]
          bg-white
          px-4
          py-2.5
          text-[14px]
          font-medium
          text-[#222]
          shadow-sm
          transition
          hover:bg-[#f7f7f7]
          active:scale-[0.98]
          cursor-pointer
        "
      >
        <span className="block h-4 w-4">
          <GridIcon />
        </span>
        <span>Show all photos</span>
      </button>
    </section>
  );
}

export default HeroPhotoGallery;