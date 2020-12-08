
import React, { useEffect, useState } from "react"
import { Wrapper } from "../Wrapper"
import axios from "axios"
import { Post } from "./Post/Post";
import { Input, Box } from "@chakra-ui/react"


export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [searchString, setSearchString]= useState("");

    useEffect(async ()=>{
        const response = await axios.get("http://localhost:4000/api/posts");
        setPosts(response.data);
    },[])

    const onChangeInput = (e) =>{
        setSearchString(e.target.value)
    }

   const filteredPosts = posts.filter(post =>{
       return post.title.toLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1
   })
    return (

        <Wrapper variant="regular">
             <Box mt={10} mb={10}>
             <Input onChange={onChangeInput} variant="flushed" placeholder="Search for posts by title" />   
            </Box>
            {
                filteredPosts.map(post => {
                    return (
                     <Post key ={post._id} post={post} />
                 )})
            }
        </Wrapper>
    )
}