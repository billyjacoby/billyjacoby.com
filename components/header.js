import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  background-color: #1f2641;
  color: white;

  min-height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  @media (min-width: 800px) {
    height: 70px;
  }
`;

const InnerNavContainerDesktop = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 70px;

  @media (min-width: 800px) {
    display: none;
  }
`;

const InnerNavContainerMobile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
  flex-grow: 1;
`;

const SiteInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;
`;

const SiteName = styled.span`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #30bced;
`;

const SiteDescription = styled.span`
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
`;

const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #1f2641;

  @media (max-width: 800px) {
    padding: 0;
    margin: 0;
    flex-direction: column;
    transform: ${(props) =>
      props.navIsOpen ? "translateY(0)" : "translateY(-200%)"};
  }
  transition: all 0.5s ease-in-out;
`;

const NavItem = styled.li`
  list-style: none;
  padding: 0 30px;
  font-weight: 700;
  font-size: 1.4rem;

  @media (max-width: 800px) {
    width: 100%;
    padding: 10px 100px;
    border-bottom: 1px solid white;
  }
`;

const StyledLink = styled.a`
  text-decoration: none !important;
  color: white;
`;

const NavLeft = styled.div`
  padding: 0 100px;

  @media (max-width: 800px) {
    padding: 0 0;
    z-index: -1;

    margin-right: auto;
  }
`;
const NavRight = styled.div`
  padding: 0 30px;

  @media (max-width: 800px) {
    padding: 0 0;
    margin-left: auto;
  }
`;
export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const navLinks = [
    ["Home", "/"],
    ["About", "/about"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];
  return (
    <NavContainer>
      <InnerNavContainerDesktop>
        <NavLeft>
          <SiteInfo>
            <SiteName>billyjacoby.com</SiteName>
            <SiteDescription>tutorials, tech, and thoughts…</SiteDescription>
          </SiteInfo>
        </NavLeft>
        <NavRight>
          <NavList>
            {navLinks.map((item) => {
              return (
                <NavItem>
                  <Link key={item[0]} href={item[1]}>
                    <StyledLink>{item[0]}</StyledLink>
                  </Link>
                </NavItem>
              );
            })}
          </NavList>
        </NavRight>
      </InnerNavContainerDesktop>
      <MobileContainer>
        <InnerNavContainerMobile>
          <NavLeft>
            <SiteName>billyjacoby.com</SiteName>
          </NavLeft>
          <NavRight onClick={() => setNavIsOpen(!navIsOpen)}>Menu</NavRight>
        </InnerNavContainerMobile>
        <NavList navIsOpen={navIsOpen}>
          {navLinks.map((item) => {
            return (
              <NavItem>
                <Link key={item[0]} href={item[1]}>
                  <StyledLink>{item[0]}</StyledLink>
                </Link>
              </NavItem>
            );
          })}
        </NavList>
      </MobileContainer>
    </NavContainer>
  );
}
