import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./PokemonsTable.css";

export default function PaginationRounded() {
  return (
    <Stack>
      <Pagination count={10} variant="outlined" shape="rounded"/>
    </Stack>
  );
}
