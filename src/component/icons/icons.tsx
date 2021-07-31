import {Icons} from './iconstyle'


interface IconProps {
    name: string
}
const Sideicons: React.FC<IconProps>= ({name}) => {
    return (
        <Icons className={`icon-${name}`}/>
    )
}

export default Sideicons