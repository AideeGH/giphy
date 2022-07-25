import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=mKCxhjZUsPOkXIQqr34C4T9lAtAOE49d&limit=25&offset=0&lang=en";

export default function useAxios(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function init() {
      if (url.length === 0) {
        return;
      }
      setData(null);
      setError(null);
      try {
        const response = await axios.get(baseUrl + url);
        console.log(response.data.data[0]);
        setData(
          response.data.data.map((val) => ({
            gifUrl: val.images.fixed_height.url,
            id: val.id,
          }))
        );
      } catch (e) {
        console.log(e);
        setError(e);
      }
    }
    init();
  }, [url]);

  return { data, error };
}
