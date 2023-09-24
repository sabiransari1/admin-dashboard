import React from "react";
import { Tbody, Tr, Td } from "@chakra-ui/react";

export const ProductCard = ({
  id,
  img,
  name,
  description,
  gender,
  category,
  price,
}) => {
  return (
    <Tbody>
      <Tr>
        <Td>{img}</Td>
        <Td>{name}</Td>
        <Td>{description}</Td>
        <Td>{gender}</Td>
        <Td>{category}</Td>
        <Td>₹{price}</Td>
      </Tr>
    </Tbody>
  );
};
