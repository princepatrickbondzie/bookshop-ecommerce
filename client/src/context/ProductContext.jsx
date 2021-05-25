import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProviderContextProvider = (props) => {
    const [product, setProduct] = useState()
    return (
      <ProductContext.Provider value={[product, setProduct]}>
        {props.children}
      </ProductContext.Provider>
    );
}
export default ProviderContextProvider;;