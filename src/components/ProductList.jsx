import React, { useEffect, useState } from "react";
import { getProducts } from "../redux/products/action";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { ProductCard } from "./ProductCard";
import {
  Box,
  Center,
  Heading,
  Table,
  Th,
  Td,
  Button,
  Flex,
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
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let paramObj = {
    params: {
      _limit: limit,
      _page: page,
    },
  };

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [page]);

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

      {products.length === 0 || (
        <Flex justify={"space-evenly"} p={"5px"} mt={"10px"}>
          <Button
            onClick={() => setPage((prev) => prev - 1)}
            isDisabled={page === 1}
          >
            Previos
          </Button>
          <Center>
            <Heading>{page}</Heading>
          </Center>
          <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
        </Flex>
      )}
    </Box>
  );
};
