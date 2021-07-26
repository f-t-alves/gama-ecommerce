import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  VStack,
  Flex,
  Button,
  ButtonGroup,
  Icon,
  useColorMode,
  useColorModeValue,
  Spinner,
  Tag,
  Text,
  Heading,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { productType } from "utils/types";
import { getProducts } from "utils/getData";

const ProductForm = () => {
  const bg = useColorModeValue("#fafafa", "#060606");

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageURL, setImageURL] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const { colorMode } = useColorMode();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const products = getProducts();
    const newID = products.length + 1;

    const data: productType = {
      id: newID,
      name,
      description,
      imageURL,
      price,
    };
    const convertData = JSON.stringify([...products, data]);

    localStorage.setItem("@productList", convertData);

    setLoading(true);

    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  const renderLoading = (isLoaded: boolean) => {
    if (isLoaded) return <Text>Product registered!</Text>;
    return <Spinner />;
  };

  return (
    <Flex
      as="form"
      borderRadius="md"
      direction="column"
      align="center"
      justify="center"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      maxW="720px"
      minW="80%"
    >
      <VStack
        px={[7, 14]}
        py={[5, 10]}
        spacing={5}
        borderRadius="md"
        w={["full", "full", "60%"]}
        border={colorMode === "light" ? "1px solid #000" : "1px solid #fff"}
        bg={bg}
      >
        <Heading justify="center">Register new product</Heading>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            autoComplete="name"
            placeholder={"Product Name"}
            value={name}
            onChange={({ currentTarget: { value } }) => setName(value)}
            focusBorderColor="green.500"
            size="lg"
            isRequired
          />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Input
            autoComplete="description"
            placeholder={"Product Description"}
            value={description}
            onChange={({ currentTarget: { value } }) => setDescription(value)}
            focusBorderColor="green.500"
            size="lg"
            isRequired
          />
          <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="imageURL">
          <FormLabel>Product Image URL</FormLabel>
          <Input
            autoComplete="url"
            placeholder={"Product Image URL"}
            value={imageURL}
            onChange={({ currentTarget: { value } }) => setImageURL(value)}
            focusBorderColor="green.500"
            size="lg"
            isRequired
          />
        </FormControl>
        <FormControl id="price">
          <FormLabel>Price</FormLabel>
          <Input
            autoComplete="price"
            placeholder={"0.00"}
            value={price}
            onChange={({ currentTarget: { value } }) => setPrice(Number(value))}
            focusBorderColor="green.500"
            size="lg"
            isRequired
          />
        </FormControl>
        <ButtonGroup variant="outline" spacing={6}>
          <Button
            type="submit"
            leftIcon={<Icon as={IoCreateOutline} />}
            colorScheme="teal"
          >
            Submit
          </Button>
        </ButtonGroup>
        {loading && <Tag>{renderLoading(loaded)}</Tag>}
      </VStack>
    </Flex>
  );
};

export default ProductForm;
