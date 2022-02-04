import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
`

export const ContentCard = styled.div`
    width: 200px;
    height: 280px;  
    margin: 30px;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.07);
    overflow: hidden;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(3px);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        width: 80px;
        height: 340px;
        background: linear-gradient(#00ccff, #d400d4);
        animation: animate 4s linear infinite;

    }

    &::after {
        content: '';
        border-radius: 15px;
        position: absolute;
        inset: 2px;
        background: rgba(255, 255, 255);
        
        
    }
    
    @keyframes animate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


`

export const Content = styled.div`
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    transition: 0.5s;
    position: relative;
    z-index: 1;
`

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0px;
    pointer-events: none;
`

export const Texth3 = styled.h3`
    font-size: 1.3em;
    color: rgba(0,0,0);
    margin: 10px;
    font-family: 'Roboto'

    &::after {
        content: '';
        height: 3px;
        background: #f2f2f2;
    }
`

export const Textp = styled.p`
    font-size: 1em;
    color: rgba(0,0,0);
    font-weight: 300;
    margin: 0px;
`

export const Texta = styled.a` 
    display: inline-block;
    background: #fff;
    color: #000;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 500;
`
