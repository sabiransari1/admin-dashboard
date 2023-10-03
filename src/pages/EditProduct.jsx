import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  VStack,
  useToast,
} from "@chakra-ui/react";
import {
  editProduct,
  resetProductInitialstate,
} from "../redux/products/action";
import { Navbar } from "../components/Navbar";

export const EditProduct = () => {
  const { id } = useParams();
  const { isLoading, isError, errMessage, products, isEdit } = useSelector(
    (store) => ({
      isLoading: store.productsReducer.isLoading,
      isError: store.productsReducer.isError,
      errMessage: store.productsReducer.errMessage,
      products: store.productsReducer.products,
      isEdit: store.productsReducer.isEdit,
    }),
    shallowEqual
  );
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const data = products.find((el) => el.id === +id);
    setProduct(data);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    dispatch(editProduct(id, product));
  };

  useEffect(() => {
    {
      isLoading
        ? toast({
            title: `Updating Product`,
            status: "loading",
            isClosable: true,
            position: "top",
            duration: "500",
          })
        : isError
        ? toast({
            title: `${errMessage}`,
            status: "error",
            isClosable: true,
            position: "top",
            duration: 2000,
          })
        : isEdit
        ? toast({
            title: `Product Updated Successfully`,
            status: "success",
            isClosable: true,
            position: "top",
            duration: "1000",
          })
        : "";
    }
  }, [isLoading, isError, isEdit]);

  useEffect(() => {
    isEdit && dispatch(resetProductInitialstate);
  }, [isEdit]);

  return (
    <Box>
      <Navbar />
      <Flex minW={"100wh"} minH={"100vh"} justify={"center"} align={"center"}>
        <Flex w={"80%"} h={"80%"} justify={"center"} align={"center"}>
          <Box
            w={{
              base: "100%",
              sm: "100%",
              md: "70%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
            p={"1rem"}
          >
            {/* <FormControl> */}
            <form onSubmit={handleEditProduct}>
              <FormControl>
                <VStack spacing={"1rem"}>
                  <Input
                    type={"text"}
                    name={"img"}
                    placeholder={"Image"}
                    variant={"filled"}
                    value={product.img}
                    onChange={handleChange}
                  />

                  <Input
                    type={"text"}
                    name={"name"}
                    placeholder={"Name"}
                    variant={"filled"}
                    value={product.name}
                    onChange={handleChange}
                  />

                  <Input
                    type={"text"}
                    name={"description"}
                    placeholder={"Description"}
                    variant={"filled"}
                    value={product.description}
                    onChange={handleChange}
                  />

                  <Select
                    name={"gender"}
                    onChange={handleChange}
                    cursor={"pointer"}
                  >
                    <option value={""}>Filter By Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                  </Select>

                  <Select
                    name={"category"}
                    onChange={handleChange}
                    cursor={"pointer"}
                  >
                    <option value={""}>Filter By Category</option>
                    {/* male */}
                    <option value={"suits"}>Suits</option>
                    <option value={"shirts"}>Shirts</option>
                    <option value={"jeans"}>Jeans</option>
                    <option value={"trousers"}>Trousers</option>

                    {/* female */}
                    <option value={"kurti"}>Kurti</option>
                    <option value={"saree"}>Saree</option>
                    <option value={"jackets"}>Jackets</option>
                    <option value={"lehenga"}>Lehenga</option>
                  </Select>

                  <Input
                    type={"text"}
                    name={"price"}
                    placeholder={"Price"}
                    variant={"filled"}
                    value={product.price}
                    onChange={handleChange}
                  />

                  <Button type={"submit"} w={"100%"} bgColor={"#a0caba"}>
                    Edit Product
                  </Button>
                </VStack>
              </FormControl>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
