const clientId = process.env.CLIENT_ID || "";
const clientSecret = process.env.CLIENT_SECRET || "";
const code = undefined;
const playlistId = "6XFJjoGtpc5vFYGaZwjUbU";

const getToken = async () => {
  const authString = clientId + ":" + clientSecret;
  const authBytes = new TextEncoder().encode(authString);
  const authBase64 = btoa(String.fromCharCode(...new Uint8Array(authBytes)));

  const url = "https://accounts.spotify.com/api/token";
  const headers = {
    Authorization: "Basic " + authBase64,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const data = new URLSearchParams({ grant_type: "client_credentials" });

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: data,
  });

  const resData = await response.json();
  const token = resData.access_token;

  return token;
};

const getAuthHeader = (token: string) => {
  return {
    Authorization: "Bearer " + token,
  };
};

const searchArtist = async (token: string, artist: string, track: string) => {
  const url = `https://api.spotify.com/v1/search?`;
  const headers = getAuthHeader(token);
  const query = new URLSearchParams({
    q: artist,
    type: "artist,track",
    limit: "1",
    track,
  });

  const queryUrl = url + query.toString();

  const response = await fetch(queryUrl, {
    method: "GET",
    headers: headers,
  });

  const resData = await response.json();
  return resData;
};

const addTrackToPlaylist = async (
  token: string,
  playlistId: string,
  trackId: string,
) => {
  const url = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks";

  const headers = getAuthHeader(token);

  const data = {
    uris: [trackId],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  return response.json();
};

export default async function Spotify() {
  const response = await getToken();
  const artistResponse = await searchArtist(response, "Kanye West", "Runway");
  const addTrackResponse = await addTrackToPlaylist(
    response,
    playlistId,
    "3DK6m7It6Pw857FcQftMds",
  );
  console.log(artistResponse.tracks);
  console.log(response);
  console.log(addTrackResponse);

  // const response = getSpotifyToken();

  // if (!code) {
  //   redirectToAuthCodeFlow(clientId);
  // } else {
  //   const accessToken = await getAccessToken(clientId, code);
  //   const profile = await fetchProfile(accessToken);
  //   populateUI(profile);
  // }

  return (
    <div>
      <div>spotify</div>
    </div>
  );
}
