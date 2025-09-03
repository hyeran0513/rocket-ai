import { useEffect, useState } from "react";
import useSWR from "swr";
import { ProfileRes } from "@/app/api/dto/profile";
import { getProfile } from "@/app/api/profile";

export const useGetProfile = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const key = ["/profile"] as const;
  const fetcher = async (args: readonly [string]) => {
    const [,] = args;

    return getProfile();
  };

  const { data, error, mutate, isValidating } = useSWR<ProfileRes, Error>(
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
