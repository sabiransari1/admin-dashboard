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
      pos={"fixed"}
      zIndex={"1"}
      p={"0px 50px"}
    >
      {/* 1 */}
      <Flex
        justify={"center"}
        align={"center"}
        display={{
          base: "none",
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        <Link to={"/"}>
          <Img src={logo} alt={"Home"} minW={"100%"} />
        </Link>
      </Flex>

      {/* 2 */}
      <Link to={"/"}>
        <Button
          p={{
            base: "20px",
            sm: "10px",
            md: "10px",
            lg: "10px",
            xl: "10px",
            "2xl": "10px",
          }}
          bgColor={location.pathname === "/" && "#daeff0"}
          border={location.pathname === "/" && "3px double #484848"}
          size={{
            base: "xs",
            sm: "md",
            md: "md",
            lg: "md",
            xl: "md",
            "2xl": "lg",
          }}
        >
          DASHBOARD
        </Button>
      </Link>

      {/* 3 */}
      <Link to={"/stats"}>
        <Button
          p={{
            base: "20px",
            sm: "10px",
            md: "10px",
            lg: "10px",
            xl: "10px",
            "2xl": "10px",
          }}
          bgColor={location.pathname === "/stats" && "#daeff0"}
          border={location.pathname === "/stats" && "3px double #484848"}
          size={{
            base: "xs",
            sm: "md",
            md: "md",
            lg: "md",
            xl: "md",
            "2xl": "lg",
          }}
        >
          STATS
        </Button>
      </Link>

      {/* 4 */}
      <Link to={"/addproduct"}>
        <Button
          p={{
            base: "20px",
            sm: "10px",
            md: "10px",
            lg: "10px",
            xl: "10px",
            "2xl": "10px",
          }}
          bgColor={location.pathname === "/addproduct" && "#daeff0"}
          border={location.pathname === "/addproduct" && "3px double #484848"}
          size={{
            base: "xs",
            sm: "md",
            md: "md",
            lg: "md",
            xl: "md",
            "2xl": "lg",
          }}
        >
          ADD PRODUCT
        </Button>
      </Link>
    </Flex>
  );
};
