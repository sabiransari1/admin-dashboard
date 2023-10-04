import React, { useEffect } from "react";
import { Tbody, Tr, Td, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
  resetProductInitialstate,
} from "../redux/products/action";
import { useDispatch, useSelector } from "react-redux";

export const ProductCard = ({
  id,
  img,
  name,
  description,
  gender,
  category,
  price,
}) => {
  const dispatch = useDispatch();
  const isDelete = useSelector((store) => store.productsReducer.isDelete);
  const toast = useToast();

  useEffect(() => {
    {
      isDelete
        ? toast({
            title: `Product Deleted Successfully`,
            status: "success",
            isClosable: true,
            position: "top",
            duration: "1000",
          })
        : "";
    }
  }, [isDelete]);

  useEffect(() => {
    isDelete && dispatch(resetProductInitialstate);

    let paramObj = {
      params: {
        _limit: 10,
        _page: 1,
      },
    };

    isDelete && dispatch(getProducts(paramObj));
  }, [isDelete]);

  return (
    <Tbody>
      <Tr>
        <Td>{img}</Td>
        <Td>{name}</Td>
        <Td>{description}</Td>
        <Td>{gender}</Td>
        <Td>{category}</Td>
        <Td>₹{price}</Td>
        <Td cursor={"pointer"}>
          <Link to={`/editproduct/${id}`}>Edit</Link>
        </Td>
        <Td cursor={"pointer"} onClick={() => dispatch(deleteProduct(id))}>
          Delete
        </Td>
      </Tr>
    </Tbody>
  );
};
