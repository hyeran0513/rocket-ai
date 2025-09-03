import { useEffect, useState } from "react";
import useSWR from "swr";
import { DialogsRes } from "@/app/api/dto/dialogs";
import { getDialogs } from "@/app/api/dialogs";

export const useGetDialogs = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const key = ["/dialogs"] as const;
  const fetcher = async (args: readonly [string]) => {
    const [,] = args;

    return getDialogs();
  };

  const { data, error, mutate, isValidating } = useSWR<DialogsRes, Error>(
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
