import { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

import PetForm from "../components/PetForm";
const Edit = ({ id }) => {
    const [pets, setPets] = useState({
        
        name: "",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:"",
    });

    const [errors, setErrors] = useState([]);
    const [idError , setIdError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/pet/${id}`).then((res) => {
            console.log("got results", res);
            setPets(res.data);
            
        })
        
        .catch(err => {
            console.log("the data",err.response.data)
            setIdError(`We're sorry, but we could not find the author you are looking for.
            Would you like to add this author to our database?`);
        })

    }, [id]);
        

    
    const submitFunction = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/pet/${id}`, pets)
            .then((res) => {
                
                console.log("sending res:", res);
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
    if( idError === ''){
        return (
            <>

                <Link to="/"> Home </Link>
                {errors.map((err, index) => (
                    <p key={index}>{err}</p>
                ))}
                <PetForm
                    pets={pets}
                    setPets={setPets}
                    changeFunction={changeFunction}
                    submitFunction={submitFunction}
 
                />
            </>
        );
    }
    else {
        return(
            <div className="error-box">
                <h1>{idError}</h1>
                
            </div>
            
        )
    }

};



export default Edit;

