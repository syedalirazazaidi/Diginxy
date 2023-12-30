import React from "react";
import Image from "next/image";

export default function Work() {
  const work = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",

      desription:
        "We created an ecommerce website for California Pizza Kitchen that helped them generate orders…",
      title: "Learn More",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",

      desription:
        "For BJ’s Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders…",
      title: "Learn More",
      id: "02",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",
      desription:
        "We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and SEO campaigns",
      title: "Learn More",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",
      desription:
        "We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and SEO campaigns",
      title: "Learn More",
      id: "04",
    },
  ];
  return (
    <section
      className="bg-cover bg-center w-full bg-no-repeat body-font relative"
      style={{
        backgroundImage:
          "url(https://diginsy.com/wp-content/uploads/2023/06/Group-14100-min.png)",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="container px-5 py-14 mx-auto relative">
        <div className="flex flex-wrap w-full mb-4">
          <div className="flex items-center gap-4 lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">
              Our Work
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded" />
          </div>
        </div>
        <p className="text-[#FFFFFF] text-[20px] md:text-[36px] font-bold leading-tight">
          We’ve Done Lot’s Of Work, Let’s Check Some From Here
        </p>
        <div className="flex flex-wrap">
          {work.map(({ img, desription, title }) => (
            <div key={desription} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <Image
                  src={img}
                  width={380}
                  height={190}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Digincy"
                />
                <p className="leading-relaxed text-base text-white">
                  {desription}
                </p>
                <div className="flex items-center text-center gap-10">
                  <h1 className="text-[#FFFFFF] text-[14px]">{title}</h1>
                  <Image
                    src="https://diginsy.com/wp-content/uploads/2023/06/Group-14082-1.png"
                    width={30}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
