import React , {useState} from "react";
import laurelLeft from "../assets/ui/laurel-left.png";
import laurelRight from "../assets/ui/laurel-right.png";
import comfort from "../assets/chips/comfort.png";
import accuracy from "../assets/chips/accuracy.png";
import hotTub from "../assets/chips/hot-tub.png";
import condition from "../assets/chips/condition.png";
import hospitality from "../assets/chips/hospitality.png";
import cleanliness from "../assets/chips/cleanliness.png";
import amenities from "../assets/chips/amenities.png";
import decor from "../assets/chips/decor.png";
import indoorSpaces from "../assets/chips/indoor-spaces.png";
import location from "../assets/chips/location.png";
import rev1 from "../assets/avatars/rev1.jpeg";
import rev2 from "../assets/avatars/rev2.jpeg";
import rev3 from "../assets/avatars/rev3.jpeg";
import rev4 from "../assets/avatars/rev4.jpeg";



const starPath =
  "m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z";

function Star() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className="block h-full w-full fill-current"
    >
      <path fillRule="evenodd" d={starPath} />
    </svg>
  );
}

function RatingIcon({ children }) {
  return (
    <div className="h-[30px] w-[30px]">
      {children}
    </div>
  );
}

function ReviewStars() {
  return (
    <span className="flex gap-[1px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="h-[12px] w-[12px]">
          <Star />
        </span>
      ))}
    </span>
  );
}

function RatingBar({ rating, width }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[12px]">{rating}</span>

      <div className="h-[4px] flex-1 overflow-hidden rounded-full bg-[#ebebeb]">
        <div
          className="h-full rounded-full bg-[#222222]"
          style={{ width }}
        />
      </div>
    </div>
  );
}

const categoryRatings = [
  {
    title: "Cleanliness",
    value: "5.0",
    icon: (
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        className="h-full w-full fill-current"
      >
        <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z" />
      </svg>
    ),
  },
  {
    title: "Accuracy",
    value: "5.0",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-full w-full fill-current"
      >
        <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
      </svg>
    ),
  },
  {
    title: "Check-in",
    value: "5.0",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-full w-full fill-current"
      >
        <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z" />
      </svg>
    ),
  },
  {
    title: "Communication",
    value: "5.0",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-full w-full overflow-visible"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" />
      </svg>
    ),
  },
  {
    title: "Location",
    value: "4.8",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-full w-full fill-current"
      >
        <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z" />
      </svg>
    ),
  },
  {
    title: "Value",
    value: "4.8",
    icon: (
      <svg
        viewBox="0 0 32 32"
        className="h-full w-full fill-current"
      >
        <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      </svg>
    ),
  },
];

const chips = [
  [comfort, "Comfort", 6],
  [accuracy, "Accuracy", 5],
  [hotTub, "Hot tub", 5],
  [condition, "Condition", 4],
  [hospitality, "Hospitality", 8],
  [cleanliness, "Cleanliness", 4],
  [amenities, "Amenities", 2],
  [decor, "Decor", 2],
  [indoorSpaces, "Indoor spaces", 2],
  [location, "Location", 2],
];

