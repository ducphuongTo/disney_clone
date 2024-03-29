import React from 'react'
import styled from 'styled-components';


function Header() {
  return (
    <Nav>
        <Logo src = "/img/logo.svg"/>
        <NavMenu>
            <a>
                <img src='/img/home-icon.svg' alt=""/>
                <span>HOME</span>
            </a>

            <a>
                <img src='/img/search-icon.svg' alt=""/>
                <span>SEARCH</span>
            </a>
            
            <a>
                <img src='/img/watchlist-icon.svg' alt=""/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src='/img/original-icon.svg' alt=""/>
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src='/img/movie-icon.svg' alt=""/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src='/img/series-icon.svg' alt=""/>
                <span>SERIES</span>
            </a>


        </NavMenu>
        <UserImg/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav `
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x:hidden;

`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left: 25px;
    cursor: pointer;
    align-items:center;
    a{
        display: flex;
        align-items:center;
        padding: 0 12px;
        img{
            height: 20px;

        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content:"";
                height:2px;
                background: white;
                position:absolute;
                
                left:0;
                right:0;
                bottom: -6px;
                opacity:0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor:pointer;

`