import useSWR from "swr";

export function useFetch<Data = any, Error = any>(url: string) {
  const { data } = useSWR<Data, Error>(url, async (url) => {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  });

  const results = data;
  return results;
}
