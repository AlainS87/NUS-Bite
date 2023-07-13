import {VisitorContent} from "./visitorContent";
import Box from "@mui/material/Box";

export default function StallList({stalls = []}) {
  return (
    <Box display={'flex'} flexWrap={'wrap'}>
      {stalls.map(stall => {
        return (
          <Box key={stall.id} margin={'10px'}>
            <VisitorContent stalls={stall}/>
          </Box>
        )
      })}
    </Box>
  )
}