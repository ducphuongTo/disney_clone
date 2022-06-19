import React from 'react'
import styled from 'styled-components'




function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src = "/img/cta-logo-one.svg"/>
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
                Get Preimer Access to Rây but last Dragon for with a Disney+
                Subscription. As of 03/26/11, the price the dedisstny Bundele will increase by $1.
            </Description>
            <CTALogoTwo src = "/img/cta-logo-two.png"></CTALogoTwo>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display:flex;
    align-items:top;
    justify-content: center;
    
    &:before{
        position: absolute;
        top:0;
        bottom:0;
        content:"";
        left:0;
        right:0;
        opacity: 0.8;
        background-image: url("/img/login-background.jpg");
        background-size:cover;
        background-repeat:no-repeat;
        background-position:top;
        z-index:-1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px;
    width: 70%;
    display:flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img``
const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align:center;
    font-size: 18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 10px;
    margin-bottom: 12px;
    &:hover{
        background: #0483ee;


    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-algin: center;
    line-height: 1.5;

`
const CTALogoTwo = styled.img`
    width: 90%;

`