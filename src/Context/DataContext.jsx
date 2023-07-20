/*import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext ();

const DataProvider = ({children}) => {
        const [data, setData] = useState ([]);
        const [cart, setCart] = useState ([]);

        useEffect(() => {
            fetchData();
          }, []);
        
          const fetchData = async () => {
            try {
              const response = await axios.get("http://localhost:39007/bestoffers/");
              setData(response.data);
            } catch (error) {
              console.error("Error fetching data from MongoDB:", error);
            }
          };
          
        
          const getItems = () => {
            fetchData();
          };

        const buyProduct = (product) => {
   
            const productrepeat = cart.find((item)=> item.id === product.id) // find repeat products and store it in a variable
         
            if(productrepeat){
               setCart(cart.map((item)=> item.id === product.id ? {...product, quantity: productrepeat.quantity + 1} : item))
            }else {
               setCart([...cart, product]);
            }
         };

    return(
        <DataContext.Provider value={{ data, cart, setCart, buyProduct, getItems}}>{children}</DataContext.Provider>
    )
};

export default DataProvider;*/

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3900/blog/getblogs");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data from MongoDB:", error);
    }
  };

  const getItems = () => {
    fetchData();
  };

  const buyProduct = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: productRepeat.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <DataContext.Provider value={{ data, cart, setCart, buyProduct, getItems }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
