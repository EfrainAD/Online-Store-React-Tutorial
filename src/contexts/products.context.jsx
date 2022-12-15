import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

export const ProductsContext = createContext({
     products: [],
     // setProducts: () => null
})

export const ProductsProvider = ({ children }) =>{
     const [products, setProducts] = useState([])
     const value = {products}
     useEffect(() =>{
          const getCategoriesMap = async () => {
               const catogoryMap = await getCategoriesAndDocuments()
               console.log('catogoryMap', catogoryMap)
          }
          getCategoriesMap()
     },[])
     return (
          <ProductsContext.Provider value={value} >
               { children }
          </ProductsContext.Provider>
     )
}