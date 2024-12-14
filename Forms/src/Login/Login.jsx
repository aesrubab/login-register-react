import Form from "../common/Form"
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate()

    const formItems = [
        {
            id: 1,
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            className: "email-input"
        },
        {
            id: 2,
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Enter a password",
            className: "password-input"
        },
    ]

    const formButtons = [
        {
            title: "Login",
            style: "bg-green-700 text-white py-3",
            action: () => {}
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {
                navigate("/register");
            }
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => {}
        },  
    ]

    return (
        <Form className="text-red-700" containerStyle="w-[850px] mt-12 mx-auto"
         formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md" 
         formItems={formItems} formButtons={formButtons} />
    )
    
}

export default Login