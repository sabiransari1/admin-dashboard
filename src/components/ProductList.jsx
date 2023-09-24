import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { ProductCard } from "./ProductCard";
import { Box, Center, Heading, Table, Th, Td } from "@chakra-ui/react";

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
      <Table>
        <Th>
          <Td>Image</Td>
          <Td>Name</Td>
          <Td>Description</Td>
          <Td>Gender</Td>
          <Td>Category</Td>
          <Td>Price</Td>
        </Th>
        {products.length > 0 &&
          products?.map((item) => <ProductCard key={item.id} {...item} />)}
      </Table>
    </Box>
  );
};
