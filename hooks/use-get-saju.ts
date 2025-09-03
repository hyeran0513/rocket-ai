import { useEffect, useState } from "react";
import useSWR from "swr";
import { SajuRes } from "@/app/api/dto/saju";
import { getSaju } from "@/app/api/saju";

export const useGetSaju = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const key = ["/saju"] as const;
  const fetcher = async (args: readonly [string]) => {
    const [,] = args;

    return getSaju();
  };

  const { data, error, mutate, isValidating } = useSWR<SajuRes, Error>(
    key,
    fetcher,
    {
      suspense: isClient,
      keepPreviousData: true,
    },
  );

  return {
    data,
    isLoading: !data && !error,
    isError: !!error,
    isFetching: isValidating,
    mutate,
  };
};
