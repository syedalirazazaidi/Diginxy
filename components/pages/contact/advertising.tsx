import Image from "next/image";
import React from "react";

export default function Advertising() {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://diginsy.com/wp-content/uploads/2023/10/MBnflN.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Set the desired height or adjust as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff", // Text color on the image
      }}
      className="text-gray-600 body-font"
    >
      <div>
        {/* <div className="flex-col flex items-center  justify-center  ">
          <h1 className="text-[#FFFFFF] mt-28 text-center text-[40px] font-[700] tracking-normal leading-[51px] w-[78%]">
            AMERICA’S #1 INTERNET MARKETING COMPANY DIGITAL MARKETING
          </h1>
          <h1 className="text-[#FFFFFF]  text-center text-[40px] font-[700] tracking-normal leading-[51px] w-[78%]">
            AGENCY THAT MAXIMIZE SALES & PROFITABILITY
          </h1>
        </div> */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-col container mx-auto text-center w-2/3 mb-20">
              <h2 className="text-3xl text-[#FFFFFF] tracking-widest font-medium  mb-1">
                AMERICA’S #1 INTERNET MARKETING COMPANY DIGITAL MARKETING
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#FFFFFF]">
                AGENCY THAT MAXIMIZE SALES & PROFITABILITY
              </h1>
            </div>
            <div className="flex flex-wrap">
              <div className=" xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6   border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 	 font-medium title-font mb-2">
                  93%
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  CLIENT RETENTION RATE
                </p>
              </div>
              <div
                // className="xl:w-1/4 lg:w-1/2 md:w-full h-1/6 px-8 py-6 border-l-[1px] border-gray-200 border-opacity-90"
                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-90"
              >
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  300+
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  AWESOME TEAM MEMBERS
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  2MIL+
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  QUALIFIED LEADS DELIVERED
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  1500+
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  CLIENTS WORKING WITH US GLOBALLY
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className=" body-font text-[#FFFFFF]">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6  border-gray-200 border-opacity-60">
                <div className="flex gap-4">
                  <Image
                    src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
                    width={60}
                    height={45}
                    alt=""
                  />
                  <h2 className="text-[34px]  text-[#FFFFFF] font-bold title-font mb-2">
                    93%
                  </h2>
                </div>
                <p className="leading-relaxed text-base mb-4 font-bold">
                  CLIENT RETENTION RATE
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 h-[105px] md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
                <div className="flex gap-4 items-center text-center">
                  <Image
                    src="https://diginsy.com/wp-content/uploads/2023/12/public-2.png"
                    width={50}
                    height={45}
                    alt=""
                  />

                  <h2 className="text-[34px]  text-[#FFFFFF] font-bold title-font mb-2">
                    300+
                  </h2>
                </div>
                <p className="leading-relaxed text-base mb-4 font-bold">
                  AWESOME TEAM MEMBERS
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 h-[105px]  md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
                <div className="flex gap-4 items-center text-center">
                  <Image
                    src="https://diginsy.com/wp-content/uploads/2023/12/public-1.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <h2 className="text-[34px]  text-[#FFFFFF] font-bold title-font mb-2">
                    2MIL+
                  </h2>
                </div>
                <p className="leading-relaxed text-base mb-4 font-bold">
                  QUALIFIED LEADS DELIVERED
                </p>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 h-[105px]  md:w-full px-8 py-6 border-l-[1px] border-gray-200 border-opacity-60">
                <div className="flex gap-4 items-center text-center">
                  <Image
                    src="https://diginsy.com/wp-content/uploads/2023/12/public.png"
                    width={40}
                    height={35}
                    alt=""
                  />
                  <h2 className="text-[34px]  text-[#FFFFFF] font-bold title-font mb-2">
                    1500+
                  </h2>
                </div>
                <p className="leading-relaxed text-base mb-4 font-bold w-[300px]">
                  CLIENTS WORKING WITH US GLOBALLY
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 -mt-14">
          <Image
            src="https://diginsy.com/wp-content/uploads/2023/12/Amazon-1.png"
            width={160}
            height={50}
            alt="Amazon Logo"
          />
          <Image
            src="https://diginsy.com/wp-content/uploads/2023/12/Fb-1.png"
            width={160}
            height={50}
            alt="Facebook Logo"
          />
          <Image
            src="https://diginsy.com/wp-content/uploads/2023/12/Google-1.png"
            width={160}
            height={50}
            alt="Google Logo"
          />
          <Image
            src="https://diginsy.com/wp-content/uploads/2023/12/Microsoft-1.png"
            width={160}
            height={50}
            alt="Microsoft Logo"
          />
          <Image
            src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-78.png"
            width={160}
            height={50}
            alt="Logo"
          />
          <Image
            src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-80.png"
            width={160}
            height={30}
            alt="Logo"
          />
        </div> */}
        {/* <h1 className="text-3xl font-medium mb-2">
          This is a background image
        </h1>
        <p className="text-base">Add your content here.</p> */}
      </div>
    </section>
  );
}
