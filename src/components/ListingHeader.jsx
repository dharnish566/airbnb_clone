import React from 'react';
import { listing } from '../data/listing';
import { IconShare, IconHeart } from './Icons';

export default function ListingHeader({ isSaved, onToggleSave }) {
  return (
    <section
      id="photos"
      className="flex items-start justify-between gap-4 pt-8 pb-[18px]"
    >
      {/* Listing title */}
      <h1 className="text-[26px] leading-[30px] font-medium tracking-normal text-gray-900">
        {listing.title}
      </h1>

      {/* Share / Save actions */}
      <div className="flex gap-[2px] shrink-0">
        {/* Share */}
        <button
          type="button"
          id="shareBtn"
          className="
            inline-flex
            items-center
            gap-2
            border-0
            bg-transparent
            px-[10px]
            py-2
            rounded-lg
            text-[14px]
            leading-normal
            font-medium
            text-gray-900
            transition-[background,transform]
            duration-150
            hover:bg-gray-100
            active:scale-[0.98]
            cursor-pointer
          "
        >
          <span className="flex h-5 w-5 items-center justify-center">
            <IconShare size={20} />
          </span>

          <span className="underline">
            Share
          </span>
        </button>

        {/* Save */}
        <button
          type="button"
          id="saveBtn"
          onClick={onToggleSave}
          className="
            inline-flex
            items-center
            gap-2
            border-0
            bg-transparent
            px-[10px]
            py-2
            rounded-lg
            text-[14px]
            leading-normal
            font-medium
            text-gray-900
            transition-[background,transform]
            duration-150
            hover:bg-gray-100
            active:scale-[0.98]
            cursor-pointer
          "
        >
          <span className="flex h-5 w-5 items-center justify-center">
            <IconHeart size={20} filled={isSaved} className={isSaved ? "text-[#FF385C]" : ""} />
          </span>

          <span className="underline">
            {isSaved ? "Saved" : "Save"}
          </span>
        </button>
      </div>
    </section>
  );
}
