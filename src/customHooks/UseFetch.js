import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPatients = async () => {
      const response = await fetch(url);

      // check for error in the response object
      if (!response.ok) {
        setError("Failed to access requested resource");
        // console.log("Failed to access requested resource");
      }
      const data = await response.json();
      setData(data);
      console.log(data);
      setLoading(false);
    };
    getPatients();
  }, []);
  return { data, loading, error };
};

export default useFetch;
