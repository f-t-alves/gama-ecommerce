import React, { useState, useEffect } from "react";
import NextLink from "next/link";

import {
  Button,
  ButtonGroup,
  Icon,
  Center,
  VStack,
  Heading,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/router";

import Layout from "components/Layout";
import ItemCard from "components/ItemCard";
import { productType } from "utils/types";

const Cart: React.FC = () => {
  const router = useRouter();
  const toast = useToast();

  const [cartItems, setCartItems] = useState<productType[]>([]);

  const clearCart = () => {
    toast({
      title: "Clearing Cart!",
      status: "warning",
      isClosable: true,
    });
    localStorage.setItem(`@cart`, "");

    setTimeout(() => {
      router.push("/");
    }, 500);
  };

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
            <ButtonGroup>
              <NextLink href={"/order"} passHref>
                <Button colorScheme="green" size="sm">
                  Proceed to Checkout
                </Button>
              </NextLink>
              <Button leftIcon={<Icon as={MdCancel} />} onClick={clearCart}>
                Clear Cart
              </Button>
            </ButtonGroup>
          )}
        </VStack>
      </Center>
    </Layout>
  );
};

export default Cart;
