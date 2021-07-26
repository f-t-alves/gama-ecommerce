import {
  Image,
  Text,
  useColorMode,
  Box,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

import { productType } from "utils/types";
import { getCart } from "utils/getData";

const ItemCard = ({ item }: { item: productType }) => {
  const { colorMode } = useColorMode();
  const darkHover = {
    background: "gray.700",
    cursor: "pointer",
  };
  const lightHover = {
    background: "gray.300",
    cursor: "pointer",
  };

  const addToCart = (item: productType) => {
    let cart: productType[] = getCart();
    cart = [...cart, item];
    localStorage.setItem(`@cart`, JSON.stringify(cart));
    console.log("Click: ", item.id, cart);
  };

  return (
    <Box onClick={() => addToCart(item)}>
      <VStack
        borderWidth={1}
        borderColor="gray.200"
        borderRadius="md"
        cursor="pointer"
        _hover={colorMode === "dark" ? darkHover : lightHover}
        maxW="180px"
        padding="10px"
      >
        <Image alt={item.name} src={item.imageURL} width="95%" />
        <VStack align="stretch" p={4} spacing={2}>
          <Text fontSize="m" textAlign="left">
            {item.name}
          </Text>

          <Text fontSize="xs" textAlign="left">
            {item.description}
          </Text>

          <Stat>
            <StatLabel>Price</StatLabel>
            <StatNumber>
              $
              {item.price.toLocaleString("en-us", { minimumFractionDigits: 2 })}
            </StatNumber>
            <StatHelpText>Tax included</StatHelpText>
          </Stat>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ItemCard;
