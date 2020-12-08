import React from "react"
import { IconButton, Flex, Link, Box } from "@chakra-ui/react"
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import NextLink from 'next/link';
import axios from "axios"
export const EditDeleteButtons = ({id}) => {
    const router = useRouter();
    return (
        <Flex justifyContent="space-between" mt={4}>
            <NextLink href="/posts/edit/[id]" as={`/posts/edit/${id}`}>
                <IconButton as={Link} icon={<EditIcon />} aria-label="Edit Post" />
            </NextLink>
            <IconButton
                colorScheme="red"
                aria-label="Delete Post"
                icon={<DeleteIcon />}
                onClick={
                    async () =>{
                        await axios.delete(`http://localhost:4000/api/posts/${id}`)
                        router.push("/")
                    }
                }
            />

        </Flex>
    )
}