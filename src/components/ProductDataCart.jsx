import React from "react";
import { Box, Center } from "@chakra-ui/react";

export const ProductDataCart = ({ item }) => {
  return (
    <Box bgColor={"#d0e0e3"} p={"5px"} borderRadius={"5px"}>
      <Center>{item[Object.keys(item)]}</Center>
      <Center>{Object.keys(item)}</Center>
    </Box>
  );
};
