//hooks
import useSWR from "swr";

import { fetcher } from "lib/fetcher";

export const usePlaylists = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: data ?? [],
    loading: !data && !error,
    error,
  };
};
