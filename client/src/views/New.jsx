import axios from "axios";
import { navigate, Link } from "@reach/router";
import { useState } from "react";
import PetForm from "../components/PetForm";
const New = (props) => {
    // 1. create variables and useState
    const [pets, setPets] = useState({
        name: "",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:"",
    });
    const [errors, setErrors] = useState([]);
    // 2. useEffect

    // 3. Other Functions
    const submitFunction = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/new", pets)
            .then((res) => {
                console.log("sending results:", res);
                navigate("/");
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                    // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message);
                }
                // Set Errors
                setErrors(errorArr);
            });
    };

    const changeFunction = (e) => {
        console.log("e.target.name", e.target.name);
        console.log("e.target.value", e.target.value);
        setPets({
            ...pets,
            [e.target.name]: e.target.value,
        });
    };
    // 4. return
    return (
        <>
            
            <Link to="/"> Home </Link>
            <h4> Add a new pets : </h4>

            {errors.map((err, index) => (
                <p key={index}>{err}</p>
            ))}
            <PetForm
                pets={pets}
                changeFunction={changeFunction}
                submitFunction={submitFunction}
                // buttonText={"Create"}
            />


        </>
    );
}
export default New;
