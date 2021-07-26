import { Heading, Wrap, WrapItem, VStack } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useState } from "react";

import { clientType } from "utils/types";
import { getClients } from "utils/getData";
import Layout from "components/Layout";
import ClientForm from "components/ClientForm";
import ClientCard from "components/ClientCard";

export default function Shop() {
  const [allClients, setClients] = useState<clientType[]>([]);

  useEffect(() => {
    setClients(getClients());
  }, []);

  return (
    <Layout title="Clients">
      <Heading>Client List</Heading>
      <Wrap align="center">
        {allClients.map((item, key) => {
          return (
            <WrapItem key={key}>
              <VStack>
                <ClientCard item={item} />
              </VStack>
            </WrapItem>
          );
        })}
      </Wrap>
      <ClientForm />
    </Layout>
  );
}
