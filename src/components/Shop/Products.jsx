import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: 1,
    price: 5,
    title: "The Legends",
    description: "Legends are only one in one field",
  },
  {
    id: 2,
    price: 10,
    title: "Aeroplane",
    description: "My first Aeroplane",
  },
  {
    id: 3,
    price: 4,
    title: "The voice of failure",
    description: "Get inspire from failure",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => {
          return (
            <ProductItem
              title={item.title}
              price={item.price}
              description={item.description}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
