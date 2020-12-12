import {Text, Box, Button} from "@chakra-ui/react"
import axios from 'axios';
import { Form, Formik } from 'formik';
import React from "react";
import { Wrapper } from "./Wrapper";
import {InputField} from './InputField';
import {toErrorMap} from '../utils/toErrorMap'


export const DataForm = () => {

    return (
        <Wrapper variant="regular">
            <Text mt={4} mb={4} fontSize="2xl" fontWeight="semibold" lineHeight="short">
                Post-Box
             </Text>

            <Formik
                initialValues={{ title: "", message: "" }}
                onSubmit={async (values, actions) => {
                    const result = await axios.post("http://localhost:4000/api/posts/", values)
                    console.log(result)
                    if(result.data.errors){
                        actions.setErrors(toErrorMap(result.data.errors))
                    }else{
                        window.location.reload();
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

