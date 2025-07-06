import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { DateUtils } from "../utils/DateUtils";
import "./styles.css";

/**
 * Fetches podcast data from the API and displays it in a grid.
 * @component
 * @returns {JSX.Element} The rendered podcast grid.
 */
const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Fetch podcast data from the API on component mount.
   * @function
   */
  useEffect(() => {
    fetch("https://podcast-api.netlify.app/")
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader"></div>;

  return (
    <div className="grid" id="podcastGrid">
      {data.length === 0 && <div>No data found.</div>}
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.seasons} seasons</p>
          <p>{item.genres}</p>
          <p>{item.updated ? DateUtils.format(item.updated) : ""}</p>
        </div>
      ))}
    </div>
  );
};

/**
 * Mounts the React application to the DOM.
 */
createRoot(document.getElementById("app-root")).render(
  <StrictMode>
    <DataFetcher />
  </StrictMode>
);
