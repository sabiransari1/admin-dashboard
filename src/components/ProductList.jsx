import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { ProductCard } from "./ProductCard";
import {
  Box,
  Center,
  Heading,
  TableContainer,
  Table,
  Tr,
  Th,
  Thead,
} from "@chakra-ui/react";

export const ProductList = () => {
  const { isLoading, isError, errMessage, products } = useSelector((store) => {
    return {
      isLoading: store.productsReducer.isLoading,
      isError: store.productsReducer.isError,
      errMessage: store.productsReducer.errMessage,
      products: store.productsReducer.products,
    };
  }, shallowEqual);

  return (
    <Box>
      {/* loading */}
      {isLoading && (
        <Center>
          <Heading>Loading...</Heading>
        </Center>
      )}

      {/* Error */}
      {isError && (
        <Center>
          <Heading>{errMessage}</Heading>
        </Center>
      )}

      {/* products */}
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Gender</Th>
              <Th>Category</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          {products.length > 0 &&
            products?.map((item) => <ProductCard key={item.id} {...item} />)}
        </Table>
      </TableContainer>
    </Box>
  );
};
