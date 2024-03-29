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

export default function ThieveryCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    // image={require("./../../images/webMoti.jpeg") }
                    title="Thievery"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Thievery
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Thievery is a vr first person stealth game with the objective of collecting
                        loot without getting caught by the guards
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}