import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';

export const Post = ({post}) => {
    
    const router = useRouter();
    function goToPostDetailsPage(){
        router.push(`/posts/${post._id}`)
    }
    return (
        <Stack mb={4} spacing={8}>
            <Box onClick={goToPostDetailsPage} style={{pointer:"cursor"}} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title.slice(0,20)}</Heading>
                <Text>{post.message.slice(0,50)}</Text>
            </Box>
        </Stack>
    )
}