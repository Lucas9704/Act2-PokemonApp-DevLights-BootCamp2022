import {Typography} from "@mui/material";

export function ListHeader() {

	return (<>
    <Typography variant="overline" display="block" gutterBottom fontSize="15px" ml="10px">
      👲Welcome pokemon trainer {window.localStorage.getItem("name")}☜(ﾟヮﾟ☜)
    </Typography>
    <Typography variant="overline" display="block" gutterBottom fontSize="15px" ml="10px">
      Email: {window.localStorage.getItem("email")}
    </Typography>
    <Typography variant="overline" display="block" gutterBottom align="center" fontSize="20px" m="0">
    Your Pokemon List
		</Typography>
  </>
	);
}
