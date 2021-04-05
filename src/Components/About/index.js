import React from "react"
import styled from "styled-components"
import AboutPic from "./source/aboutUs.svg"
import Dots from "./source/dots.png";
import newLogo from "./source/new-logo.png"

const About = () => {

    const blocks = [
        {
            id: 1,
            text: "История",
            text1: "Нужно прописать подробную историю компании, ее прирост по годам. Все полученные награды. Нет ограничений по символам.",
            text2: "Читать дальше..."
        },
        {
            id: 2,
            text: "Экспорт",
            text1: "Продукция Artel экспортируется во множество стран, среди которых Украина, Казахстан, Кыргызстан, Афганистан, Азербайджан, Таджикистан, Армения, Грузия, Туркменистан и Российская Федерация...",
            text2: "Читать дальше..."
        },
        {
            id: 3,
            text: "Стратегия",
            text1: "Нужно прописать подробную информацию про стратегию компании. Должны быть тематические фотографии к каждому пункту, или описание будущей иллюстрации для его создания.",
            text2: "Читать дальше..."
        },
    ]

    return (
        <AboutWrapper>
            <div className="content">
                <div className="about">
                    <img src={AboutPic} alt />
                </div>
                <div className="mainContent">
                    <div id="a"> <img src={newLogo} alt /> </div>

                    {blocks.map(i =>
                        <div id="block">
                            <p className="number">{i.id}</p>
                            <div className="text">
                                <h1>{i.text}</h1>
                                <p>{i.text1}</p>
                            </div>
                            <div className="subtext">
                                <p>{i.text2}</p>
                            </div>
                        </div>
                    )}
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
    padding-bottom: 80px;

    .content{
        padding: 80px;
        height: auto;

        .about{
            padding: 80px 0;  
        }

        .mainContent{
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
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
                overflow: hidden;
                background-image: url(${Dots});
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                display: flex;
                justify-content: center;
                align-items: center; 
                
                img {
                  width: 35%;
                }
            }
            
            #block{
                padding: 60px;
                display: flex;
                flex-direction: column;
                -webkit-box-pack: justify;
                justify-content: space-between;
                
                .text{
                    margin: 0;
                    padding: 0;
                }

                h1{
                    font-size: 48px;
                    padding: 0;
                    margin: 0;
                }

                p{
                    font-size: 24px;
                    margin: 10px 0;
                    padding: 0;
                    color: #FFFFF;
                }

                .subtext {
                    text-align: right;
                }
            }

            & > div{
                background-color: rgb(21, 23, 27);
                color: white;
                border-radius: 10px;
            }
        }
    }
`