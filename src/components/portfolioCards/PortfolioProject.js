/**
 * Created by Garo on 2019-06-13.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 320,
    },
});

export default function PortfolioProject() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    // image={require("./../../images/webMoti.jpeg") }
                    image={require('../../images/mainimg.jpg')}

                    title="Portfolio"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Portfolio
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        My portfolio written in ReactJS and Material-UI and Parallax
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a target="_blank" href="https://github.com/gnazarian/gnazarian.github.io"> Learn More </a>
                </Button>
            </CardActions>
        </Card>
    );
}