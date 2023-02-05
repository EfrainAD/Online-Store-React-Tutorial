import CategoryPreview from "../../components/category-preview/category-preview.component"
import { selectCategories } from "../../store/categories/category.selector"
import { useSelector } from "react-redux"

const CategoriesPreview = () => {
     const categoriesMap = useSelector(selectCategories)
     
     return (
          <>
               {Object.keys(categoriesMap).map(title => (
                    <CategoryPreview key={title} name={title} products={categoriesMap[title]} />
               ))}
          </>
     )
}

export default CategoriesPreview