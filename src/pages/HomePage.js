import "./homepage.css";
import Card from "../components/Card";
import { useContext, useEffect, useState } from "react";
import { Kontext } from "./Kontext";
import axios from "axios";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [array, setArray] = useState([]);
  console.log(search);
  function handler() {
    if (search.length > 0) {
      setArray([...array, search]);
      setSearch("");
    } else {
      setSearch("");
    }
  }
  return (
    <div className="container">
      <div className="card">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        {<button onClick={handler}>add</button>}
        {array.map((el) => (
          <div className="down">
            {el}
            <button
              onClick={() => setArray(array.filter((e) => e !== el))}
              className="delete"
            >
              deleter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
