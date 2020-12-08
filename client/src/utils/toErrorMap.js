export const toErrorMap = (errors) =>{
    const errorMap = {};
    errors.forEach(element => {
        errorMap[element.param] = element.msg
    });
    return errorMap;
}