const reviews = [
  {
    name: "Amit",
    duration: "2 months on Airbnb",
    date: "1 week ago",
    initial: "A",
    bg: "#f7ede2",
    color: "#c1852a",
    text:
      "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
  },
  {
    name: "Aheesh",
    duration: "3 years on Airbnb",
    date: "2 weeks ago",
    image: rev1,
    text:
      "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    showMore: true,
  },
  {
    name: "Samiksha",
    duration: "8 months on Airbnb",
    date: "May 2026",
    image: rev2,
    text: "the host nitish was really great help",
  },
  {
    name: "Vedant",
    duration: "4 years on Airbnb",
    date: "May 2026",
    initial: "V",
    bg: "#efeaf7",
    color: "#8b6fc4",
    text:
      "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.\nThe highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.\nThe property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!",
    showMore: true,
  },
  {
    name: "Vaibhav S",
    duration: "3 years on Airbnb",
    date: "May 2026",
    image: rev3,
    text:
      "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    name: "Mohd",
    duration: "5 years on Airbnb",
    date: "May 2026",
    image: rev4,
    text: "Great place. Exactly as described in the listing.",
  },
];

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="mb-[10px] flex items-center gap-3">
        {review.image ? (
          <img
            src={review.image}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-medium"
            style={{
              background: review.bg,
              color: review.color,
            }}
          >
            {review.initial}
          </div>
        )}

        <div>
          <div className="text-[15px] font-medium">
            {review.name}
          </div>

          <div className="text-[13px] text-[#717171]">
            {review.duration}
          </div>
        </div>
      </div>

      {/* Stars + date */}
      <div className="mb-[6px] flex items-center gap-[6px] text-[13px]">
        <ReviewStars />
        <span>·</span>
        <span>{review.date}</span>
      </div>

      {/* Review text */}
      <div
        className={`whitespace-pre-line text-[15px] leading-[1.4] ${
          review.showMore && !expanded
            ? "line-clamp-3"
            : ""
        }`}
      >
        {review.text}
      </div>

      {/* Show more / Show less */}
      {review.showMore && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 border-none bg-transparent p-0 text-[14px] font-medium underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="border-t border-[#ebebeb] py-12"
    >
      {/* Guest favourite */}
      <div className="px-0 pb-10 pt-2 text-center">
        <div className="flex items-center justify-center gap-2">
          <img
            src={laurelLeft}
            alt=""
            className="w-auto h-[110px] translate-y-2"
          />

          <div className="text-[100px] font-medium tracking-[-0.03em]">
            4.95
          </div>

          <img
            src={laurelRight}
            alt=""
            className="h-[110px] w-auto translate-y-2"
          />
        </div>

        <div className="mt-2 text-[22px] font-medium">
          Guest favourite
        </div>

        <div className="mx-auto mt-2 max-w-[420px] text-[15px] leading-[1.35]">
          This home is a guest favourite based on ratings, reviews
          and reliability
        </div>

        <button className="mt-[14px] border-none bg-transparent text-[14px] font-medium underline">
          How reviews work
        </button>
      </div>

      {/* Ratings */}
      <div className="grid grid-cols-[1.4fr_repeat(6,1fr)] gap-0 px-0 pb-10 pt-2">
        {/* Overall */}
        <div className="px-6">
          <div className="text-[15px] font-medium">
            Overall rating
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <RatingBar rating="5" width="95%" />
            <RatingBar rating="4" width="5%" />
            <RatingBar rating="3" width="0%" />
            <RatingBar rating="2" width="0%" />
            <RatingBar rating="1" width="0%" />
          </div>
        </div>

        {categoryRatings.map((item) => (
          <div
            key={item.title}
            className="px-6 border-l border-[#dddddd]"
          >
            <div className="text-[15px] mb-[12px] font-semibold">
              {item.title}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-[18px] mb-[4px] font-semibold flex">
                {item.value}
                </div>
                <div className="flex">
              <RatingIcon>
                {item.icon}
              </RatingIcon>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Review chips */}
      <div className="flex gap-3 overflow-x-auto pb-[30px] pt-1 [scrollbar-width:none]">
        {chips.map(([image, label, count]) => (
          <button
            key={label}
            className="flex shrink-0 items-center gap-2 rounded-[16px] border border-[#dddddd] bg-white px-[14px] py-[13px] pr-[18px] text-[14px] font-medium"
          >
            <img
              src={image}
              alt=""
              className="block h-5 w-5 shrink-0 object-contain"
            />

            {label}

            <span className="text-[#717171]">{count}</span>
          </button>
        ))}
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-2 gap-x-20 gap-y-12 pb-10">
        {reviews.map((review) => (
          <ReviewCard
            key={review.name}
            review={review}
          />
        ))}
      </div>

      {/* Show all */}
      <button
        className=" rounded-[12px] border border-[#222]
    bg-white
    px-[23px]
    py-[13px]
    text-[16px]
    font-medium
    transition-[background,transform]
    duration-[150ms]
    hover:bg-[#f7f7f7
    active:scale-[0.98]
  "
      >
        Show all 19 reviews
      </button>
    </section>
  );
}