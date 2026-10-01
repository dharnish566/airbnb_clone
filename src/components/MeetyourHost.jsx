import React from "react";

const VerifiedIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="h-full w-full fill-current"
  >
    <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
  </svg>
);

const BornIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="h-full w-full fill-current"
  >
    <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z" />
  </svg>
);

const SchoolIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="h-full w-full fill-current"
  >
    <path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className="h-full w-full fill-current"
  >
    <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z" />
  </svg>
);

const coHosts = [
  {
    name: "Sharath",
    image: "/assets/images/avatars/co1.jpg",
  },
  {
    name: "Aman Dev Pahwa",
    image: "/assets/images/avatars/co2.jpg",
  },
  {
    name: "Maria Karen Priyanka",
    image: "/assets/images/avatars/co3.jpg",
  },
  {
    name: "Simran",
    image: "/assets/images/avatars/rev5.jpeg",
  },
  {
    name: "Pallavi",
    image: "/assets/images/avatars/rev1.jpeg",
  },
  {
    name: "Sanyukta",
    image: "/assets/images/avatars/rev2.jpeg",
  },
  {
    name: "Shruti",
    initial: "S",
    bg: "#fde7ef",
    color: "#d4356e",
  },
  {
    name: "Amisha",
    initial: "A",
    bg: "#e7f0fd",
    color: "#3a6ecc",
  },
];

export default function MeetYourHost() {
  return (
    <section className="border-t border-[#ebebeb] py-[48px]">
      {/* Title */}
      <h2 className="mb-[24px] text-[22px] font-medium leading-[26px]">
        Meet your host
      </h2>

      {/* Main Grid */}
      <div className="grid grid-cols-[340px_1fr] items-start gap-[48px]">

        {/* Left side */}
        <div>
          {/* Host Card */}
          <div
            className="
              grid
              grid-cols-[1fr_100px]
              items-center
              rounded-[20px]
              border
              border-[rgba(0,0,0,0.08)]
              p-[30px_24px]
              shadow-[0_6px_16px_rgba(0,0,0,0.12)]
            "
          >
            {/* Host information */}
            <div className="text-center">
              {/* Host Avatar */}
              <div className="relative mx-auto mb-[12px] h-[88px] w-[88px]">
                <img
                  src="/assets/images/avatars/host.jpeg"
                  alt=""
                  className="h-[88px] w-[88px] rounded-full object-cover"
                />

                {/* Verified badge */}
                <span
                  className="
                    absolute
                    bottom-[4px]
                    right-0
                    flex
                    h-[28px]
                    w-[28px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white
                    bg-[#ff385c]
                    text-white
                  "
                >
                  <VerifiedIcon />
                </span>
              </div>

              <div className="text-[26px] font-medium">
                Mirashya Homes
              </div>

              <div className="mt-[4px] text-[13px]">
                Host
              </div>
            </div>

            {/* Host Statistics */}
            <div className="border-l border-[#ebebeb] pl-[20px]">
              <div className="py-[10px]">
                <div className="text-[20px] font-medium">
                  1,463
                </div>
                <div className="text-[12px]">
                  Reviews
                </div>
              </div>

              <div className="py-[10px]">
                <div className="text-[20px] font-medium">
                  4.68★
                </div>
                <div className="text-[12px]">
                  Rating
                </div>
              </div>

              <div className="py-[10px]">
                <div className="text-[20px] font-medium">
                  2
                </div>
                <div className="text-[12px]">
                  Years hosting
                </div>
              </div>
            </div>
          </div>

          {/* Host Details */}
          <div className="mt-[22px] flex flex-col gap-[14px]">
            <div className="flex items-center gap-[14px] text-[15px]">
              <span className="h-[24px] w-[24px] shrink-0">
                <BornIcon />
              </span>
              <span>Born in the 80s</span>
            </div>

            <div className="flex items-center gap-[14px] text-[15px]">
              <span className="h-[24px] w-[24px] shrink-0">
                <SchoolIcon />
              </span>
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div>
          {/* Co-Hosts */}
          <div className="mb-[16px] text-[18px] font-medium">
            Co-Hosts
          </div>

          <div className="mb-[30px] grid grid-cols-3 gap-x-[8px] gap-y-[16px]">
            {coHosts.map((host) => (
              <div
                key={host.name}
                className="flex items-center gap-[10px] text-[14px]"
              >
                {host.image ? (
                  <img
                    src={host.image}
                    alt=""
                    className="h-[40px] w-[40px] shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full font-medium"
                    style={{
                      background: host.bg,
                      color: host.color,
                    }}
                  >
                    {host.initial}
                  </div>
                )}

                <span>{host.name}</span>
              </div>
            ))}
          </div>

          {/* Host Details */}
          <div className="mb-[16px] text-[18px] font-medium">
            Host details
          </div>

          <div className="text-[15px] leading-[1.6]">
            Response rate: 100%
            <br />
            Responds within an hour
          </div>

          {/* Message host */}
          <button
            type="button"
            className="
              mt-[18px]
              rounded-[8px]
              border-none
              bg-[#f2f2f2]
              px-[24px]
              py-[14px]
              text-[15px]
              font-medium
            "
          >
            Message host
          </button>

          {/* Airbnb protection */}
          <div
            className="
              mt-[30px]
              flex
              items-start
              gap-[10px]
              text-[12px]
              text-[#717171]
            "
          >
            <span className="h-[24px] w-[24px] shrink-0">
              <ShieldIcon />
            </span>

            <span>
              To help protect your payment, always use Airbnb to send money
              and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}