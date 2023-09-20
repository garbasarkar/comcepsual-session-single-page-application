import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const productItem = useLoaderData();
  //   console.log(productItem.products);
  return (
    <div className="grid grid-cols-3 w-10/12 mx-auto gap-6">
      {productItem.products.map((item) => (
        <SingleProduct key={item.id} props={item}></SingleProduct>
      ))}
    </div>
  );
};

export default Product;
