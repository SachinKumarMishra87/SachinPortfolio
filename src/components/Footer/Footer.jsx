import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { Bio } from "../../data/constants";
import { FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #282c34;
  background-color: #222;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const FooterCenter = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.5rem;
`;

const FooterLeft = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  text-shadow: 1px 4px 4px black;
  @media(max-width:450px) {
    font-size: 1rem;
  }

  @media(max-width:450px) {
    font-size: 1rem;
  }
`;
const WhatSappNumberDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const FooterContactNumber = styled.div`
 font-size: 16px;
 text-align: center;
  font-weight: bold;
  text-shadow: 1px 4px 4px black;
  @media(max-width:450px) {
    font-size: 13px;
  }
`;
const FooterEmail = styled.p`
 font-size: 14px;
 text-align: center;
  font-weight: bold;
  @media(max-width:450px) {
    font-size: 11px;
  }
  text-shadow: 1px 4px 4px black;
`;

const IconLink = styled.a`
  position: relative;
  display: block;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 44px;
  background: #333;
  border-radius: 50%;
  font-size: 25px;
  color: #666;
  transition: 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ffee10;
    transition: 0.3s;
    transform: scale(0.9);
    z-index: -1;
  }

  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
  }

  &:hover {
    box-shadow: 0 0 5px #ffee10;
    text-shadow: 0 0 5px #ffffff;
    background-color: #4a4a60;
  }

  // Custom tooltip
  &:hover span {
    @media(max-width:1020px) {
    visibility: hidden;
  }
    visibility: visible;
    opacity: 1;
    transform: translateX(-10px);
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  /* background-color: #282c34; */
  color: white;
  text-align: center;
  border-radius: 16px;
  height: 5px;
  /* width: 44px; */
  font-size: 10px;
  position: absolute;
  z-index: 1;
  bottom: 0%; // Adjust as needed
  left: 10%;
  transform: translateY(-90%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
`;

const RightsReserved = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  text-align: center;
  color: #ccc;
`;
const FooterSpan = styled.span`
  color: #cdb118;
  font-weight: 600;
`
// Individual hover effects for each icon
const LinkedInIcon = styled(FaLinkedinIn)`
  &:hover {
    color: rgb(10, 102, 194);
  }
`;

const WhatsappIcon = styled(FaWhatsapp)`
  &:hover {
    color: green;
  }
  @media(max-width:450px) {
    font-size: 1rem;
  }
`;

const GfgIcon = styled(SiGeeksforgeeks)`
  &:hover {
    color: green;
  }
`;

const LeetcodeIcon = styled(SiLeetcode)`
  &:hover {
    color: #623c04;
  }
`;

const TwitterIcon = styled(FaTwitter)`
  &:hover {
    color: rgb(29, 161, 242);
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div className="">
          <FooterLeft>Sachin Mishra</FooterLeft>
          <FooterEmail>sachinmishra8707@gmail.com</FooterEmail>
          <WhatSappNumberDiv>
            <IconLink
              href="https://wa.me/918707625097"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaWhatsapp size={25}/>
              <Tooltip>Whatsapp</Tooltip>
            </IconLink>
            <FooterContactNumber>+91 87076 25097</FooterContactNumber>
          </WhatSappNumberDiv>
        </div>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contacts</NavLink>
        </NavItems>
        <FooterCenter>
          <IconLink
            href={Bio.linkedin}
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
            <Tooltip>LinkedIn</Tooltip>
          </IconLink>
          <IconLink
            href={Bio.geeksforgeeks}
            target="_blank"
            aria-label="GeeksforGeeks"
          >
            <GfgIcon />
            <Tooltip>GeeksforGeeks</Tooltip>
          </IconLink>
          <IconLink
            href={Bio.leatcode}
            target="_blank"
            aria-label="LeetCode"
          >
            <LeetcodeIcon />
            <Tooltip>LeetCode</Tooltip>
          </IconLink>
          <IconLink
            href={Bio.twitter}
            target="_blank"
            aria-label="Twitter"
          >
            <TwitterIcon />
            <Tooltip>Twitter</Tooltip>
          </IconLink>

        </FooterCenter>

      </FooterContent>
      <RightsReserved>
        &copy; {new Date().getFullYear()} <FooterSpan>Sachin Mishra</FooterSpan>. All rights reserved.
      </RightsReserved>
    </FooterContainer>
  );
}

export default Footer;
