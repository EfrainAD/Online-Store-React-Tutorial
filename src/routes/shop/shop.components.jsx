import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { setCategoriesMap } from '../../store/categories/category.action'
import { selectCategoriesMap } from '../../store/categories/category.selector'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import CategoriesPreview from '../categories-preview/categories-preview.components'
import Category from '../category/category.component'

import './shop.styles.scss'

const Shop = () => {
     const dispatch = useDispatch()

     useEffect(() =>{
          const getCategoriesMap = async () => {
               const catogoryMap = await getCategoriesAndDocuments()
               dispatch((setCategoriesMap(catogoryMap)))
          }
          getCategoriesMap()
     },[dispatch])

     return (
          <Routes>
               <Route index element={<CategoriesPreview />} />
               <Route path=':category' element={<Category />} />
          </Routes>
     )
}

export default Shop