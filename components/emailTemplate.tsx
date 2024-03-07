interface EmailTemplateProps {
  artist: string;
  track: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  track,
  artist,
}) => (
  <div>
    <h1>Hi Devon</h1>
    <p>Artist: {artist}</p>
    <p>Track: {track}</p>
  </div>
);
