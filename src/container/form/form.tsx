import { FormStyle, Filedset, InputStyle, Textarea } from './formstyle'



const Form: React.FC<FormProps> = ({ input, handlesubmit, handlechange }) => {
    const inp=[
        {
            placeholder:"",
            type:"",
            name:"",
            value:"",
            
        }
    ]
    return (
        <>
            <FormStyle onSubmit={handlesubmit}>
                <Filedset>
                    
                                    <InputStyle placeholder={n.placeholder} type={n.type} onChange={handlechange}></InputStyle>
                           
                </Filedset>
                <button>submit</button>
            </FormStyle>
        </>
    )
}
export default Form