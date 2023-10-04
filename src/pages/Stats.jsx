import React, { useEffect, useReducer, useState } from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { CategoryChart } from "../components/CategoryChart";
import { GenderChart } from "../components/GenderChart";
import axios from "axios";
import { ProductDataCart } from "../components/ProductDataCart";

export const Stats = () => {
  const [products, setProducts] = useState([]);
  const [gender, setGender] = useState({});
  const [category, setCategory] = useState({});

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `https://admin-dashboard-json-server-sabiransari1.onrender.com/products`
      );
      setProducts(res.data);
    } catch (error) {
      throw new Error({ error: error.message });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    let genderX = products.reduce(
      (acc, item) => {
        item.gender === "male" ? (acc.male += 1) : (acc.female += 1);

        return acc;
      },
      { male: 0, female: 0 }
    );

    setGender(genderX);

    let categoryX = products.reduce(
      (acc, item) => {
        if (item.category === "suit") {
          acc.suit += 1;
        } else if (item.category === "shirt") {
          acc.shirt += 1;
        } else if (item.category === "jeans") {
          acc.jeans += 1;
        } else if (item.category === "trouser") {
          acc.trouser += 1;
        } else if (item.category === "kurti") {
          acc.kurti += 1;
        } else if (item.category === "saree") {
          acc.saree += 1;
        } else if (item.category === "jacket") {
          acc.jacket += 1;
        } else if (item.category === "western") {
          acc.western += 1;
        }

        return acc;
      },
      {
        suit: 0,
        shirt: 0,
        jeans: 0,
        trouser: 0,
        kurti: 0,
        saree: 0,
        jacket: 0,
        western: 0,
      }
    );

    setCategory(categoryX);
  }, [products]);

  let categoryArr = Object.keys(category)?.map((key) => ({
    [key]: category[key],
  }));

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Box p={"50px"}>
        {/* 2.1 */}
        <Grid templateColumns={"repeat(4,1fr)"} gap={"1rem"}>
          {categoryArr?.map((item, index) => (
            <ProductDataCart key={index} item={item} />
          ))}
        </Grid>

        {/* 2.2 */}
        <Flex justify={"space-evenly"} mt={"25px"}>
          {/* 2.2.1 */}
          <Box w={"50%"}>
            <GenderChart gender={gender} />
          </Box>

          {/* 2.2.2 */}
          <Box w={"50%"}>
            <CategoryChart category={category} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
