import React from 'react';
import styled from 'styled-components'
import sample from './src/2.webm'
import logo from "./src/toshiba.png"
import { FaFacebookF, FaTelegramPlane, FaYoutube, FaInstagramSquare } from 'react-icons/fa'
import { GiPowerButton, GiPauseButton, GiPlayButton } from "react-icons/gi"


const HomePage = () => {
    return (
        <HomeWrapper>
            <video className="videoTag" autoPlay loop muted><source src={sample} type="video/webm" /></video>
            {/* content */}
            <div className='content'>
                <div className="top-text">
                    <div className="first">Добро пожаловать</div>
                    <div className="second">Меню</div>
                </div>
                <div className="logo"><img src={logo} alt="Artel" /></div>
                <div className="icons">
                    <div className="left-icons">
                        <div>{<FaFacebookF size={35} />}</div>
                        <div>{<FaTelegramPlane size={35} />}</div>
                        <div>{<FaYoutube size={35} />}</div>
                        <div>{<FaInstagramSquare size={35} />}</div>
                    </div>
                    <div className="right-icons">
                        <div>{<GiPlayButton size={35} />}</div>
                        <div>{<GiPauseButton size={35} />}</div>
                        <div>{<GiPowerButton size={35} />}</div>
                    </div>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default HomePage;

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;

    position: relative;

    & video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        position: absolute;

        z-index:0;
    }

    .content{
        width: 100%;
        height: 100%;
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        color: #FFFFFF;
        
        padding: 80px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
     
        .top-text{
            width: 100%;
            font-size: 24px;
            display: flex;
            justify-content: space-between;
        }

        .logo{
            position: absolute;
            width: 421px;
            height: 162px;
            left: calc(45% - 421px/2 + 0.5px);
            top: 300px;
        }

        .icons {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 100%;
            bottom: 0;

            .left-icons{
                position: absolute;
                display: flex;
                flex-direction: column;
                bottom: 0;
                left: 0;

                & > div{
                    padding: 10px 0;
                }
            }

            .right-icons{
                position: absolute;
                display: flex;
                flex-direction: column;
                bottom: 0;
                right: 0;

                & > div{
                    padding: 10px 0;
                }
            }
        }
    }
`