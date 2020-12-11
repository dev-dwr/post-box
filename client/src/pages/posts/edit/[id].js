import React from "react";
import { Wrapper } from "../../../components/Wrapper";
import { Text, Box, Button } from "@chakra-ui/react"
import { Form, Formik } from 'formik';
import { InputField } from '../../../components/InputField';
import axios from "axios"
import { toErrorMap } from "../../../utils/toErrorMap"
import { useRouter } from 'next/router'

const EditPost = ({ post }) => {
    const router = useRouter();

    return (
        <Wrapper variant="regular">
            <Text mt={4} mb={4} fontSize="2xl" fontWeight="semibold" lineHeight="short">
                Edit Post
             </Text>
            <Formik
                initialValues={{ title: post.title, message: post.message }}
                onSubmit={async (values, actions) => {
                    const result = await axios.put(`http://localhost:4000/api/posts/edit/${post._id}`, values);
                    if (result.data.errors) {
                        actions.setErrors(toErrorMap(result.data.errors))
                    } else {
                        router.push("/");
                    }

                }}

            >
                {({ isSubmitting }) => (
                    <Form>
                        <Box mt={4}>

                            <InputField name="title" placeholder="title" label="Title" />

                        </Box>
                        <Box mt={4}>
                            <InputField textarea name="message" placeholder="message" label="Message" />
                        </Box>
                        <Button
                            mt={4}
                            colorScheme="teal"
                            isLoading={isSubmitting}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

EditPost.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:4000/api/posts/${ctx.query.id}`);
    const json = await res.json();
    return { post: json }
}


export default EditPost;