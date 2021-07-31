import styled from 'styled-components'



export const Table = styled.table`
    width: 100%;
   border-collapse: collapse;
`

export const RowTable = styled.tr`
    border: 1px solid blue;
`
export const CulmnTableHead = styled.th`
    padding: 10px;
    border: 1px solid blue;

`
export const CulmnTable = styled.td`
    padding: 10px;
        border: 1px solid blue;

`
export const Loading=styled.div`
    width: 200px;
    height: 200px;
    background-color: #a9ec0d;
    border: 5px solid #000;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) rotate(180deg);
    z-index: 100;
`