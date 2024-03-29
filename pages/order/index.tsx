import React, { useState, useEffect } from "react";

import {
  Image,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Select,
  useToast,
  Button,
  HStack,
  Icon,
  VStack,
  FormControl,
} from "@chakra-ui/react";

import { MdCancel } from "react-icons/md";

import Layout from "components/Layout";
import { productType, clientType, orderType } from "utils/types";

import { getCart, getClients, getOrders } from "utils/getData";

const Order: React.FC = () => {
  const toast = useToast();

  const spoofClient: clientType = {
    id: 0,
    name: "",
    email: "",
    address: "",
    phone: "",
  };

  const [cartItems, setCartItems] = useState<productType[]>(getCart());
  const [clientList, setClientList] = useState<clientType[]>(getClients());

  const [total, setTotal] = useState<number>(0);
  const [chosenClient, setChosenClient] = useState<clientType>(spoofClient);

  const refreshCart = () => {
    const cartStorage: productType[] = getCart();
    setCartItems(cartStorage);
    if (cartItems.length) {
      let sum: number = cartItems
        .map((a) => a.price)
        .reduce(function (a, b) {
          return a + b;
        });

      setTotal(sum);
    }
  };

  const refreshClientList = () => {
    setClientList(getClients());
  };

  const clearCart = (alert: boolean) => {
    if (alert)
      toast({
        title: "Clearing Cart!",
        status: "warning",
        isClosable: true,
      });
    localStorage.setItem(`@cart`, "");

    if (alert) {
      setTimeout(() => {
        refreshCart();
        toast.closeAll();
      }, 500);
    } else {
      refreshCart();
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const clientID: number = Number(e.target.value);

    const client = clientList.find((i) => i.id === clientID);
    if (client) setChosenClient(client);
  };

  const handleSubmit = () => {
    console.log(`Registering order`);

    let orderList = getOrders();
    const newID: number = orderList.length + 1;
    const currentDate = new Date();

    const data: orderType = {
      id: newID,
      products: cartItems,
      client: chosenClient,
      total: total,
      orderDate: currentDate,
      status: "Pending",
    };

    if (chosenClient.id !== 0) {
      orderList = [...orderList, data];
      localStorage.setItem(`@orderList`, JSON.stringify(orderList));

      toast({
        title: "Order saved!",
        status: "success",
        isClosable: true,
      });

      setTimeout(() => {
        clearCart(false);
        toast.closeAll();
      }, 1000);
    } else {
      toast({
        title: "No client selected!",
        status: "error",
        isClosable: true,
      });
      setTimeout(() => {
        toast.closeAll();
      }, 1000);
    }
  };

  useEffect(() => {
    refreshCart();
    refreshClientList();
  }, []);

  return (
    <Layout title="Order">
      <Heading>Order</Heading>
      <Table variant="striped">
        <TableCaption>Review your order</TableCaption>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Name</Th>
            <Th isNumeric>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item, key) => {
            return (
              <Tr key={key}>
                <Td>
                  <Image boxSize="30px" src={item.imageURL} alt={item.name} />
                </Td>
                <Td>{item.name}</Td>
                <Td isNumeric>
                  $
                  {item.price.toLocaleString("en-us", {
                    minimumFractionDigits: 2,
                  })}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total</Th>
            <Th></Th>
            <Th isNumeric>
              ${total.toLocaleString("en-us", { minimumFractionDigits: 2 })}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
      <VStack spacing={5}>
        <FormControl id="client">
          <Select placeholder="Select client" onChange={handleSelect}>
            {clientList.map((client, key) => {
              return (
                <option value={client.id} key={key}>
                  {client.name}
                </option>
              );
            })}
          </Select>
        </FormControl>
        <HStack align="center">
          <Button colorScheme="green" onClick={() => handleSubmit()}>
            Submit Order
          </Button>
          <Button
            leftIcon={<Icon as={MdCancel} />}
            onClick={() => clearCart(true)}
          >
            Clear Cart
          </Button>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Order;
