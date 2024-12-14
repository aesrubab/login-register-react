import Form from "../common/Form"
import { useNavigate } from "react-router"

const Register = () => {
    const navigate = useNavigate()

    const formItems = [
        {
            id: 1,
            label: "Firstname",
            name: "firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            id: 2,
            label: "Lastname",
            name: "lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
        {
            id: 3,
            label: "Phone",
            name: "phone",
            type: "tel",
            placeholder: "Enter your phone number"
        },
        {
            id: 4,
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            id: 5,
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Enter a password"
        },
    ]

    const formButtons = [
        {
            title: "Register",
            style: "bg-violet-700 text-white py-3 rounded-md",
            action: () => { }
        },
        {
            title: "Already have an account?",
            style: "text-sm",
            action: () => {
                navigate("/login")
            }
        },
    ]

    return (
        <Form className="text-red-700" containerStyle='w-[850px] mt-12 mx-auto'
        formStyle="w-[400px] flex flex-col gap-5 border p-10 rounded-md"
        formItems={formItems} formButtons={formButtons}/>

    )
}

export default Register