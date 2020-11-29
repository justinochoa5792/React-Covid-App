import React, { useState, useEffect } from "react";
import Axios from "axios";

import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Chart/Chart.jsx";
import coronaImg from "./images/image.png";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await Axios.get("https://covid19.mathdro.id/api");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <img src={coronaImg} alt={"corona"} />
      <Cards data={data} />
      <Charts />
    </div>
  );
};

export default App;
