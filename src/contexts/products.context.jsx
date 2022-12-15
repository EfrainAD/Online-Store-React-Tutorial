import { createContext, useState, useEffect } from 'react'

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js'

import SHOP_DATA from '../SHOP_DATA.js'

export const ProductsContext = createContext({
     products: [],
     // setProducts: () => null
})

export const ProductsProvider = ({ children }) =>{
     const [products, setProducts] = useState([])
     const value = {products}
     useEffect(()=>{addCollectionAndDocuments('cattegories', SHOP_DATA)},[])
     return (
          <ProductsContext.Provider value={value} >
               { children }
          </ProductsContext.Provider>
     )
}