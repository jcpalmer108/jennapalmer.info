import styled from "styled-components";
import { redstone, silver_polish } from "../variables";

export const menuBreakpoint = 400;

export const Image = styled.img`
  height: 40px;
  transition: all ease 1s;

  @media (min-width: ${menuBreakpoint}px) {
    height: 55px;
    transition: all ease 1s;
  }

`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid ${redstone};

  .hamburger-react {
    max-height: 40px;
    top: -4px;
    left: -4px
  }

  @media (min-width: ${menuBreakpoint}px) {
    border: none;
  }

  `

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px 20px 20px;
  transition: all ease 1s;

  @media (min-width: ${menuBreakpoint}px) {
    padding: 20px 60px;
    transition: all ease 1s;
  }

  `

  export const MobileMenu = styled.div`
    background: white;
    justify-content: space-around;
    display: flex;
    height: 60px;
  `

  export const Socials = styled.a`
    border-left: 1px solid ${silver_polish};
    border-bottom: 1px solid ${silver_polish};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      border-left: none;
   }
  `

  export const Icon = styled.img`
  height: 26px;
  `
