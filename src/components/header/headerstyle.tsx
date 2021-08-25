import styled from "styled-components";
// import { themedark, themelight } from "../../action";



export const Headerparen=styled.header`
    width: 100%;
    height: 90px;
    box-shadow: 0 0 10px #e5e5e5;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const Usersection=styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-end;
`
export const Heading=styled.h1`
    width: 40%;
    margin: 0 30px;
`
export const User=styled.a`
    height: 40px;
    display: flex;
    align-items: center;
`
export const Username=styled.span`
    font-size:14px;
    margin: 0 10px;
    font-weight: bold;
`
export const Userimg=styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
`
export const Notification=styled.ul`
    width:20%;
    height: auto;
    display: flex;
    align-items: center;
`
export const Notiicon=styled.li`
    width:30px;
    margin: 0 5px;
    &:after {
      content: '|';
      position: absolute; 
        color: #90e0ef;
        margin: 0 5px;
    }
`
export const Icons=styled.i`
    font-size:20px;
    color: #14213d;
`