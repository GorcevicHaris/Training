import "./homepage.css";
import Card from "../components/Card";
import { useContext, useEffect, useState } from "react";
import { Kontext } from "./Kontext";
import axios from "axios";

export default function HomePage() {
  // const { data } = useContext(Kontext);
  // const { setData } = useContext(Kontext);
  const { search, data, setData } = useContext(Kontext);
}
