import LivingRoom from '../assets/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg';
import Bedroom from '../assets/67c61c6f-6260-4809-9510-0360e58a345d.jpeg';

const sleepingOptions = [
  {
    image: Bedroom,
    title: 'Bedroom',
    description: '1 double bed',
  },
  {
    image: LivingRoom,
    title: 'Living room',
    description: '1 sofa',
  },
];

export default function SleepingArrangement() {
  return (
    <section className="py-8 border-b border-[#ebebeb]">

      {/* Heading */}
      <h2 className="text-[22px] leading-[26px] font-medium mb-6">
        Where you'll sleep
      </h2>

      {/* Sleeping options */}
      <div className="flex gap-6">

        {sleepingOptions.map((item) => (
          <div
            key={item.title}
            className="w-[320px]"
          >

            {/* Image */}
            <img
              src={item.image}
              alt=""
              className="
                w-full
                aspect-[3/2]
                object-cover
                rounded-[8px]
                border
                border-[rgba(0,0,0,0.08)]
                block
              "
            />

            {/* Room name */}
            <div className="text-[16px] font-medium mt-[14px]">
              {item.title}
            </div>

            {/* Bed information */}
            <div className="text-[14px] text-[#717171]">
              {item.description}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}