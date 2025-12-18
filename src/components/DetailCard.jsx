import React from "react";
import { ImCross } from "react-icons/im";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DetailCard = ({ detailCard }) => {
  gsap.registerPlugin(useGSAP);
  const { contextSafe } = useGSAP();

  

  const fun = contextSafe(() => {
    
     document.body.classList.remove("no-scroll");

    gsap.to(".cardOfDetailProduct", {
      display: "none",
      opacity: 0,
    });
  });
  return (
    <div
      className={`hidden fixed top-0 bottom-0 right-0 left-0 lg:top-[5vh] lg:left-[5vw] lg:bottom-[5vh] lg:right-0 xl:left-[14vh] 2xl:left-[25vh] min-h-3/4 opacity-0 max-w-6xl cardOfDetailProduct lg:w-[80vw] lg:min-w-96 lg:gap-11  border-4 rounded-4xl bg-linear-to-b  flex-col lg:flex-row bg-[#f0f8ef] p-10  items-center  overflow-y-auto gap-4 z-50`}
    >
      <ImCross onClick={fun} className="absolute top-5 left-6 cursor-pointer text-4xl " />
      <div className="items-center flex flex-col gap-8 max-w-1/2">
        <img src={`${detailCard.imgUrl}`} className="h-fit max-w-72 xl:max-w-2/3 xl:min-w-full" alt="" />
        <img src={`${detailCard.imgUrl2}`} className="max-h-60 max-w-fit xl:min-w-full" alt="" />
      </div>
      <div className="flex gap-10 flex-col md:flex-row lg:flex-col text-green-900 font-serif justify-around lg:gap-20">
      <div className="flex flex-col gap-2 justify-around lg:h-[700px] items-start">
        <div className="2xl:text-5xl text-4xl flex min-w-full text-center items-center justify-center gap-2 font-extrabold">
          <p className="inline border-gray-700 rounded">
            product details{" "} :-
          </p>
        </div>
        <h2 className="xl:text-4xl text-2xl font-extrabold"><span className="text-black">Category: </span>{detailCard.category}</h2>
        <h2 className="xl:text-4xl text-2xl font-extrabold"><span className="text-black">Product Name: </span>{detailCard.name}</h2>
        <h2 className="xl:text-4xl text-2xl font-extrabold"><span className="text-black">Donor: </span>{detailCard.donor}</h2>
        <h2 className="xl:text-4xl text-2xl font-extrabold"><span className="text-black">Donor's Class: </span>{detailCard.donorClass}</h2>
        <h2 className="xl:text-4xl text-2xl font-extrabold"><span className="text-black">Status: </span>{detailCard.availability ? "Available" : "Unavailable"}</h2>
        <h2 className="xl:text-4xl text-2xl font-extrabold"><span className="text-black">Product Condition: </span>{detailCard.condition}</h2>
        <p className="text-2xl xl:text-4xl text-gray-600 font-semibold"><span className="text-black">About Product: </span>{detailCard.description}</p>
      </div>
      </div>
      </div>
  );
};

export default DetailCard;
