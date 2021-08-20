import styled from "styled-components";

export const Tablestyle=styled.table`
    width: 80%;
    height: auto;
    height:300px;
    box-shadow: 0px 0px 10px #d8f3dc;
`
export const Thead=styled.thead`
    width: 100%;
    background-color:#005f73;
    color:white;

`
export const Trow=styled.tr`
    border: 1px solid transparent;
    &:nth-child(even){
        background-color: #83c5be;
    }
`

export const Thcolumn=styled.th`
        padding:3px 10px;

`
export const Tbody=styled.tbody`
    width: 100%;
`

export const Tbcolumn=styled.td`
    border: 1px solid transparent;
    padding:3px 10px;
`
