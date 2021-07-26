import { Text, Heading, Wrap, WrapItem, VStack, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

import Layout from "components/Layout";

export default function Home() {
  const { colorMode } = useColorMode();
  const darkHover = {
    background: "gray.700",
    cursor: "pointer",
  };
  const lightHover = {
    background: "gray.300",
    cursor: "pointer",
  };

  return (
    <Layout title="Home">
      <Heading>Home</Heading>
      <Wrap align="center">
        <WrapItem>
          <NextLink href={"/shop"} passHref>
            <VStack
              borderWidth={1}
              borderColor="gray.200"
              borderRadius="md"
              cursor="pointer"
              _hover={colorMode === "dark" ? darkHover : lightHover}
              maxW="180px"
              padding="10px"
            >
              <VStack align="stretch" p={4} spacing={2}>
                <Text fontSize="xl" textAlign="center">Shop</Text>

                <Text fontSize="xs" textAlign="left">Browse shop, register new products and add products to the order</Text>
              </VStack>
            </VStack>
          </NextLink>
        </WrapItem>
        <WrapItem>
          <NextLink href={"/clients"} passHref>
            <VStack
              borderWidth={1}
              borderColor="gray.200"
              borderRadius="md"
              cursor="pointer"
              _hover={colorMode === "dark" ? darkHover : lightHover}
              maxW="180px"
              padding="10px"
            >
              <VStack align="stretch" p={4} spacing={2}>
                <Text fontSize="xl" textAlign="center">Clients</Text>

                <Text fontSize="xs" textAlign="left">Browse and register clients</Text>
              </VStack>
            </VStack>
          </NextLink>
        </WrapItem>
        <WrapItem>
          <NextLink href={"/order"} passHref>
            <VStack
              borderWidth={1}
              borderColor="gray.200"
              borderRadius="md"
              cursor="pointer"
              _hover={colorMode === "dark" ? darkHover : lightHover}
              maxW="180px"
              padding="10px"
            >
              <VStack align="stretch" p={4} spacing={2}>
                <Text fontSize="xl" textAlign="center">Order</Text>

                <Text fontSize="xs" textAlign="left">Review and register order</Text>
              </VStack>
            </VStack>
          </NextLink>
        </WrapItem>
      </Wrap>
    </Layout>
  );
}
