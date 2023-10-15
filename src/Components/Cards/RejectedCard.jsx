import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function RejectedCard({ dislikedCandidates }) {
  return (
    <>
      {dislikedCandidates.map((candidate, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h6">{candidate.name}</Typography>
            <img
              src={candidate.image}
              alt={candidate.name}
              style={{ maxWidth: "100%" }}
            />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
