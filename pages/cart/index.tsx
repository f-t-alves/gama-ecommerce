import React, { useState, useEffect } from "react";
import NextLink from "next/link";

import {
  Button,
  Center,
  VStack,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Layout from "components/Layout";
import ItemCard from "components/ItemCard";
import productType from "types/productType";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<productType[]>([]);

  useEffect(() => {
    const cartStorage = localStorage.getItem(`@cart`);
    if (cartStorage) {
      const cart: productType[] = JSON.parse(cartStorage);

      setCartItems(cart);
    }
  }, []);

  return (
    <Layout title="Cart">
      <Center>
        <VStack>
          <Heading>Your Cart</Heading>
          <Wrap>
            {cartItems.map((item, key) => {
              return (
                <WrapItem key={key}>
                  <ItemCard item={item} />
                </WrapItem>
              );
            })}
          </Wrap>
          {cartItems.length && (
            <NextLink href={"/order"} passHref>
              <Button colorScheme="green" size="sm">
                Proceed to Checkout
              </Button>
            </NextLink>
          )}
        </VStack>
      </Center>
    </Layout>
  );
};

export default Cart;
