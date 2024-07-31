const ProductCards = ({ name, brand, price }) => {
  return (
   <div className="bg-slate-200 m-5 p-5 rounded-xl text-center hover:bg-gray-300">
    <h2 className="text-2xl font-semibold mb-3">{name}</h2>
    <div>{brand}</div>
    <div className="text-xl text-yellow-700">Rs.{price}</div>
    <button className="bg-green-800 hover:bg-green-900 rounded-md text-white py-1 px-2 mt-2">Shop Now</button>
   </div>
   );
};

export default ProductCards;
