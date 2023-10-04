import React from "react";
import { Button, Flex, Img } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Flex
      minW={"100%"}
      minH={"70px "}
      justify={"space-between"}
      align={"center"}
      bgColor={"#a0caba"}
      pos={"sticky"}
      top={"0px"}
      zIndex={"1"}
      p={"0px 50px"}
    >
      {/* 1 */}
      <Flex justify={"center"} align={"center"} w={"6%"}>
        <Link to={"/"}>
          <Img src={logo} alt={"Home"} minW={"100%"} />
        </Link>
      </Flex>

      {/* 2 */}
      <Link to={"/"}>
        <Button
          p={"10px"}
          bgColor={location.pathname === "/" && "#daeff0"}
          border={location.pathname === "/" && "3px double #484848"}
        >
          DASHBOARD
        </Button>
      </Link>

      {/* 3 */}
      <Link to={"/stats"}>
        <Button
          p={"10px"}
          w={"200%"}
          bgColor={location.pathname === "/stats" && "#daeff0"}
          border={location.pathname === "/stats" && "3px double #484848"}
        >
          STATS
        </Button>
      </Link>

      {/* 4 */}
      <Link to={"/addproduct"}>
        <Button
          p={"10px"}
          bgColor={location.pathname === "/addproduct" && "#daeff0"}
          border={location.pathname === "/addproduct" && "3px double #484848"}
        >
          ADD PRODUCT
        </Button>
      </Link>
    </Flex>
  );
};
