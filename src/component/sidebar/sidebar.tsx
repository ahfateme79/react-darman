import ReactDOM from 'react-dom';
import React from 'react'
import { SidebarStyles, ListIcon, PanelIcons } from './sidestyle';
import Sideicons from '../icons/icons';
//import { title } from 'process';
import { Link } from 'react-router-dom'
import Login from '../../container/login/login';
//import Charts from '../chart/chart';

interface AsideProps {
   arr:{path:string;iconName:string}[]
}

const Aside:React.FC<AsideProps> = ({arr}) => {
    return (
        <SidebarStyles>
            <ListIcon>
                {
                    arr?.map(n => {
                        return (
                            <PanelIcons>
                                <Link to={n.path}>
                                    <Sideicons name={n.iconName} />
                                </Link>
                            </PanelIcons>

                        )
                    })
                }
            </ListIcon>
            <Login/>
           
        </SidebarStyles>
    )
}
export default Aside