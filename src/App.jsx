import { useEffect, useState } from "react";
import ProductCards from "./components/ProductCards";
import Header from "./components/Header";


const App = () => {
  const[value, setValue] = useState(1);

  return (
  <>
  <Header />
  <div className="grid grid-cols-3">
  <ProductCards 
    name="Shoes" 
    brand="Nike" 
    price="1999"
   />

<ProductCards 
    name="Smartwatch" 
    brand="Apple" 
    price="2999"
   />

<ProductCards 
    name="Smartphone" 
    brand="Iphone" 
    price="3999"
   />

<ProductCards 
    name="Headphone" 
    brand="Nike" 
    price="4999"
   />

 <ProductCards 
    name="Cosmetics" 
    brand="Nike" 
    price="5999"
   />

<ProductCards 
    name="Sun Glasses" 
    brand="Nike" 
    price="6999"
   />
   </div>
  
  </>
  );
};

export default App;
