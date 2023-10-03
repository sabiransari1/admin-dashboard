import React, { useEffect, useState } from "react";
import { addProduct, resetProductInitialstate } from "../redux/products/action";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Navbar } from "../components/Navbar";
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

export const AddProduct = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, errMessage, isAdd } = useSelector(
    (store) => ({
      isLoading: store.productsReducer.isLoading,
      isError: store.productsReducer.isError,
      errMessage: store.productsReducer.errMessage,
      isAdd: store.productsReducer.isAdd,
    }),
    shallowEqual
  );
  const toast = useToast();

  const handleProduct = (e) => {
    e.preventDefault();

    let newProduct = {
      img,
      name,
      description,
      gender,
      category,
      price,
    };

    dispatch(addProduct(newProduct));
  };

  useEffect(() => {
    {
      isLoading
        ? toast({
            title: `Adding New Product`,
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
        : isAdd
        ? toast({
            title: `Product Added Successfully`,
            status: "success",
            isClosable: true,
            position: "top",
            duration: "1000",
          })
        : "";
    }
  }, [isLoading, isError, isAdd]);

  useEffect(() => {
    isAdd && dispatch(resetProductInitialstate);
  }, [isAdd]);

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
            <form onSubmit={handleProduct}>
              <FormControl>
                <VStack spacing={"1rem"}>
                  <Input
                    type={"text"}
                    placeholder={"Image"}
                    variant={"filled"}
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                  />

                  <Input
                    type={"text"}
                    placeholder={"Name"}
                    variant={"filled"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <Input
                    type={"text"}
                    placeholder={"Description"}
                    variant={"filled"}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <Select
                    onChange={(e) => setGender(e.target.value)}
                    cursor={"pointer"}
                  >
                    <option value={""}>Filter By Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                  </Select>

                  <Select
                    onChange={(e) => setCategory(e.target.value)}
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
                    placeholder={"Price"}
                    variant={"filled"}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  <Button type={"submit"} w={"100%"} bgColor={"#a0caba"}>
                    Add Product
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
