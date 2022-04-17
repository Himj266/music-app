//hooks
import useSWR from "swr";

import { fetcher } from "lib/fetcher";

export const useUserData = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    loading: !data && !error,
    error,
  };
};
