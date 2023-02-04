import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"

import CategoryPreview from "../../components/category-preview/category-preview.component"
import { selectCategoriesMap } from "../../store/categories/category.selector"
import { useSelector } from "react-redux"

const CategoriesPreview = () => {
     const categoriesMap = useSelector(selectCategoriesMap)
     console.log('HI, CATMAP', categoriesMap)
     
     return (
          <>
               {Object.keys(categoriesMap).map(title => (
                    <CategoryPreview key={title} name={title} products={categoriesMap[title]} />
               ))}
          </>
     )
}

export default CategoriesPreview