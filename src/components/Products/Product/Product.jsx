import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import useStyle from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      ></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
          <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body3" color="textSecondary" />
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton area-aria-label="Add to Cart" onClick={()=> onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
