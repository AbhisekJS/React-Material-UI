import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'
import Post from './Post'
import {Data} from './Data'
const useStyles= makeStyles(()=>({
    container:{
        paddingTop: '5rem',
        backgroundColor: '#fefefe'
    }
}))
const Feed = () => {
    const classes= useStyles();
    
    return (
        <Container className={classes.container}>
        {Data.map((items)=>{
            const{id,title,img}=items
            return <Post key={id} title={title} img={img}/>
        })}
        </Container>
  );
};

export default Feed;


