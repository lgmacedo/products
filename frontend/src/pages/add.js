import styled from "styled-components";
import Link from "next/link";
import api from "./api/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    color: "",
    price: "",
    categoryId: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [categories, setCategories] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const promise = api.get("/categories");
    promise.then((response) => {
      setCategories(response.data);
    });
    promise.catch(() => {
      console.log("An error occurred.");
      router.push("/");
    });
  }, []);

  function newProduct(e) {
    e.preventDefault();

    const product = {
      ...form,
      price: parseInt(form.price),
      categoryId: parseInt(form.categoryId),
    };

    const promise = api.post("/products", product);
    promise.then(() => {
      router.push("/");
    });
    promise.catch((e) => {
      alert(e.response.data.message[0]);
    });
  }

  return (
    <AddProductContainer>
      <TitleAndButton>
        <h1>Add product</h1>
        <Link href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/8208/8208192.png" />
        </Link>
      </TitleAndButton>
      <form onSubmit={newProduct}>
        <input
          required
          placeholder="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          placeholder="Description"
          type="text"
          name="description"
          value={form.description}
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          placeholder="Color"
          type="text"
          name="color"
          value={form.color}
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          placeholder="Price (cents)"
          type="text"
          name="price"
          value={form.price}
          onChange={(e) => handleChange(e)}
        />
        <select
          required
          name="categoryId"
          value={form.categoryId}
          onChange={(e) => handleChange(e)}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories
            ? categories.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })
            : ""}
        </select>
        <button type="submit">Add</button>
      </form>
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
  form {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
    row-gap: 10px;
    input,
    input::placeholder {
      font-size: 18px; /* Adjust the font size as needed */
      padding-left: 5px;
    }
    input,
    select {
      min-height: 50px;
    }
    button {
      height: 40px;
      background-color: white;
      border: 1px solid;
      font-size: 18px;
      color: black;
      background-color: #8dd1ff;
      cursor: pointer;
    }
  }
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
