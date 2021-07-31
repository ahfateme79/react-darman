import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const SidebarStyles = styled.aside`
    width: 10%;
    height: auto;
`
export const ListIcon = styled.ul`
    width: 100%;
    height: auto;
    list-style-type: none;
`
export const PanelIcons = styled.li`
    margin: 30px 20px;
        &:last-child{
            position: absolute;
            bottom: 40px;
            left: 10px;
        }

`
