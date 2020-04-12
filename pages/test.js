import { useAuth } from "use-auth0-hooks";

export default function MyShows() {
  const { isAuthenticated, isLoading, accessToken } = useAuth({
    audience: "https://api/tv-shows",
    scope: "read:shows",
  });

  if (!isAuthenticated) {
    return <div>You must first sign in to access your subscriptions.</div>;
  }

  if (isLoading) {
    return <div>Loading your user information...</div>;
  }

  const { response, loading } = useApi(
    `${process.env.API_BASE_URL}/api/my/shows`,
    accessToken
  );

  if (loading) {
    return (
      <div>
        <h1>Subscriptions for {user.email}</h1>
        <div>Loading your subscriptions ...</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Subscriptions for {user.email}</h1>
      <div>
        You have subscribed to a total of{" "}
        {response && response.shows && response.shows.length} shows...
      </div>
    </div>
  );
}
