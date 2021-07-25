import { chakra, Center, VStack, Flex, Spacer } from "@chakra-ui/react";
import Head from "next/head";

import Footer from "components/Footer";
import Header from "components/Header";

const Layout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      />

      <Head>
        <title>{title ? "FurrecaShop - " + title : "FurrecaShop"}</title>
      </Head>

      <Flex minH="100vh" direction="column" maxW="1200px" mx="auto">
        <Header />

        <VStack maxW="900px" minW="90%" align="center">
          {children}
        </VStack>
        <Spacer />

        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
