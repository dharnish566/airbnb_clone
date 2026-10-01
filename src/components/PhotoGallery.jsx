import React, { useEffect, useRef, useState } from "react";

// --------------------------------------------------
// Icons
// --------------------------------------------------

function BackIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-full w-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d="M7 7l18 18M25 7 7 25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
      />
    </svg>
  );
}

// --------------------------------------------------
// Images
// --------------------------------------------------


// --------------------------------------------------
// Other images
// Uncomment these later when connecting the real images
// --------------------------------------------------

const livingRoom1 = "/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg";
const livingRoom1_2 = "/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg";
const livingRoom1_3 = "/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg";

const livingRoom2 = "/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg";
const livingRoom2_2 = "/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg";
const livingRoom2_3 = "/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg";
const livingRoom2_4 = "/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg";
const livingRoom2_5 = "/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg";
const livingRoom2_6 = "/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg";
const livingRoom2_7 = "/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg";

const kitchen = "/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg";
const kitchen2 = "/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg";

const bedroom = "/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg";
const bedroom2 = "/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg";
const bedroom3 = "/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg";
const bedroom4 = "/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg";
const bedroom5 = "/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg";
const bedroom6 = "/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg";

const bathroom = "/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg";

const gym = "/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg";
const gym2 = "/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg";
const gym3 = "/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg";
const gym4 = "/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg";
const gym5 = "/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg";

const exterior = "/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg";
const exterior2 = "/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg";
const exterior3 = "/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg";
const exterior4 = "/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg";
const exterior5 = "/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg";
const exterior6 = "/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg";

const pool = "/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg";
const pool2 = "/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg";
const pool3 = "/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg";

const additional = "/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg";
const additional2 = "/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg";
const additional3 = "/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg";
const additional4 = "/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg";
const additional5 = "/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg";
const additional6 = "/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg";
const additional7 = "/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg";
const additional8 = "/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg";
const additional9 = "/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg";
const additional10 = "/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg";



// const livingRoom1 = "https://airbnb-clone-umber-two.vercel.app/assets/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg";
// const livingRoom2 = "https://airbnb-clone-umber-two.vercel.app/assets/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg";
// import livingRoom2 from "../assets/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg";
// import livingRoom2_3 from "../assets/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg";
// import livingRoom2_4 from "../assets/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg";
// import livingRoom2_5 from "../assets/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg";
// import livingRoom2_6 from "../assets/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg";
// import livingRoom2_7 from "../assets/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg";

// import kitchen from "../assets/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg";
// import kitchen2 from "../assets/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg";

// import bedroom from "../assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg";
// import bedroom2 from "../assets/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg";
// import bedroom3 from "../assets/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg";
// import bedroom4 from "../assets/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg";
// import bedroom5 from "../assets/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg";
// import bedroom6 from "../assets/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg";

// import bathroom from "../assets/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg";

// import gym from "../assets/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg";
// import gym2 from "../assets/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg";
// import gym3 from "../assets/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg";
// import gym4 from "../assets/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg";
// import gym5 from "../assets/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg";

// import exterior from "../assets/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg";
// import exterior2 from "../assets/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg";
// import exterior3 from "../assets/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg";
// import exterior4 from "../assets/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg";
// import exterior5 from "../assets/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg";
// import exterior6 from "../assets/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg";

// import pool from "../assets/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg";
// import pool2 from "../assets/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg";
// import pool3 from "../assets/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg";

// import additional from "../assets/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg";
// import additional2 from "../assets/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg";
// import additional3 from "../assets/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg";
// import additional4 from "../assets/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg";
// import additional5 from "../assets/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg";
// import additional6 from "../assets/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg";
// import additional7 from "../assets/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg";
// import additional8 from "../assets/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg";
// import additional9 from "../assets/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg";
// import additional10 from "../assets/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg";

// --------------------------------------------------
// Photo data
// --------------------------------------------------

