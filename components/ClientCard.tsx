import {
    Text,
    useColorMode,
    VStack,
  } from "@chakra-ui/react";
  
  import { clientType } from "utils/types";
  
  const ClientCard = ({ item }: { item: clientType }) => {
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
            <Text fontSize="m" textAlign="left">
              {item.name}
            </Text>

            <Text fontSize="xs" textAlign="left">
              {item.email}
            </Text>
  
            <Text fontSize="xs" textAlign="left">
              {item.address}
            </Text>
  
            <Text fontSize="xs" textAlign="left">
              {item.phone}
            </Text>
          </VStack>
        </VStack>
    );
  };
  
  export default ClientCard;
  