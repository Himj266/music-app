//hooks
import useSWR from "swr";

import { fetcher } from "lib/fetcher";

export const usePlaylists = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  console.log({ data });

  return {
    playlists: data ?? [],
    loading: !data && !error,
    error,
  };
};
