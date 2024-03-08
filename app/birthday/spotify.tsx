import SpotifyForm from "./spotifyForm";
import Link from "next/link";

const spotifyLink =
  "https://open.spotify.com/playlist/6XFJjoGtpc5vFYGaZwjUbU?si=57fa0295b35f4bdc&pt=06f7e85cabd351ebca316547ba022c12";
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

const login = async () => {
  const response = await fetch("http://localhost:3000/api/login", {
    method: "GET",
  });

  return response.json();
};

export default function Spotify() {
  // const response = await getToken();
  // const artistResponse = await searchArtist(response, "Kanye West", "Runway");

  // const loginResponse = await login();
  // console.log("loginResponse", loginResponse);

  // const addTrackResponse = await addTrackToPlaylist(
  //   response,
  //   playlistId,
  //   "3DK6m7It6Pw857FcQftMds",
  // );
  // console.log(artistResponse.tracks);
  // console.log(response);
  // console.log(addTrackResponse);

  // const response = getSpotifyToken();

  // if (!code) {
  //   redirectToAuthCodeFlow(clientId);
  // } else {
  //   const accessToken = await getAccessToken(clientId, code);
  //   const profile = await fetchProfile(accessToken);
  //   populateUI(profile);
  // }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col items-center">
        <p>
          Whether you&apos;re joining us or not, share your favorite song for
          the playlist! If clicking the picture doesn&apos;t let you add songs,
          then click ---{">"}
          <Link className="font-bold" href={spotifyLink}>
            Add songs here !
          </Link>
        </p>
      </div>

      <div className="relative">
        <iframe
          className="rounded-xl"
          src="https://open.spotify.com/embed/playlist/6XFJjoGtpc5vFYGaZwjUbU?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          // allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href={spotifyLink}
          className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer"
        />
      </div>
      <SpotifyForm />
    </div>
  );
}

// utils/generateRandomString.js
