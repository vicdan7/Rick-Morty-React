import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [state, setstate] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setstate(res.data);
        setHasError(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
        setIsLoading(false);
      });
  }, [url]);

  return [state, hasError, isLoading];
};

export default useFetch;
