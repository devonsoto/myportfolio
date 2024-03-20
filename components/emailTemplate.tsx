interface EmailTemplateProps {
  artist?: string;
  track?: string;
  name?: string;
  email?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  track,
  artist,
  name,
  email,
  message,
}) => (
  <div>
    <h1>Hi Devon</h1>
    <p>Artist: {artist}</p>
    <p>Track: {track}</p>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
