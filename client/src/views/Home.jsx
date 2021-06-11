import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
// import DeleteButton from '../components/DeleteButton'
const Home = (props) => {
    // 1. variables and useState
    const [pets, setPets] = useState([]);
    //   2. useEffect
    useEffect(() => {
        axios
            .get("http://localhost:8000/")
            .then((res) => {
                console.log("getting the results:", res);
                //   do something with res.data
                setPets(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    // 4. Return
    return (
        <div>
            <Link to="/new"> add a pet to the shelter </Link>
            <h3>These pets are looking for a good home</h3>
            <div>
            <table>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
            {pets.length > 0 &&
                pets.sort((a, b) => a.name.localeCompare(b.name)).map((pets) => {
                    return (

                        
                                    <tr key={pets._id}>
                                        <td>{pets.name}</td>
                                        <td>{pets.type}</td>
                                        <td>
                                        <Link to={`/pets/${pets._id}`}>details</Link>  |<Link to={`/edit/${pets._id}`}>Edit</Link> 
                                            
                                        </td>

                                    </tr>
                                
                            
                    );
                }
                )
                }
                        
                        </tbody></table>
            </div>
        </div>
    );
}

export default Home;
