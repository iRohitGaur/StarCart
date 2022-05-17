import { useState } from "react";
import axios from "axios";
import { useToast } from "../../context";

axios.defaults.baseURL = "";

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { sendToast } = useToast();

  const operation = async (params) => {
    try {
      setLoading(true);
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        sendToast(error.response.data.errors[0], true);
      }
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, operation };
};
