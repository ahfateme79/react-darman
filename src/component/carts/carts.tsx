import { Carts, Figure, CartImage, Number, Title } from './cartstyle'


interface CartProps {
    img: string
    number: number
    title: string
}


const CartPanel: React.FC<CartProps> = ({ img, number, title }) => {
    return (
            <Carts>
                <Figure>
                    <CartImage className={`icon-${img}`}></CartImage>
                </Figure>
                <Number>{number}</Number>
                <Title>{title}</Title>
            </Carts>
    )
}

export default CartPanel