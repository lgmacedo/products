import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    color: "",
    price: "",
    categoryId: "",
  });

  return (
    <AddProductContainer>
      <TitleAndButton>
        <h1>Add product</h1>
        <Link href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/8208/8208192.png" />
        </Link>
      </TitleAndButton>
    </AddProductContainer>
  );
}

const AddProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-top: 50px;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  min-height: 200px;
  background-color: white;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  padding-bottom: 50px;
`;

const TitleAndButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  height: 80px;
  h1 {
    font-size: 30px;
  }
  img {
    width: 50px;
  }
`;
