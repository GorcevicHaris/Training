import "./homepage.css";
import Card from "../components/Card";
import { useContext, useEffect, useState } from "react";
import { Kontext } from "./Kontext";
import axios from "axios";

export default function HomePage() {
  // const { data } = useContext(Kontext);
  // const { setData } = useContext(Kontext);
  const { search, data, setData } = useContext(Kontext);

  console.log(data);
  function getData() {
    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((response) => setData(response.data.products));
  }
  useEffect(() => {
    getData();
  }, [search]);
  return (
    <div className="container">
      {data && data.map((el) => <Card product={el} />)}
    </div>
  );
}
