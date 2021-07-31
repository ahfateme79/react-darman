import {HeaderStyle,Heading,Profile,Span,ProIcon} from './headerstyle';

const Header = () => {
    return (
        <HeaderStyle>
            <Heading>Store Admin Panel</Heading>
            <Profile>
                <Span>John Doe</Span>
                <ProIcon className='icon-user' />
            </Profile>
        </HeaderStyle>

    )
}
export default Header