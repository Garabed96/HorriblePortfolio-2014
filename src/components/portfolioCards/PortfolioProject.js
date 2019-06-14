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
        height: 300,
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
                    title="Portfolio"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Portfolio
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This is my portfolio written in ReactJS and Material-UI
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}