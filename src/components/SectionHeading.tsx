import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Box className="section-heading">
      <Typography className="eyebrow">{eyebrow}</Typography>
      <Typography component="h2" variant="h2" className="section-title">
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" className="section-description">
          {description}
        </Typography>
      )}
    </Box>
  );
}
