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

import { clientType } from "utils/types";
import { getClients } from "utils/getData";

const ClientForm = () => {
  const bg = useColorModeValue("#fafafa", "#060606");

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { colorMode } = useColorMode();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const clients = getClients();
    const newID = clients.length + 1;

    const data: clientType = {
      id: newID,
      name: fullName,
      email,
      address,
      phone,
    };
    const convertData = JSON.stringify([...clients, data]);

    localStorage.setItem("@clientList", convertData);

    setLoading(true);

    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  const renderLoading = (isLoaded: boolean) => {
    if (isLoaded) return <Text>Client registered!</Text>;
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
        <Heading justify="center">Register new client</Heading>
        <FormControl id="fullName">
          <FormLabel>Name</FormLabel>
          <Input
            autoComplete="name"
            placeholder={"Nowhere Man"}
            value={fullName}
            onChange={({ currentTarget: { value } }) => setFullName(value)}
            focusBorderColor="green.500"
            size="lg"
            isRequired
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            autoComplete="email"
            placeholder={"man@nowhere.com"}
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
            focusBorderColor="green.500"
            size="lg"
            isRequired
          />
          <FormHelperText>We will never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="address">
          <FormLabel>Delivery address</FormLabel>
          <Input
            autoComplete="street-address"
            placeholder={"1234 Nowhere Street, Nowhere Land"}
            value={address}
            onChange={({ currentTarget: { value } }) => setAddress(value)}
            focusBorderColor="green.500"
            size="lg"
            isRequired
          />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phone Number</FormLabel>
          <PhoneInput
            country={"us"}
            preferredCountries={["br", "us"]}
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
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

export default ClientForm;
