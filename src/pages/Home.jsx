import React, { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../redux/products/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const { products, dbLength } = useSelector((store) => {
    return {
      products: store.productsReducer.products,
      dbLength: store.productsReducer.dbLength,
    };
  });

  // let paramObj = {
  //   params: {
  //     _limit: limit,
  //     _page: page,
  //     q: query && query,
  //     gender: gender,
  //     category: category,
  //     _sort: order && "price",
  //     _order: order,
  //   },
  // };

  let paramObj = {
    params: {
      _limit: limit,
      _page: page,
    },
  };

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [page, query, gender, category, order]);

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
        <Button size={"lg"} border={"1px"} p={"10px"}>
          <Link to={"/addproduct"}>Add Product</Link>
        </Button>
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
          <option value={"suit"}>Suits</option>
          <option value={"shirt"}>Shirts</option>
          <option value={"jeans"}>Jeans</option>
          <option value={"trouser"}>Trousers</option>

          {/* female */}
          <option value={"kurti"}>Kurti</option>
          <option value={"saree"}>Saree</option>
          <option value={"jacket"}>Jacket</option>
          <option value={"western"}>Western</option>
        </Select>

        <Select onChange={(e) => setOrder(e.target.value)} cursor={"pointer"}>
          <option value={""}>Sort By Price</option>
          <option value={"asc"}>Ascending</option>
          <option value={"desc"}>Descending</option>
        </Select>
      </Flex>

      {/* 5 */}
      <ProductList />

      {/* 6 */}

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
          <Button
            onClick={() => setPage((prev) => prev + 1)}
            isDisabled={page === Math.ceil(dbLength / limit)}
          >
            Next
          </Button>
        </Flex>
      )}
    </Box>
  );
};
