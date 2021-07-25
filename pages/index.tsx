import { Center, Heading, Wrap, WrapItem, VStack } from "@chakra-ui/layout";

import Layout from "components/Layout";
import ItemCard from "components/ItemCard";
import { allProducts } from "database/products";

export default function Home() {
  return (
    <Layout title="Home">
          <Heading>Home</Heading>
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
    </Layout>
  );
}
