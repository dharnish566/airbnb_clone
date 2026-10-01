import { useState } from 'react';
import {
  IconChevronDown,
  IconMinus,
  IconPlus,
  IconFlag,
} from './Icons';

import discountIcon from '../assets/ui/discount.svg';

import { listing } from '../data/listing';

export default function BookingCard() {
  const [checkIn, setCheckIn] = useState('10/18/2026');
  const [checkOut, setCheckOut] = useState('10/23/2026');
  const [guests, setGuests] = useState(2);
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);

  const nights = 5;

  return (
    <aside className="hidden lg:block w-[33.33%] relative">
      <div className="sticky top-[120px] z-10">

        {/* =====================================================
            DISCOUNT CARD
        ====================================================== */}
        <div className="flex items-center gap-3 border border-[#dddddd] rounded-xl p-4 mb-6 bg-white">

          <img
            src={discountIcon}
            alt=""
            aria-hidden="true"
            className="w-8 h-8 shrink-0 object-contain block"
          />

          <div className="flex-1 text-[14px] leading-[1.3]">
            Get 10% off your next stay.
            <br />

            <a href="#" className="underline">
              Terms apply
            </a>
          </div>

          <button
            type="button"
            className="border-none bg-[#f7f7f7] rounded-lg px-[14px] py-2 text-[14px] font-medium"
          >
            Claim
          </button>

        </div>


        {/* =====================================================
            BOOKING CARD
        ====================================================== */}
        <div className="border border-[rgba(0,0,0,0.08)] rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] px-6 pt-[22px] pb-6">

          {/* Price */}
          <div className="flex items-baseline gap-[6px] mb-[18px]">

            <span className="text-[22px] font-semibold text-[#222222] underline">
              {listing.currency}
              {listing.pricePerNight.toLocaleString('en-IN')}
            </span>

            <span className="text-[14px] text-[#222222]">
              for {nights} nights
            </span>

          </div>


          {/* =================================================
              DATE + GUEST BOX
          ================================================== */}
          <div className="border border-[#b0b0b0] rounded-lg overflow-hidden">

            {/* Check-in / Check-out */}
            <div className="flex border-b border-[#b0b0b0]">

              {/* CHECK-IN */}
              <div className="flex-1 p-3 border-r border-[#b0b0b0]">

                <div className="text-[10px] font-bold text-[#222222]">
                  CHECK-IN
                </div>

                <input
                  type="text"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full mt-0.5 text-[13px] text-[#717171] bg-transparent outline-none"
                  aria-label="Check-in date"
                />

              </div>


              {/* CHECKOUT */}
              <div className="flex-1 p-3">

                <div className="text-[10px] font-bold text-[#222222]">
                  CHECKOUT
                </div>

                <input
                  type="text"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full mt-0.5 text-[13px] text-[#717171] bg-transparent outline-none"
                  aria-label="Checkout date"
                />

              </div>

            </div>


            {/* GUESTS */}
            <div className="relative">

              <button
                type="button"
                className="w-full flex items-center justify-between p-3 text-left"
                onClick={() => setGuestPickerOpen(!guestPickerOpen)}
                aria-expanded={guestPickerOpen}
              >

                <div>

                  <div className="text-[10px] font-bold text-[#222222]">
                    GUESTS
                  </div>

                  <div className="text-[13px] text-[#717171] mt-0.5">
                    {guests} guests
                  </div>

                </div>


                <span className="w-4 h-4 text-[#222222]">

                  <IconChevronDown
                    size={16}
                    className={`transition-transform ${
                      guestPickerOpen ? 'rotate-180' : ''
                    }`}
                  />

                </span>

              </button>


              {/* Guest Picker */}
              {guestPickerOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white border border-[#dddddd] rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-4">

                  <div className="flex items-center justify-between">

                    <div>
                      <div className="font-semibold text-[#222222]">
                        Adults
                      </div>

                      <div className="text-sm text-[#717171]">
                        Ages 13 or above
                      </div>
                    </div>


                    <div className="flex items-center gap-4">

                      <button
                        type="button"
                        disabled={guests <= 1}
                        onClick={() =>
                          setGuests(Math.max(1, guests - 1))
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#b0b0b0] disabled:opacity-40"
                      >
                        <IconMinus size={12} />
                      </button>

                      <span className="w-4 text-center">
                        {guests}
                      </span>

                      <button
                        type="button"
                        disabled={guests >= listing.guests}
                        onClick={() =>
                          setGuests(
                            Math.min(listing.guests, guests + 1)
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-[#b0b0b0] disabled:opacity-40"
                      >
                        <IconPlus size={12} />
                      </button>

                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>


          {/* =================================================
              CANCELLATION
          ================================================== */}
          <div className="text-center bg-[#f7f7f7] text-[#717171] rounded-lg text-[13px] p-2 my-4">

            Free cancellation before{' '}

            <b className="text-[#222222]">
              17 October
            </b>

          </div>


          {/* =================================================
              RESERVE BUTTON
          ================================================== */}
          <button
            type="button"
            id="reserveBtn"
            className="w-full border-none text-white bg-gradient-to-r from-[#e61e4d] via-[#e31c5f] to-[#d70466] text-[16px] font-medium rounded-[999px] px-6 h-12 transition-[filter,transform] duration-150 hover:brightness-95 active:scale-[0.99]"
          >
            Reserve
          </button>


          {/* Charged text */}
          <div className="text-center text-[14px] text-[#717171] mt-4">
            You won't be charged yet
          </div>

        </div>


        {/* ===================================================
            REPORT LISTING
        ==================================================== */}
        <div className="flex items-center justify-center gap-2 mt-[26px] text-[#717171] text-[14px]">

          <span className="w-4 h-4">
            <IconFlag size={16} />
          </span>

          <a href="#" className="underline">
            Report this listing
          </a>

        </div>

      </div>
    </aside>
  );
}