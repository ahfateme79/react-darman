import { useState } from "react";
import { Fildset, Formstyle, Input, Textarea } from "./formstyle";

interface Formprops {
  inputs:
    | { label: string; type: string; placeholder: string; name: string }[]
    | undefined;
  onSubmit: (payload: Object) => void;
}

const Form: React.FC<Formprops> = ({ inputs, onSubmit }) => {
  const [fields, setFields] = useState(Object);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(fields);
  };
  return (
    <Formstyle onSubmit={handleSubmit}>
      <Fildset>
        {inputs?.map((input) => {
          return (
            <>
              {input.type === "textarea" ? (
                <Textarea placeholder={input.placeholder} />
              ) : (
                <Input
                  name={input.name}
                  onChange={handleChange}
                  value={fields[input.name]}
                  placeholder={input.placeholder}
                  type={input.type}
                />
              )}
            </>
          );
        })}
      </Fildset>
      <button>sumbit</button>
    </Formstyle>
  );
};
export default Form;
