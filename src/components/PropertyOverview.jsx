import React from 'react';
import { listing } from '../data/listing';
import { IconStar, LaurelLeft, LaurelRight, IconOutdoor, IconSnowflake, IconBuilding } from './Icons';
import host from '../assets/avatars/host.jpeg';

export default function PropertyOverview() {
  return (
    <section
      id="contentLeft"
      className="text-[#222222] text-[14px] leading-[1.43] antialiased"
    >
      {/* Property information */}
      <div className="mb-6">
        <h2 className="text-[22px] leading-[26px] font-medium text-[#222222]">
          {listing.type} in {listing.location}
        </h2>

        <div className="mt-1 text-[15px] leading-[20px] text-[#6a6a6a]">
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.baths} bathroom
        </div>
      </div>

      {/* Guest favourite and rating card */}
      <div className="favourite-rating-card">
        <div className="favourite-emblem" aria-label="Guest favourite">
          <LaurelLeft />
          <span>Guest<br />favourite</span>
          <LaurelRight />
        </div>

        <div className="favourite-copy">
          One of the most loved homes on Airbnb, according to guests
        </div>

        <div className="favourite-metrics">
          <div className="metric-rating flex flex-col items-center">
            <strong>{listing.rating}</strong>
            <span className="metric-stars inline-flex items-center gap-0.5 ml-1" aria-label={`${listing.rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((star) => <IconStar key={star} size={12} />)}
            </span>
          </div>
          <span className="metric-divider" />
          <div className="metric-reviews flex flex-col items-center">
            <strong>{listing.reviewCount}</strong>
            <span className="flex items-center">Reviews</span>
          </div>
        </div>
      </div>

      {/* Host */}
      <div className="flex items-center gap-3 pt-6 pb-6">
        <img
          src={host}
          alt={host.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <div className="text-[15px] font-medium text-[#222222]">
            Hosted by {host.name}
          </div>

          <div className="mt-1 text-[14px] text-[#6a6a6a]">
            {host.yearsHosting || 2} years hosting
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="border-t border-[#ebebeb] border-b border-[#ebebeb] pt-8 pb-8">
        <div className="space-y-7">
          <div className="flex gap-5">
            <div className="h-8 w-8 shrink-0">
              <IconOutdoor size={24} />
            </div>

            <div>
              <div className="text-[15px] font-medium text-[#222222]">
                Outdoor entertainment
              </div>

              <div className="mt-1 text-[14px] leading-5 text-[#6a6a6a]">
                The pool and alfresco dining are great for summer trips.
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="h-8 w-8 shrink-0">
              <IconSnowflake size={24} />
            </div>

            <div>
              <div className="text-[15px] font-medium text-[#222222]">
                Designed for staying cool
              </div>

              <div className="mt-1 text-[14px] leading-5 text-[#6a6a6a]">
                Beat the heat with the A/C and ceiling fan.
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="h-8 w-8 shrink-0">
              <IconBuilding size={24} />
            </div>

            <div>
              <div className="text-[15px] font-medium text-[#222222]">
                Self check-in
              </div>

              <div className="mt-1 text-[14px] leading-5 text-[#6a6a6a]">
                You can check in with the building staff.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
