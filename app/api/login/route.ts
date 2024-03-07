import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function generateRandomString(length: number) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export async function GET(req: NextRequest, res: NextResponse) {
  const client_id = process.env.SPOTIFY_CLIENT_ID || ""; // Your client id
  const redirect_uri = "http://localhost:3000/callback"; // Update with your redirect URI
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  // // Set a cookie to store the state
  // res.setHeader(
  //   "Set-Cookie",
  //   serialize("spotify_auth_state", state, { path: "/" }),
  // );

  const queryParams = new URLSearchParams({
    response_type: "code",
    client_id,
    scope,
    redirect_uri,
    state,
  });

  const loginUrl = `https://accounts.spotify.com/authorize?${queryParams.toString()}`;

  // redirect(loginUrl);
  // res.redirect(loginUrl);

  return NextResponse.json({ message: "Hello Everyone!" });
}
