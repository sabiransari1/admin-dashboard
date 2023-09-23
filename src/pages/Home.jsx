import React, { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../redux/products/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Center,
  Flex,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();

  let paramObj = {
    params: {
      q: query && query,
      gender: gender,
      category: category,
      _sort: order && "price",
      _order: order,
    },
  };

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [query, gender, category, order]);

  return (
    <Box>
      {/* 1 */}
      <Box p={"5px"} mt={"20px"}>
        <Center>
          <Heading>ADMIN DASHBOARD</Heading>
        </Center>
      </Box>

      {/* 2 */}
      <Flex w={"100%"} justify={"space-evenly"} mt={"20px"}>
        <Button border={"1px"} p={"10px"} w={"30%"}>
          DASHBOARD
        </Button>
        <Button border={"1px"} p={"10px"} w={"30%"}>
          STATS
        </Button>
      </Flex>

      {/* 3 */}
      <Center>
        <Link to={"/addproduct"}>
          <Button size={"lg"}>Add Product</Button>
        </Link>
      </Center>
      {/* 4 */}
      <Flex mt={"20px"} gap={"5px"} p={"10px"}>
        <Box w={"100%"}>
          <Input
            type={"text"}
            placeholder={"Search for product..."}
            variant={"filled"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>

        <Select onChange={(e) => setGender(e.target.value)} cursor={"pointer"}>
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

        <Select onChange={(e) => setOrder(e.target.value)} cursor={"pointer"}>
          <option value={""}>Sort By Price</option>
          <option value={"asc"}>Ascending</option>
          <option value={"desc"}>Descending</option>
        </Select>
      </Flex>

      {/* 5 */}
      <ProductList />
    </Box>
  );
};
