import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  ChevronDownIcon
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { FC } from 'react';

const Navbar: FC = () => (
  <Box as="header" w="100%" px={[5, 5, 10, 20]} py={[5, 5, 10, 10]}>
    <Flex as="nav" flexDirection="row" justifyContent="space-between">
      <Flex justifyContent="center" alignItems="center" _hover={{ cursor: 'pointer' }}>
        <Menu>
          <MenuButton as="Button" colorScheme="blue" rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;
