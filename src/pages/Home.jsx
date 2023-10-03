import React, { useEffect, useState } from "react";
import { ProductList } from "../components/ProductList";
import { getProducts } from "../redux/products/action";
import { useDispatch } from "react-redux";
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
import { Navbar } from "../components/Navbar";

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

  let paramObj = {
    params: {
      _limit: limit,
      _page: page,
      q: query && query,
      gender: gender || undefined,
      category: category || undefined,
      _sort: order && "price",
      _order: order,
    },
  };

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [page, query, gender, category, order]);

  useEffect(() => {
    if (products.length === 0 && page > 1) {
      setPage(1);
    }
  }, [products]);

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Box mt={"20px"}>
        <Center>
          <Heading bgGradient="linear(to-r, #a0caba,  #567eb9)" bgClip="text">
            ADMIN DASHBOARD
          </Heading>
        </Center>
      </Box>

      {/* 3 */}
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

      {/* 4 */}
      <ProductList />

      {/* 5 */}
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
