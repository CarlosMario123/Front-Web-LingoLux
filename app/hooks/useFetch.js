import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, token) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setState({
        data: response.data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url, token]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
