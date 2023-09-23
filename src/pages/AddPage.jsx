import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { addProduct } from "../redux/products/action";
import { useDispatch } from "react-redux";

// img,
// name,
// description,
// gender,
// category,
// price,

export const AddPage = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleProduct = () => {
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

  return (
    <Box>
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

      <Select onChange={(e) => setGender(e.target.value)} cursor={"pointer"}>
        <option value={""}>Filter By Gender</option>
        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
      </Select>

      <Select onChange={(e) => setCategory(e.target.value)} cursor={"pointer"}>
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

      <Input
        type={"submit"}
        value={"Add Product"}
        onClick={() => handleProduct()}
      />
    </Box>
  );
};
