import CategoryPreview from "../../components/category-preview/category-preview.component"
import { selectCategories, selectCategoriesIsLoading } from "../../store/categories/category.selector"
import { useSelector } from "react-redux"
import Spinner from "../../components/spinner/spinner.component"

const CategoriesPreview = () => {
     const categoriesMap = useSelector(selectCategories)
     const isLoading = useSelector(selectCategoriesIsLoading)
     
     return (
          <>
               {isLoading ? <Spinner /> :
                    Object.keys(categoriesMap).map(title => (
                         <CategoryPreview key={title} name={title} products={categoriesMap[title]} />
                    ))
               }
          </>
     )
}

export default CategoriesPreview