import { Center, Heading, Wrap, WrapItem, VStack } from "@chakra-ui/layout";

import Layout from "components/Layout";
import ItemCard from "components/ItemCard";
import ProductForm from "components/ProductForm";
import { useEffect } from "react";
import { useState } from "react";
import { productType } from "utils/types";
import { getProducts } from "utils/getData";

export default function Shop() {
  const [allProducts, setProducts] = useState<productType[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <Layout title="Shop">
      <Heading>Product List</Heading>
      <Wrap align="center">
        {allProducts.map((item, key) => {
          return (
            <WrapItem key={key}>
              <VStack>
                <ItemCard item={item} />
              </VStack>
            </WrapItem>
          );
        })}
      </Wrap>
      <ProductForm />
    </Layout>
  );
}
