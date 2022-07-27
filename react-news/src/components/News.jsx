import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const News = ({ news }) => {
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {news.urlToImage && (
          <CardMedia
            component="img"
            alt={`imagen de la noticia ${news.title}`}
            image={news.urlToImage}
            height={"250"}
          />
        )}

        <CardContent>
          <Typography variant="body1" color="error">
            {news.source.name}
          </Typography>

          <Typography variant="h5" component="div">
            {news.title}
          </Typography>

          <Typography variant="body2" component="div">
            {news.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={news.url}
            target="_blank"
            variant="button"
            color="primary"
            width={"100%"}
            textAlign={"center"}
            sx={{ textDecoration: "none" }}
          >
            Leer noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default News;
