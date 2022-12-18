import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
     categoriesMap: {},
     // setCategories: () => null
})

export const CategoriesProvider = ({ children }) =>{
     const [categoriesMap, setCategoriesMap] = useState({})

     useEffect(() =>{
          const getCategoriesMap = async () => {
               const catogoryMap = await getCategoriesAndDocuments()
               setCategoriesMap(catogoryMap)
          }
          getCategoriesMap()
     },[])
     
     const value = {categoriesMap}
     return (
          <CategoriesContext.Provider value={value} >
               { children }
          </CategoriesContext.Provider>
     )
}