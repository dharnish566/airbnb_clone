import React from "react";

const SearchIcon = () => (
    <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        overflow="visible"
    >
        <circle
            cx="14"
            cy="14"
            r="9"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M21 21l7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ZoomInIcon = () => (
    <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        overflow="visible"
    >
        <path
            d="M16 6v20M6 16h20"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ZoomOutIcon = () => (
    <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        overflow="visible"
    >
        <path
            d="M6 16h20"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const HomeIcon = () => (
    <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        overflow="visible"
    >
        <path
            d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ArrowIcon = () => (
    <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
        className="h-full w-full fill-current"
    >
        <path
            d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
            fillRule="evenodd"
        />
    </svg>
);

export default function Location() {
    return (
        <section
            id="location"
            className="border-t border-[#ebebeb] border-b border-[#ebebeb] py-[48px] "
        >
            {/* Title */}
            <h2 className="mb-[24px] text-[22px] font-medium leading-[26px]">
                Where you’ll be
            </h2>

            {/* Location */}
            <div className="mb-[24px] text-[16px]">
                Candolim, Goa, India
            </div>

            {/* Map */}
            <div className="relative h-[480px] overflow-hidden rounded-[12px] bg-[#e8eef0]">

                {/* Map background */}
                <div className="absolute inset-0">

                    {/* Map colors */}
                    <div
                        className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_30%_40%,#cfe3c8_0_6%,transparent_6%),radial-gradient(circle_at_70%_60%,#cfe3c8_0_8%,transparent_8%),linear-gradient(115deg,#acd3e6_0_34%,#e9f0e4_34%_100%)]
            "
                    />

                    {/* Grid */}
                    <div
                        className="
                pointer-events-none
                absolute
                inset-0
                opacity-50
                [background-image:linear-gradient(90deg,rgba(180,180,170,0.5)_1px,transparent_1px),linear-gradient(0deg,rgba(180,180,170,0.35)_1px,transparent_1px)]
                [background-size:90px_90px,90px_90px]
            "
                    />

                </div>

                {/* Search */}
                <button
                    aria-label="Search"
                    className="
            absolute
            left-[12px]
            top-[12px]
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            border-none
            bg-white
            shadow-[0_2px_6px_#0003]
        "
                >
                    <span className="h-[16px] w-[16px]">
                        <SearchIcon />
                    </span>
                </button>

                {/* Zoom controls */}
                <div
                    className="
            absolute
            right-[12px]
            top-[12px]
            flex
            flex-col
            gap-[8px]
          "
                >
                    <button
                        aria-label="Zoom in"
                        className="
              flex
              h-[40px]
              w-[40px]
              items-center
              justify-center
              rounded-full
              border-none
              bg-white
              shadow-[0_2px_6px_#0003]
            "
                    >
                        <span className="h-[20px] w-[20px]">
                            <ZoomInIcon />
                        </span>
                    </button>

                    <button
                        aria-label="Zoom out"
                        className="
              flex
              h-[40px]
              w-[40px]
              items-center
              justify-center
              rounded-full
              border-none
              bg-white
              shadow-[0_2px_6px_#0003]
            "
                    >
                        <span className="h-[20px] w-[20px]">
                            <ZoomOutIcon />
                        </span>
                    </button>
                </div>

                {/* Center location */}
                <div
                    className="
            absolute
            left-1/2
            top-1/2
            flex
            h-[56px]
            w-[56px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#222]
            text-white
            shadow-[0_4px_12px_#0000004d]
          "
                >
                    <HomeIcon />
                </div>
            </div>

            {/* Exact location */}
            <div className="mt-[18px] text-[14px] text-[#222]">
                Exact location will be provided after booking.
            </div>

            {/* Neighbourhood */}
            <div className="mt-[24px] text-[16px] font-medium">
                Neighbourhood highlights
            </div>

            <div className="mt-[8px] text-[15px] leading-[1.4]">
                Located in the heart of Candolim, Amor de Goa offers a peaceful stay
                with easy access to beaches, cafés, and popular attractions.
            </div>

            {/* Show more */}
            <button
                type="button"
                className="
          mt-[18px]
          inline-flex
          items-center
          gap-[8px]
          border-none
          bg-transparent
          p-0
          text-[14px]
          font-medium
          underline
        "
            >
                Show more

                <span className="h-[18px] w-[18px]">
                    <ArrowIcon />
                </span>
            </button>
        </section>
    );
}