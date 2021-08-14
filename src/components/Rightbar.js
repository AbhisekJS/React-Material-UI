import React from 'react'
import { Avatar, Container, makeStyles, ImageList, ImageListItem, Link, Typography, Divider } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import {Data} from './Data'
const useStyles= makeStyles((theme)=>({
    container:{
        position:'sticky',
        top:0,
        paddingTop: '5rem',
        backgroundColor: '#fefefe'
    },
    title:{
        fontSize:16,
        fontWeight:700,
        color: "#555"
    },
    link:{
        marginRight: theme.spacing(2),
        color: '#555',
        fontSize: 16,
    }
}))
const Rightbar = () => {
    const classes= useStyles();
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>Online Friends</Typography>
            <AvatarGroup max={4} style={{marginBottom:20}}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>Gallery</Typography>
            <ImageList rowHeight={100} style={{marginBottom:20}} cols={3}>
            {Data.map((item) => (
                <ImageListItem key={item.id} cols={item.cols || 1}>
                <img src={item.img} alt={item.title.split('')[0]} />
                </ImageListItem>
            ))}
            </ImageList>
            <Typography className={classes.title} gutterBottom>Categories</Typography>
            <Link href="#" className={classes.link} variant="body2">
                Sport
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Adventure
            </Link>
            <Divider flexItem style={{marginBottom:10}}/>
            <Link href="#" className={classes.link} variant="body2">
                Travel
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Technology
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Food
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Entertainment
            </Link>

        </Container>
    )
}

export default Rightbar