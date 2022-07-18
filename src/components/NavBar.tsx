import React, { useEffect, useState } from "react";
import Section from "./Section";
import { 
  Image, 
  TopNav, 
  TopBar, 
  menuBreakpoint, 
  SocialsWrapper,
  MobileMenu,
  Pages,
  PagesWrapper,
  Socials,
  Icon
} from "../styles/components/Navbar";
import logo from "../assets/images/jennapalmer-dark.svg";
import { redstone } from "@/styles/variables";
import { Turn as Hamburger } from 'hamburger-react';
import socials from '../assets/content/socials.json';
import { Link, NavbarProps } from '../types/Navbar';

export default function Navbar({ menu }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= menuBreakpoint)

  // closes mobile menu on desktop view
  const updateMedia = () => {
    const isWider = window.innerWidth >= menuBreakpoint;

    if(isDesktop !== isWider) {
      setIsDesktop(isWider)
      console.log(isWider)
    }

    if(isOpen === true && isWider) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <Section wide light>
      <TopBar>
        <Image src={logo} alt="logo" />
        <TopNav>
          {
            isDesktop ? (
              <div>blah</div>
            ) : (
              <Hamburger
                toggle={() => setIsOpen(!isOpen)}
                toggled={isOpen}
                size={20}
                color={redstone}
                duration={0.5}
              />
            )
          }
        </TopNav>
      </TopBar>
      <MobileMenu>
        <PagesWrapper>
          {menu.map((link) => (
            <Pages href={`#${link.key}`}>{link.label}</Pages>
          ))}
        </PagesWrapper>
        <SocialsWrapper>
          {socials.links && socials.links.map((link: Link) => (
            <Socials href={link.url} key={link.key}>
              <Icon src={require("../assets/images/" + link.key + ".svg")} alt={link.key} />
            </Socials>
          ))}
        </SocialsWrapper>
      </MobileMenu>
    </Section>
  )
}