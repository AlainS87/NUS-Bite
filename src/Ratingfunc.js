import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { supabase } from "./component/supabaseData";

export default function BasicRating() {
  const [price, setPrice] = React.useState(2);
  const [taste, setTaste] = React.useState(2);
  const [environment, setEnvironment] = React.useState(2);
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
        value={taste}
        onChange={(event, newValue) => {
          setTaste(newValue);
        }}
      />
      <Typography component="legend">Environment</Typography>
      <Rating
        name="EnvRating"
        precision={0.5}
        value={environment}
        onChange={(event, newValue) => {
          setEnvironment(newValue);
        }}
      />

      <Typography component="legend">Price</Typography>
      <Rating
        name="PriceRating"
        precision={0.5}
        value={price}
        onChange={(event, newValue) => {
          setPrice(newValue);
        }}
      />
      <Typography component="legend">Overall</Typography>
      <Rating
        name="read-only"
        precision={0.5}
        value={(price + taste + environment) / 3}
        readOnly
      />
    </Box>
  );
}
