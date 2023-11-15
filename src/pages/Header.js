import React, { useContext } from "react";
import { Kontext } from "./Kontext";
import "./header.css";
export default function Header() {
  const { search } = useContext(Kontext);
  const { setSearch, data, setData } = useContext(Kontext);
  return <div>Header</div>;
}
