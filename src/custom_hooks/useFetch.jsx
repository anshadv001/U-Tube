import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