const rooms = [
  {
    id: "tour-room-0",
    name: "Living room 1",
    features: "Sofa · Air conditioning · Ceiling fan · TV",
    images: [livingRoom1, livingRoom1_2, livingRoom1_3],
  },

  {
    id: "tour-room-1",
    name: "Living room 2",
    features: "Ceiling fan · Hot tub",
    images: [
      livingRoom2,
      livingRoom2_2,
      livingRoom2_3,
      livingRoom2_4,
      livingRoom2_5,
      livingRoom2_6,
      livingRoom2_7,
    ],
  },

  {
    id: "tour-room-2",
    name: "Full kitchen",
    features:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    images: [kitchen, kitchen2],
  },

  {
    id: "tour-room-3",
    name: "Bedroom",
    features:
      "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    images: [
      bedroom,
      bedroom2,
      bedroom3,
      bedroom4,
      bedroom5,
      bedroom6,
    ],
  },

  {
    id: "tour-room-4",
    name: "Full bathroom",
    features: "Hairdryer · Hot water · Shampoo · Shower gel",
    images: [bathroom],
  },

  {
    id: "tour-room-5",
    name: "Gym",
    features: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    images: [
      gym,
      gym2,
      gym3,
      gym4,
      gym5,
    ],
  },

  {
    id: "tour-room-6",
    name: "Exterior",
    features: "",
    images: [
      exterior,
      exterior2,
      exterior3,
      exterior4,
      exterior5,
      exterior6,
    ],
  },

  {
    id: "tour-room-7",
    name: "Pool",
    features: "Pool",
    images: [pool, pool2, pool3],
  },

  {
    id: "tour-room-8",
    name: "Additional photos",
    features: "",
    images: [
      additional,
      additional2,
      additional3,
      additional4,
      additional5,
      additional6,
      additional7,
      additional8,
      additional9,
      additional10,
    ],
  },
];

// --------------------------------------------------
// Image button
// --------------------------------------------------

