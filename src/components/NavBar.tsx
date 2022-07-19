import React, { useEffect, useState } from "react";
import Section from "./Section";
import { 
  Logo, 
  UpperMenu, 
  SocialsWrapper,
  DesktopPages,
  DesktopMenu,
  LowerMenu,
  Pages,
  PagesWrapper,
  Socials,
  Icon
} from "../styles/components/Navbar";
import logo from "../assets/images/jennapalmer-dark.svg";
import { redstone, tabletBreakpoint } from "../styles/variables";
import { Turn as Hamburger } from 'hamburger-react';
import socials from '../assets/content/socials.json';
import { Link, NavbarProps } from '../types/Navbar';
import { animated, useSpring } from "react-spring";

export default function Navbar({ menu }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktopView, setIsDesktop] = useState(window.innerWidth >= tabletBreakpoint)
  

  const updateMedia = () => {
    const widerThanMenuBreakpoint = window.innerWidth >= tabletBreakpoint;
    if(isDesktopView !== widerThanMenuBreakpoint) setIsDesktop(widerThanMenuBreakpoint)
    if(isOpen === true && widerThanMenuBreakpoint) setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })


  const openAnimation = useSpring<object>({
    from: {
      opacity: '0',
      maxHeight: '95px',
      overflow: 'hidden'
    },
    to: {
      opacity: '1',
      maxHeight: isOpen ? `${window.innerHeight + 95}px` : '100px',
    },
    config: { duration: '300' }
  })

  return (
    <Section wide light bottom>
      <animated.div style={openAnimation}>
        <UpperMenu>
          <Logo src={logo} alt="logo" />
          {isDesktopView ? (
            <DesktopMenu>
              {menu.map((link) => (
                <DesktopPages href={`#${link.key}`} key={link.key}>
                  {link.label.toUpperCase()}
                </DesktopPages>
              ))}
            </DesktopMenu>
          ) : (
            <Hamburger
              toggle={() => setIsOpen(!isOpen)}
              toggled={isOpen}
              size={20}
              color={redstone}
              duration={0.5}
            />
          )}
        </UpperMenu>
        <LowerMenu>
          <PagesWrapper>
            {menu.map((link) => (
              <Pages href={`#${link.key}`} key={link.key}>{link.label}</Pages>
            ))}
          </PagesWrapper>
          <SocialsWrapper>
            {socials.links.map((link: Link) => (
              <Socials href={link.url} key={link.key}>
                <Icon src={require("../assets/images/" + link.key + ".svg")} alt={link.key} />
              </Socials>
            ))}
          </SocialsWrapper>
        </LowerMenu>
      </animated.div>
    </Section>
  )
}