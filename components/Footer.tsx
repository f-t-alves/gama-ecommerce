import { chakra, HStack, Icon, Link, Text, Tooltip, VStack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <VStack as="footer" align="stretch" p={3} spacing={1} color="gray.500">
    <chakra.div fontSize="xs" textAlign="center">
      <Text>
        FurrecaShop is your one-stop shop for the Furreca lifestyle!
      </Text>
    </chakra.div>

    <HStack spacing={4} justify="center">
      <Tooltip label="GitHub">
        <Link href="https://github.com/f-t-alves/gama-ecommerce" isExternal>
          <Icon as={FaGithub} />
        </Link>
      </Tooltip>
    </HStack>
  </VStack>
);

export default Footer;
