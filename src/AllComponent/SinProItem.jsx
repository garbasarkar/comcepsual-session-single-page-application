import { useLoaderData, useNavigate } from "react-router-dom";
// import DetailsShow from "./DetailsShow";

const SinProItem = () => {
  const proDetails = useLoaderData();
  const { title, brand, description, images, id, price } = proDetails;
  console.log(proDetails);
  return (
    <div className="flex justify-center">
      <img src={images[0]}></img>
      <div>
        <h2 className="text-2xl font-semibold">Brand: {brand}</h2>
        <h4 className="text-2xl font-semibold">Name: {title}</h4>
        <p className="text-md">Discription: {description}</p>
        <div>
          <div className="flex">
            <div className="flex flex-wrap">
              <div className="flex items-center mr-4">
                <input
                  id="red-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="red-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Red
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="green-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="green-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Green
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  checked
                  id="purple-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="purple-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Purple
                </label>
              </div>
            </div>
            <div>
              <select className="select select-accent max-w-xs">
                <option disabled selected>
                  LG
                </option>
                <option>SM</option>
                <option>MD</option>
                <option>XL</option>
              </select>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-semibold">{price} USD</h3>
        <button className="px-10 py-2 bg-blue-600 text-white font-semibold mt-7 rounded">
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default SinProItem;
