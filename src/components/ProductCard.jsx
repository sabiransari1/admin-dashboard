import React from "react";
import { Tr, Td } from "@chakra-ui/react";

export const ProductCard = ({
  img,
  name,
  description,
  gender,
  category,
  price,
}) => {
  return (
    <Tr>
      <Td>{img}</Td>
      <Td>{name}</Td>
      <Td>{description}</Td>
      <Td>{gender}</Td>
      <Td>{category}</Td>
      <Td>₹{price}</Td>
    </Tr>
  );
};
