import React from "react";
import styled from "styled-components";
import prod1 from "./video/gaz.mp4"
import prod2 from "./video/grinder.mp4"
import prod3 from "./video/TV_NEW.mp4"
import prod4 from "./video/WM NEW.mp4"


const AboutPro = () => {
    return (
        <AboutProWrapper>
            <div className="wrap">
                <div className="big-text"><h2>Выйдя за рамки обычного</h2><p>Artel – лидер в производстве бытовой техники и электроники в Центральной Азии.</p></div>
                <div className="video-wr"><video className="product-vid" autoPlay loop muted><source src={prod1} type="video/webm" /></video></div>
            </div>

        </AboutProWrapper>
    )
}

export default AboutPro;

const AboutProWrapper = styled.div`
    background-color: black;
    width: 100vw;
    height: 100%;
    
    position: relative;

    .wrap{
        position: relative;
        box-sizing: border-box;
        object-fit: cover;
    }

    .big-text{
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        position: absolute;
        color: white;
    }
    
    .video-wr {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        background: #000;
        padding-top: 80px;
    }
`