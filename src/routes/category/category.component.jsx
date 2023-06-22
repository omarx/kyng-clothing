import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryTitle, CategoryTypeContainer } from "./category.styles";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle className={"category-title"}>{category}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryTypeContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryTypeContainer>
      )}
    </Fragment>
  );
};
export default Category;
