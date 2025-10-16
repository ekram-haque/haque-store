import axios from "axios";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    setLoading(true);
    axios("../apps-data.json")
      .then((data) => setApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading, error };
};

export default useApps;
