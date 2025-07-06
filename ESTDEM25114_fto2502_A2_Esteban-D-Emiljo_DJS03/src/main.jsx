import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { DateUtils } from "../utils/DateUtils";
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

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid" id="podcastGrid">
      {data.length === 0 && <div>No data found.</div>}
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.seasons}</p>
          <p>{item.genres}</p>
          <p>{item.updated ? DateUtils.format(item.updated) : ""}</p>
        </div>
      ))}
    </div>
  );
};

createRoot(document.getElementById("app-root")).render(
  <StrictMode>
    <DataFetcher />
  </StrictMode>
);
