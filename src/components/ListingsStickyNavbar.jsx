import React, { useEffect, useState } from "react";

function StarIcon() {
    return (
        <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            className="h-full w-full fill-current"
        >
            <path
                fillRule="evenodd"
                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
            />
        </svg>
    );
}

export default function ListingStickyNavbar() {
    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("photos");

    /*
     * Show / hide sticky navbar
     */
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /*
     * Detect which section is currently visible
     */
    useEffect(() => {
        const sections = ["photos", "amenities", "reviews", "location"];

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                /*
                 * The sticky navbar is 66px high.
                 * This makes the active section detection work
                 * underneath the navbar.
                 */
                rootMargin: "-66px 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    /*
     * Scroll to section
     */
    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (!element) return;

        setActiveSection(id);

        const navbarHeight = 66;

        const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    const navItems = [
        {
            id: "photos",
            label: "Photos",
        },
        {
            id: "amenities",
            label: "Amenities",
        },
        {
            id: "reviews",
            label: "Reviews",
        },
        {
            id: "location",
            label: "Location",
        },
    ];

    return (
        <div
            className={`
        fixed
        left-0
        right-0
        top-0
        z-[60]
        bg-white
        border-b border-[#dddddd]
        transition-all
        duration-200
        ease-in-out
        ${visible
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "-translate-y-full opacity-0 pointer-events-none"
                }
      `}
            aria-hidden={!visible}
        >
            <div
                className="
          mx-auto
          flex
          h-[66px]
          max-w-[1280px]
          items-center
          justify-between
          px-20
        "
            >
                {/* Listing sections */}
                <nav
                    className="flex h-full gap-1"
                    aria-label="Listing sections"
                >
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => scrollToSection(item.id)}
                                className="
    relative
    h-full
    px-2
    text-[14px]
    font-medium
    text-[#222]
  "
                            >
                                {item.label}

                                {isActive && (
                                    <span
                                        className="
        absolute
        left-2
        right-2
        bottom-[14px]
        h-[2px]
        rounded-full
        bg-[#222]
      "
                                    />
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-5">
                    {/* Price + rating */}
                    <div className="text-right text-[13px] leading-[1.2]">
                        <div>
                            <span className="text-[15px] font-medium">
                                ₹28,499
                            </span>{" "}
                            <span className="text-[#222]">
                                for 5 nights
                            </span>
                        </div>

                        <div className="mt-1">
                            <span
                                aria-hidden="true"
                                className="
                  mr-1
                  inline-block
                  h-[10px]
                  w-[10px]
                  align-[-1px]
                "
                            >
                                <StarIcon />
                            </span>

                            4.95 ·{" "}
                            <span>19 reviews</span>
                        </div>
                    </div>

                    {/* Reserve */}
                    <button
                        type="button"
                        className="
              h-10
              rounded-full
              border-none
              bg-gradient-to-r
              from-[#e61e4d]
              via-[#e31c5f]
              to-[#d70466]
              px-5
              font-medium
              text-white
              transition-[filter,transform]
              duration-150
              hover:brightness-95
              active:scale-[0.98]
            "
                    >
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
}