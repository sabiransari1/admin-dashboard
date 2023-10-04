import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex
      minW={"100%"}
      minH={"70px "}
      justify={"space-evenly"}
      align={"center"}
      bgColor={"#a0caba"}
      pos={"sticky"}
      top={"0px"}
      zIndex={"1"}
    >
      {/* 1 */}
      <Button p={"10px"} w={"20%"}>
        <Link to={"/"}>DASHBOARD</Link>
      </Button>

      {/* 2 */}
      <Button p={"10px"} w={"20%"}>
        <Link to={"/stats"}>STATS</Link>
      </Button>

      {/* 3 */}
      <Button p={"10px"} w={"20%"}>
        <Link to={"/addproduct"}>ADD PRODUCT</Link>
      </Button>
    </Flex>
  );
};
