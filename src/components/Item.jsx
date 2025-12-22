import { Link } from "react-router-dom";

export default function Item({
  imgUrl,
  category,
  name,
  description,
  schoolName,
  goodsData,
  id,
  handleClick,
  availability,
 
}) {
  console.log(name, imgUrl);
  return (
    <div>
      <div id={`${id}`} className="flex flex-col justify-center items-center gap-5 sm:m-5 border border-gray-100 w-[350px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-110 m-5 transform  hover:-translate-y-0.5 font-serif transition-all duration-700">
        <img
          className="sm:h-64  sm:p-5 w-full h-64 object-contain bg-gray-50 p-5 rounded-xl"
          src={imgUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={name}
          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x300?text=No+Image'; }}
        />
        <div className="p-4 flex flex-col text-green-800 gap-4">
          <p className=" sm:text-2xl font-bold text-xl tracking-wide  transition duration-200">
          <span className="text-black">Category: </span>{category}
          </p>
        <p className=" sm:text-2xl font-bold text-xl tracking-wide  transition duration-200">
          <span className="text-black">Product: </span>{name}
        </p>
        <p className=" sm:text-2xl font-bold text-xl tracking-wide  transition duration-200">
          <span className="text-black">Status: </span>{availability}
        </p>
        <div className="w-full flex items-center justify-center">
        <button onClick={handleClick}
          id={`${id}`}
          className=" sm:text-sm hover:animate-in lg:text-xl sm:py-3  sm:px-6 w-40 sm:w-auto block text-white font-semibold text-sm text-center py-3 px-15 bg-green-800 rounded-full shadow-md hover:bg-linear-to-r hover:to-green-800  hover:from-green-400 hover:shadow-lg transition  duration-500   cursor-pointer"
        >
          More Details...
        </button>
        </div>
        </div>
      </div>
    </div>
  );
}
