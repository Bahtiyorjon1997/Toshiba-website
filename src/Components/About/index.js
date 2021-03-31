import React from "react"
import styled from "styled-components"
import AboutPic from "./source/aboutUs.svg"
import dots from "./source/dots.png";
import newLogo from "./source/new-logo.png"

const About = () => {
    return (
        <AboutWrapper>
            <div className="content">
                <div className="about">
                    <img src={AboutPic} alt="" />
                </div>
                <div className="mainContent">
                    <div id="a">
                        <div className="first">
                            <img src={dots} alt="" className="dots" />
                            <img src={newLogo} alt="" className="newLogo" />
                        </div>


                    </div>
                    <div id="b"><p className="number">1</p></div>
                    <div id="c"><p className="number">2</p></div>
                    <div id="d"><p className="number">3</p></div>
                </div>
            </div>

        </AboutWrapper>
    )
}

export default About;

const AboutWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #000;

    .content{
        padding: 80px;
        height: auto;

        .about{
            padding: 80px 0;  
        }

        .mainContent{
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas: "a a a b b b"
            "a a a b b b"
            "a a a b b b"
            "a a a b b b"
            "a a a b b b"
            "c c c d d d"
            "c c c d d d"
            "c c c d d d"
            "c c c d d d";
            grid-gap: 40px;
            color: white;

            .number{
                padding: 0;
                margin: 0;
                font-size: 36px;
                line-height: 1px;
                color: rgb(0, 209, 98);
                text-align: right;
            }

            #a {
                grid-area: a;
                overflow: hidden;
                
                .first{
                    position: relative;
                }

                .dots{
                    position: absolute;
                }
                .newLogo{
                    height: 53vh;
                    padding: 60px 220px;
                    position: absolute;
                    box-sizing: border-box;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                }
            }
            #b{
                grid-area: b;
                padding: 60px;
            }
            #c{
                grid-area: c;
                padding: 60px;
            }
            #d{
                grid-area: d;
                padding: 60px;
            }

            & > div{
                background-color: rgb(21, 23, 27);
                color: white;
                border-radius: 10px;
            }
        }
    }



`