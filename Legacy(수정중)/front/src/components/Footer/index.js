import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
}from './FooterElementes'

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    
  return (
      <FooterContainer>
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinkWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/signin">How it works</FooterLink>
                              <FooterLink to="/signin">Testimonials</FooterLink>
                              <FooterLink to="/signin">Careers</FooterLink>
                              <FooterLink to="/signin">Investos</FooterLink>
                              <FooterLink to="/signin">Terms of Service</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/signin">How it works</FooterLink>
                              <FooterLink to="/signin">Testimonials</FooterLink>
                              <FooterLink to="/signin">Careers</FooterLink>
                              <FooterLink to="/signin">Investos</FooterLink>
                              <FooterLink to="/signin">Terms of Service</FooterLink>
                      </FooterLinkItems>
                  </FooterLinkWrapper>
                  <FooterLinkWrapper>
                      <FooterLinkItems>
                          <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/signin">How it works</FooterLink>
                              <FooterLink to="/signin">Testimonials</FooterLink>
                              <FooterLink to="/signin">Careers</FooterLink>
                              <FooterLink to="/signin">Investos</FooterLink>
                              <FooterLink to="/signin">Terms of Service</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/signin">How it works</FooterLink>
                              <FooterLink to="/signin">Testimonials</FooterLink>
                              <FooterLink to="/signin">Careers</FooterLink>
                              <FooterLink to="/signin">Investos</FooterLink>
                              <FooterLink to="/signin">Terms of Service</FooterLink>
                      </FooterLinkItems>
                  </FooterLinkWrapper>
              </FooterLinksContainer>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to ='/' onClick={toggleHome}>
                        Tookdak
                      </SocialLogo>
                      <WebsiteRights>Tookdak @ {new Date().getFullYear()} All right reserved.</WebsiteRights>
                      <SocialIcons>
                          <SocialIconLink href='/' target='_blank' aria-label = "Facebook">
                              <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink href='/' target='_blank' aria-label = "Instagram">
                              <FaInstagram />
                          </SocialIconLink>
                          <SocialIconLink href='/' target='_blank' aria-label = "Youtube">
                              <FaYoutube />
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
  )
}

export default Footer