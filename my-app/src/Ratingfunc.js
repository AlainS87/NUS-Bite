import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(2);
  const [value3, setValue3] = React.useState(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Taste</Typography>
      <Rating
        name="TasteRating"
        precision={0.5}
        value={value1}
        onChange={(event, newValue) => {
          setValue1(newValue);
        }}
      />
      <Typography component="legend">Environment</Typography>
      <Rating
        name="EnvRating"
        precision={0.5}
        value={value2}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
      />

      <Typography component="legend">Price</Typography>
      <Rating
        name="PriceRating"
        precision={0.5}
        value={value3}
        onChange={(event, newValue) => {
          setValue3(newValue);
        }}
      />
      <Typography component="legend">Overall</Typography>
      <Rating
        name="read-only"
        precision={0.5}
        value={(value2 + value1 + value3) / 3}
        readOnly
      />
    </Box>
  );
}
