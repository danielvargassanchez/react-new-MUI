import { Pagination, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import useNews from "../hooks/useNews";
import News from "./News";
const NewsList = () => {
  const { newsList, totalNews, handlerChangePage, page } = useNews();
  const totalPages = Math.ceil(totalNews / 10);
  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Últimas noticias
      </Typography>

      <Grid container spacing={2}>
        {newsList.map((news) => (
          <News news={news} key={news.url} />
        ))}
      </Grid>

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginY: 5 }}
      >
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handlerChangePage}
          page={page}
        />
      </Stack>
    </>
  );
};

export default NewsList;
