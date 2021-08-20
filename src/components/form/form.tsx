import { Fildset, Formstyle } from "./formstyle"




interface Formprops{
    inputs:string[] | undefined
}


const Form:React.FC<Formprops>=()=>{
    return(
        <Formstyle>
            <Fildset>
                {

                }
            </Fildset>
        </Formstyle>
    )
}
export default Form