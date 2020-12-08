 
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';



export const InputField = (
    {
        label,
        size:_,
        textarea,
        ...props
    }
) => {
    //console.log({title})
    let InputOrTextarea = Input;
    if(textarea){
        InputOrTextarea = Textarea
    }
    const [field, {error}] = useField(props);
    return(
       
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <InputOrTextarea  {...field} {...props} id={field.name} placeholder={props.placeholder} />
    {error ?  <FormErrorMessage>{error}</FormErrorMessage>: null}
        </FormControl>
    );
}