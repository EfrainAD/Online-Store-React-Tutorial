import { createSelector } from "reselect"

const selectCategoryReducer = (state) => state.categories

export const selectCategoriesM = createSelector(
     [selectCategoryReducer],
     (categoriesSlice) => categoriesSlice.categories
)

export const selectCategories = createSelector(
     [selectCategoriesM], 
     (categories) => categories.reduce((acc, category) => {
          const { title, items} = category
          acc[title.toLowerCase()] = items
          return acc
     }, {})
) 

export const selectCategoriesIsLoading = createSelector(
     [selectCategoryReducer],
     (categories) => categories.isLoading
)