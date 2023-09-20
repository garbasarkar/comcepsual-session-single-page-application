import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";
import { Link } from "react-router-dom";
const SingleProduct = ({ props }) => {
//   console.log(props);
  const { title, stock, images, price, id } = props;
  return (
    <div className="border p-5 rounded bg-slate-200">
      <img className="w-full h-[220px] rounded" src={images[0]}></img>
      <div className="flex justify-between mt-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <h3>Stock ({stock})</h3>
      </div>
      <div className="flex justify-between mt-4">
        <h4 className="text-lg font-semibold">{price} USD</h4>
        <div className="flex">
          <AiFillAudio className="text-2xl  mr-5"></AiFillAudio>
          <Link to={`/props/${id}`}>
            <BsFillArrowRightCircleFill className="text-2xl"></BsFillArrowRightCircleFill>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
