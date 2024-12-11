import {Link} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerContext.tsx";

const AddCustomer = () => {
    const [customer, setCustomer] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer =
    }

    return (
        <div>
            Add Customer
            <br/>

            <input type={"text"} placeholder={"Name"}/>
            <input type={"text"} placeholder={"Email"}/>
            <input type={"text"} placeholder={"Phone"}/>

            <br/>

            <button onClick={handleSubmit}>Add Customer</button>

            <br/>
            <Link to={"/"}>Go back</Link>
        </div>
    );
};

export default AddCustomer;