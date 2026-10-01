import { useState } from 'react';

const description = `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴`;

export default function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pt-[26px] pb-[32px] border-t border-[#ebebeb] border-b border-[#ebebeb]">

      {/* Translation message */}
      <div className="mb-4 text-[14px] text-[#222222] rounded-[12px] bg-[#f7f7f7] p-4 text-[#222222]">
        <span>
          Some info has been automatically translated.{' '}
          <a
            href="#"
            className="underline font-semibold"
            onClick={(e) => e.preventDefault()}
          >
            Show original
          </a>
        </span>
      </div>


      {/* Description */}
      <p
        id="descText"
        className={`
          m-0 text-[16px] leading-[1.5] text-[#222222]
          ${!expanded
            ? 'max-h-[6.2em] overflow-hidden [mask-image:linear-gradient(#000_62%,transparent)] [-webkit-mask-image:linear-gradient(#000_62%,transparent)]'
            : ''
          }
        `}
      >
        {description}
      </p>


      {/* Show more / Show less */}
      <button
        type="button"
        id="descMore"
        onClick={() => setExpanded(!expanded)}
        className="mt-4 border-none bg-transparent p-0 text-[14px] font-medium text-[#222222] inline-flex items-center gap-2 cursor-pointer underline font-semibold"
      >
        {expanded ? 'Show less' : 'Show more'}

        <span
          className={`
            w-[18px] h-[14px] inline-block
            transition-transform duration-200
            ${expanded ? 'rotate-180' : ''}
          `}
        >
          <svg
            viewBox="0 0 18 18"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            className="block w-full h-full fill-current"
          >
            <path
              d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </button>

    </div>
  );
}