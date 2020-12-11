import React from "react"
import { Wrapper } from "../../components/Wrapper"
import { Box, Heading, Stack, Center, Text } from '@chakra-ui/react';
import { EditDeleteButtons } from "../../components/EditDeleteButtons";

const PostDetails = ({ post }) => {  
    return (
        <Wrapper variant="regular">
            <Stack mb={10} spacing={8}>
                <Box p={8} borderWidth="1px" shadow="md">
                    <Heading mb={4}> {post.title}</Heading>
                    <Box>
                        {post.message}
                    </Box>
                    <EditDeleteButtons id={post._id}/>
                </Box>
            </Stack>
        </Wrapper>
    )
}

PostDetails.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:4000/api/posts/${ctx.query.id}`)
    const json = await res.json();
    return { post: json }
}

export default PostDetails;