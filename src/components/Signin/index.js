import React from 'react'
import {
    Container,
    Icon,
    FormH1,
    FormButton, 
    FormContent, 
    FormInput, 
    FormLabel, 
    FormWrap ,
    Form,
    Text
} from './SigninElements'
/* 소셜 로그인으로 처리 naver 로그인 
    로그인 페이지는 없어도 될듯 일단은
*/

const SignIn = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">Tookdak</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn