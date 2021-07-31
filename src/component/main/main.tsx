import styled from 'styled-components'
import PanelCarts from '../../container/panelcarts/panelcart'
import Products from '../../container/products'
import CartPanel from '../carts/carts'
import Aside from '../sidebar/sidebar'
import { MainStyles,Row,ChartSEctions} from './mainstyle'

const BigSection = styled.div`
    width: 100%;
    background-color: #f7f2f2;
    display: flex;
    flex-direction: column;
    padding: 50px;
    margin: 20px auto;
    border-radius: 10px;
`
const array = [
    {
        img: 'dollar',
        number: 293000,
        title: 'total se'
    },
    {
        img: 'users',
        number: 500,
        title: 'total users'
    },
    {
        img: 'box',
        number: 20,
        title: 'total products'
    },
    {
        img: 'bag',
        number: 250,
        title: 'total carts'
    },

]


const Main = () => {
    return (
        <MainStyles>
            <BigSection>
                <Row>
                    {
                        array.map(n=>{
                            return(
                               <CartPanel img={n.img} title={n.title} number={n.number}/>
                            )
                        })
                   }
                </Row>
               <ChartSEctions>
                </ChartSEctions>
            </BigSection>
        </MainStyles>
    )
}

export default Main