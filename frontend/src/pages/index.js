import styled from "styled-components";
import Link from "next/link";
import api from "./api/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = api.get("/products");
    promise.then((response) => {
      setProducts(response.data);
    });
    promise.catch(() => {
      console.log("Deu não!");
    });
  }, []);

  function formatCurrency(input) {
    const number = Number(input) / 100;
    const formatted = number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatted;
  }

  return (
    <HomeContainer>
      <TitleAndButton>
        <h1>Products</h1>
        <Link href="/add">
          <img src="https://cdn-icons-png.flaticon.com/512/8207/8207880.png" />
        </Link>
      </TitleAndButton>
      <Table>
        {products.length ? (
          <Rows>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Color</th>
              <th>Product Type</th>
              <th>Price</th>
              <th>Promotional price</th>
            </tr>
            {products.map((p) => (
              <tr>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.color}</td>
                <td>{p.type}</td>
                <td>{formatCurrency(p.price)}</td>
                <td>{formatCurrency(p.promotionalPrice)}</td>
              </tr>
            ))}
          </Rows>
        ) : (
          "Register a new product with the 'add' button"
        )}
      </Table>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
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

const Table = styled.div`
  margin: auto;
  max-width: 95%;
  font-size: 20px;
`;

const Rows = styled.table`
  max-width: 95%;
  border: 1px solid;
  font-size: 18px;
  th,
  td {
    text-align: left;
    border-bottom: 1px solid;
    border-right: 1px solid;
    padding: 10px 8px;
  }
  th {
    font-weight: 700;
  }
`;
