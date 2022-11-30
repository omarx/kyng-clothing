import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryTitle, CategoryTypeContainer } from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle className={"category-title"}>{category}</CategoryTitle>
      <CategoryTypeContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryTypeContainer>
    </Fragment>
  );
};
export default Category;
