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
} from "@chakra-ui/react";

import Layout from "components/Layout";
import OrderForm from "components/OrderForm";
import productType from "types/productType";

const Order: React.FC = () => {
  const [cartItems, setCartItems] = useState<productType[]>([]);
  const [total, setTotal] = useState<number>(0);

  const refreshCart = () => {
    const cartStorage = localStorage.getItem(`@cart`);
    if (cartStorage) {
      const cart: productType[] = JSON.parse(cartStorage);

      setCartItems(cart);

      let sum: number = cart
        .map((a) => a.price)
        .reduce(function (a, b) {
          return a + b;
        });

      setTotal(sum);
    }
  };

  useEffect(() => {
    refreshCart();
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
                  <Image boxSize="30px" src={item.image} alt={item.name} />
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
      <OrderForm />
    </Layout>
  );
};

export default Order;
