import React from "react";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

function ChevronLeft() {
    return (
        <svg
            viewBox="0 0 28 28"
            role="presentation"
            aria-hidden="true"
            className="block h-full w-full fill-current"
        >
            <path
                d="m13.7 16.29a1 1 0 1 1-1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                fillRule="evenodd"
            />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg
            viewBox="0 0 28 28"
            role="presentation"
            aria-hidden="true"
            className="block h-full w-full fill-current"
        >
            <path
                d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                fillRule="evenodd"
            />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg
            viewBox="0 0 32 22"
            width="20"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
        >
            <rect x="1" y="1" width="30" height="20" rx="3" />
            <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14" />
        </svg>
    );
}

function Month({
    name,
    days,
    startOffset = 0,
    selectedDays = [],
    startDay,
    endDay,
    unavailableDays = [],
}) {
    return (
        <div>
            {/* Month title */}
            <div className="mb-3 text-center text-[16px] font-medium">
                {name}
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 text-center">
                {weekDays.map((day, index) => (
                    <span
                        key={index}
                        className="text-[12px] font-medium"
                    >
                        {day}
                    </span>
                ))}
            </div>

            {/* Dates */}
            <div className="mt-2 grid grid-cols-7">
                {Array.from({ length: startOffset }).map((_, index) => (
                    <div
                        key={`empty-${index}`}
                        className="h-10"
                    />
                ))}

                {days.map((day) => {
                    const isStart = day === startDay;
                    const isEnd = day === endDay;
                    const isMiddle = selectedDays.includes(day);
                    const isUnavailable = unavailableDays.includes(day);

                    const isSelectedRange =
                        isStart || isMiddle || isEnd;

                    return (
                        <div
                            key={day}
                            className={`
                                relative flex h-10 items-center justify-center
                                ${isSelectedRange
                                    ? "bg-[#f2f2f2]"
                                    : ""
                                }
                                ${isStart ? "rounded-l-full" : ""}
                                ${isEnd ? "rounded-r-full" : ""}
                            `}
                        >
                            <button
                                type="button"
                                className={`
                                    flex h-10 w-10 items-center justify-center
                                    rounded-full
                                    text-[14px]
                                    ${isStart || isEnd
                                        ? "bg-[#222222] text-white"
                                        : ""
                                    }
                                    ${isUnavailable
                                        ? "text-[#ddd] line-through"
                                        : "text-[#222222]"
                                    }
                                `}
                            >
                                {day}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default function Calendar() {
    const octoberDays = Array.from({ length: 31 }, (_, i) => i + 1);

    const novemberDays = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <section className="border-t border-[#ebebeb] py-8">
            {/* Header */}
            <div className="mb-6">
                <div className="text-[22px] font-medium">
                    5 nights in Candolim
                </div>

                <div className="mt-1 text-[14px] text-[#717171]">
                    18 Oct 2026 - 23 Oct 2026
                </div>
            </div>

            {/* Calendar */}
            <div className="relative grid grid-cols-2 gap-x-[56px]">
                {/* Navigation */}
                <div className="absolute left-0 right-0 top-0 z-10 flex justify-between pointer-events-none">
                    <button
                        type="button"
                        aria-label="Previous month"
                        className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f7f7f7]"
                    >
                        <span className="h-[18px] w-[18px] -translate-y-[2px] translate-x-[4px]">
                            <ChevronLeft />
                        </span>
                    </button>

                    <button
                        type="button"
                        aria-label="Next month"
                        className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f7f7f7]"
                    >
                        <span className="h-[18px] w-[18px] -translate-y-[4px]">
                            <ChevronRight />
                        </span>
                    </button>
                </div>

                {/* October */}
                <Month
                    name="October 2026"
                    days={octoberDays}
                    startOffset={4}
                    selectedDays={[18, 19, 20, 21, 22, 23]}
                    startDay={18}
                    endDay={23}
                />

                {/* November */}
                <Month
                    name="November 2026"
                    days={novemberDays}
                    startOffset={0}
                    unavailableDays={[
                        18, 19, 20, 21, 22, 23, 24, 29, 30
                    ]}
                />
            </div>

            {/* Clear dates */}
            <div className="mt-6 flex items-center gap-3 justify-between">
                <span
                    className="
            inline-flex
            h-[22px]
            w-[30px]
            items-center
            justify-center
            rounded-[4px]
            border
            border-[#b0b0b0]
          "
                    aria-hidden="true"
                >
                    <CalendarIcon />
                </span>

                <button
                    type="button"
                    className="
            border-none
            bg-transparent
            text-[14px]
            font-medium
            underline
          "
                >
                    Clear dates
                </button>
            </div>
        </section>
    );
}