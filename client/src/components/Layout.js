import { Wrapper } from './Wrapper'
export const Layout = ({variant, children}) =>{

    return(
        <>
            <Wrapper variant = {variant}>
                {children}
            </Wrapper>
        </>
    )
}