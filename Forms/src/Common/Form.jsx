import { useEffect, useState } from "react"
import FormInput from "./FormInput";

const Form = ({ containerStyle=' ', formStyle, formItems, formButtons }) => {
    return (
        <div className={containerStyle}>

        <form className={formStyle}>
            {formItems.map(item => (
                <FormInput
                    key={item.id}  
                    label={item.label}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    className="input-class"
                />
            ))}
            {formButtons.map((button, index) => (
                <button
                    key={index}
                    className={`${button.style} button-class`}
                    onClick={button.action}
                >
                    {button.title}
                </button>
            ))}
        </form>
        </div>

    );
};

export default Form