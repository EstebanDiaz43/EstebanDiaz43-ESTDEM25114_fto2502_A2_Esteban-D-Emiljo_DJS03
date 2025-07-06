import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/")
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData); // <-- Use the response directly
        setLoading(false);
      });
  }, []);
};

createRoot(document.getElementById("app-root")).render(
  <StrictMode>
    <DataFetcher />
  </StrictMode>
);
