//libs
import prisma from "lib/prisma";

//components
import { GradientLayout } from "components/Layout";
import { Artists } from "components/artists";

//hooks
import { useUserData } from "hooks/useUserData";

//types
import { Artist } from "types/entities";

interface Props {
  artists: Artist[];
}

const Home = ({ artists }: Props): JSX.Element | null => {
  const { user, loading } = useUserData();

  if (loading) return null;

  return (
    <GradientLayout
      color="red"
      subtitle="profile"
      roundedImage
      description={`${user.playlistCount} Playlists`}
      title={`${user.firstName} ${user.lastName}`}
    >
      <Artists artists={artists} />
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return { props: { artists } };
};

export default Home;