function PhotoButton({ image, roomName, index, onClick }) {
  return (
    <button
      type="button"
      id={`photo-${encodeURIComponent(image)}`}
      onClick={onClick}
      className="
        relative
        block
        w-full
        aspect-[3/2]
        overflow-hidden
        rounded-lg
        border-none
        bg-[#eee]
        p-0
      "
      aria-label={`${roomName} image ${index + 1}`}
    >
      <img
        src={image}
        alt={roomName}
        loading="lazy"
        decoding="async"
        className="
          block
          h-full
          w-full
          object-cover
          transition-transform
          duration-300
          hover:scale-[1.02]
        "
      />
    </button>
  );
}

// --------------------------------------------------
// Room section
// --------------------------------------------------

function RoomSection({ room, roomIndex, onImageClick }) {
  const { images } = room;

  // Pattern:
  // 1 image
  // 2 images
  // 1 image
  // 2 images
  // ...

  const imageRows = [];

  let index = 0;
  let singleRow = true;

  while (index < images.length) {
    if (singleRow) {
      imageRows.push([images[index]]);
      index += 1;
    } else {
      imageRows.push(images.slice(index, index + 2));
      index += 2;
    }

    singleRow = !singleRow;
  }

  return (
    <section
      id={room.id}
      className="
        grid
        grid-cols-2
        items-start
        gap-x-[60px]
        gap-y-5
        py-4
        pb-1
      "
    >
      {/* Room information */}
      <div className="sticky top-5">
        <div
          className="
            text-[32px]
            font-medium
            leading-[1.1]
            tracking-[-0.02em]
          "
        >
          {room.name}
        </div>

        {room.features && (
          <div
            className="
              mt-2
              text-[16px]
              leading-[1.4]
              text-[#717171]
            "
          >
            {room.features}
          </div>
        )}
      </div>

      {/* Images */}
      <div className="flex flex-col gap-3">
        {imageRows.map((row, rowIndex) => {
          const isSingleImage = row.length === 1;

          return (
            <div
              key={`${room.id}-row-${rowIndex}`}
              className={
                isSingleImage
                  ? "grid grid-cols-1"
                  : "grid grid-cols-2 gap-3"
              }
            >
              {row.map((image, imageIndex) => {
                const actualIndex =
                  imageRows
                    .slice(0, rowIndex)
                    .reduce(
                      (total, currentRow) =>
                        total + currentRow.length,
                      0
                    ) + imageIndex;

                return (
                  <PhotoButton
                    key={`${room.id}-${actualIndex}`}
                    image={image}
                    roomName={room.name}
                    index={actualIndex}
                    onClick={() =>
                      onImageClick(
                        roomIndex,
                        actualIndex
                      )
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// --------------------------------------------------
// Photo Gallery
// --------------------------------------------------

export default function PhotoGallery({ onClose, initialIndex = null, initialPhoto = null }) {
  // -----------------------------------------------
  // Main gallery scroll
  // -----------------------------------------------

  const contentRef = useRef(null);

  // -----------------------------------------------
  // Lightbox state
  // -----------------------------------------------

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [currentRoomIndex, setCurrentRoomIndex] =
    useState(0);

  const [currentImageIndex, setCurrentImageIndex] =
    useState(0);

  // -----------------------------------------------
  // Scroll directly to target image on main gallery view
  // -----------------------------------------------
  useEffect(() => {
    const target = initialPhoto !== null && initialPhoto !== undefined ? initialPhoto : initialIndex;
    if (target === null || target === undefined) return;

    let targetImageSrc = null;

    if (typeof target === "string") {
      targetImageSrc = target;
    } else if (typeof target === "number") {
      let accumulated = 0;
      for (let rIdx = 0; rIdx < rooms.length; rIdx++) {
        const roomImageCount = rooms[rIdx].images.length;
        if (target < accumulated + roomImageCount) {
          targetImageSrc = rooms[rIdx].images[target - accumulated];
          break;
        }
        accumulated += roomImageCount;
      }
    }

    if (targetImageSrc) {
      setTimeout(() => {
        const element = document.getElementById(`photo-${encodeURIComponent(targetImageSrc)}`);
        if (element && contentRef.current) {
          const container = contentRef.current;
          const top = element.offsetTop - 80;
          container.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, [initialIndex, initialPhoto]);

  // -----------------------------------------------
  // Current lightbox data
  // -----------------------------------------------

  const currentRoom = rooms[currentRoomIndex];

  const currentImage =
    currentRoom?.images[currentImageIndex];

  const currentRoomName =
    currentRoom?.name || "";

  // -----------------------------------------------
  // Total images
  // -----------------------------------------------

  const totalImages = rooms.reduce(
    (total, room) => total + room.images.length,
    0
  );

  // -----------------------------------------------
  // Global image number
  // -----------------------------------------------

  const getGlobalImageIndex = () => {
    let index = 0;

    for (let i = 0; i < currentRoomIndex; i++) {
      index += rooms[i].images.length;
    }

    return index + currentImageIndex;
  };

  // -----------------------------------------------
  // Open lightbox
  // -----------------------------------------------

  const openLightbox = (
    roomIndex,
    imageIndex
  ) => {
    setCurrentRoomIndex(roomIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  // -----------------------------------------------
  // Close lightbox
  // -----------------------------------------------

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // -----------------------------------------------
  // Previous image
  // -----------------------------------------------

  const showPrevious = () => {
    // Previous image inside same room
    if (currentImageIndex > 0) {
      setCurrentImageIndex(
        (previous) => previous - 1
      );

      return;
    }

    // Move to previous room
    if (currentRoomIndex > 0) {
      const previousRoomIndex =
        currentRoomIndex - 1;

      setCurrentRoomIndex(previousRoomIndex);

      setCurrentImageIndex(
        rooms[previousRoomIndex].images.length - 1
      );
    }
  };

  // -----------------------------------------------
  // Next image
  // -----------------------------------------------

  const showNext = () => {
    // Next image inside same room
    if (
      currentImageIndex <
      currentRoom.images.length - 1
    ) {
      setCurrentImageIndex(
        (previous) => previous + 1
      );

      return;
    }

    // Move to next room
    if (
      currentRoomIndex <
      rooms.length - 1
    ) {
      setCurrentRoomIndex(
        (previous) => previous + 1
      );

      setCurrentImageIndex(0);
    }
  };

  // -----------------------------------------------
  // Scroll to room
  // -----------------------------------------------

  const scrollToRoom = (roomId) => {
    const element =
      document.getElementById(roomId);

    if (
      !element ||
      !contentRef.current
    ) {
      return;
    }

    const container = contentRef.current;

    const top =
      element.offsetTop - 20;

    container.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  // -----------------------------------------------
  // Prevent background page scrolling
  // -----------------------------------------------

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  // -----------------------------------------------
  // ESC key
  // -----------------------------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (lightboxOpen) {
        setLightboxOpen(false);
      } else {
        onClose?.();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [lightboxOpen, onClose]);

  // -----------------------------------------------
  // Keyboard navigation inside lightbox
  // -----------------------------------------------

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    lightboxOpen,
    currentRoomIndex,
    currentImageIndex,
  ]);

  // -----------------------------------------------
  // Render
  // -----------------------------------------------

  return (
    <>
      {/* ==================================================
          MAIN PHOTO TOUR
      ================================================== */}

      <div
        className="
          fixed
          inset-0
          z-[100]
          flex
          flex-col
          bg-white
          opacity-100
          visible
          translate-y-0
          transition-[opacity,transform]
          duration-300
          ease-[cubic-bezier(.2,0,0,1)]
        "
        role="dialog"
        aria-modal="true"
        aria-label="Photo tour"
      >
        {/* ----------------------------------------------
            Main header
        ---------------------------------------------- */}

        <header
          className="
            relative
            z-[5]
            flex
            h-[88px]
            shrink-0
            items-center
            bg-white
            px-8
          "
        >
          {/* Back */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Back"
            className="
              inline-flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border-none
              bg-transparent
              transition-[background,transform]
              duration-150
              hover:bg-[#f7f7f7]
              active:scale-[0.96]
            "
          >
            <span className="block h-6 w-6">
              <BackIcon />
            </span>
          </button>

          {/* Center title */}

          <h2
            className="
              absolute
              left-1/2
              -translate-x-1/2
              text-[16px]
              font-medium
            "
          >
            Photo tour
          </h2>

          {/* Right buttons */}

          <div className="ml-auto flex gap-[2px]">
            {/* Share */}

            <button
              type="button"
              aria-label="Share"
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-none
                bg-transparent
                transition-[background,transform]
                duration-150
                hover:bg-[#f7f7f7]
                active:scale-[0.96]
              "
            >
              <span className="block h-5 w-5">
                <ShareIcon />
              </span>
            </button>

            {/* Save */}

            <button
              type="button"
              aria-label="Save"
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-none
                bg-transparent
                transition-[background,transform]
                duration-150
                hover:bg-[#f7f7f7]
                active:scale-[0.96]
              "
            >
              <span className="block h-5 w-5">
                <HeartIcon />
              </span>
            </button>
          </div>
        </header>

        {/* ==================================================
            SCROLL AREA
        ================================================== */}

        <div
          ref={contentRef}
          className="
            min-h-0
            flex-1
            overflow-y-auto
          "
        >
          {/* Main content */}

          <div
            className="
              mx-auto
              max-w-[1024px]
              px-6
              pb-24
            "
          >
            {/* ==================================================
                CATEGORY NAVIGATION
            ================================================== */}

            <nav
              className="
                mb-10
                grid
                grid-cols-8
                gap-3
              "
              aria-label="Photo categories"
            >
              {rooms.map((room) => (
                <button
                  key={room.id}
                  type="button"
                  onClick={() =>
                    scrollToRoom(room.id)
                  }
                  className="
                    flex
                    flex-col
                    gap-2
                    border-none
                    bg-transparent
                    p-0
                    text-left
                  "
                >
                  <img
                    src={room.images[0]}
                    alt=""
                    loading="lazy"
                    className="
                      aspect-[3/2]
                      w-full
                      rounded-lg
                      object-cover
                    "
                  />

                  <span
                    className="
                      text-[14px]
                      text-[#717171]
                    "
                  >
                    {room.name}
                  </span>
                </button>
              ))}
            </nav>

            {/* ==================================================
                ROOMS
            ================================================== */}

            <div>
              {rooms.map(
                (room, roomIndex) => (
                  <RoomSection
                    key={room.id}
                    room={room}
                    roomIndex={roomIndex}
                    onImageClick={
                      openLightbox
                    }
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          LIGHTBOX
      ================================================== */}

      {lightboxOpen && (
        <div
          className="
            fixed
            inset-0
            z-[140]
            flex
            items-center
            justify-center
            bg-white
            opacity-100
            visible
          "
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* ----------------------------------------------
              Lightbox header
          ---------------------------------------------- */}

          <header
            className="
              absolute
              top-0
              left-0
              right-0
              z-[3]
              flex
              h-[72px]
              items-center
              px-6
            "
          >
            {/* Show all photos */}

            <button
              type="button"
              aria-label="Show all photos"
              onClick={closeLightbox}
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-none
                bg-transparent
                transition-[background,transform]
                duration-150
                hover:bg-[#f7f7f7]
                active:scale-[0.96]
              "
            >
              <GridIcon />
            </button>

            {/* Center title */}

            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                text-[16px]
                font-medium
              "
            >
              {currentRoomName}
            </div>

            {/* Counter + close */}

            <div
              className="
                ml-auto
                flex
                items-center
                gap-3
              "
            >
              <span className="text-[14px]">
                {getGlobalImageIndex() + 1} of{" "}
                {totalImages}
              </span>

              <button
                type="button"
                aria-label="Close"
                onClick={closeLightbox}
                className="
                  inline-flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-none
                  bg-transparent
                  transition-[background,transform]
                  duration-150
                  hover:bg-[#f7f7f7]
                  active:scale-[0.96]
                "
              >
                <span className="block h-6 w-6">
                  <CloseIcon />
                </span>
              </button>
            </div>
          </header>

          {/* ----------------------------------------------
              Previous button
          ---------------------------------------------- */}

          <button
            type="button"
            aria-label="Previous"
            onClick={showPrevious}
            disabled={
              currentRoomIndex === 0 &&
              currentImageIndex === 0
            }
            className="
              absolute
              left-5
              top-1/2
              z-[3]
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#222]
              bg-white
              transition-[background,transform]
              duration-150
              hover:bg-[#f7f7f7]
              active:scale-[0.96]
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <span className="block h-5 w-5">
              <BackIcon />
            </span>
          </button>

          {/* ----------------------------------------------
              Image stage
          ---------------------------------------------- */}

          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              px-24
              py-[88px]
            "
          >
            <img
              src={currentImage}
              alt={currentRoomName}
              className="
                max-h-full
                max-w-full
                select-none
                object-contain
              "
              draggable="false"
            />
          </div>

          {/* ----------------------------------------------
              Next button
          ---------------------------------------------- */}

          <button
            type="button"
            aria-label="Next"
            onClick={showNext}
            disabled={
              currentRoomIndex ===
                rooms.length - 1 &&
              currentImageIndex ===
                currentRoom.images.length - 1
            }
            className="
              absolute
              right-5
              top-1/2
              z-[3]
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#222]
              bg-white
              transition-[background,transform]
              duration-150
              hover:bg-[#f7f7f7]
              active:scale-[0.96]
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <span className="block h-5 w-5">
              <svg
                viewBox="0 0 32 32"
                className="h-full w-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                aria-hidden="true"
              >
                <path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </>
  );
}