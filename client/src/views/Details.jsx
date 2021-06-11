import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Deletbtn from '../components/Deletbtn'
const Details = ({ id }) => {
    // 1. variables and useState
    const [pets, setPets] = useState([]);
    const [likes, setLikes] = useState(0)
    //   2. useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/pet/${id}`).then((res) => {
            console.log("got results", res);
            setPets(res.data);
        })
 

    }, [id]);
    const likePet = _id => {

        axios.put(`http://localhost:8000/pet/like/${id}` , {
            likes
        })
            .then(res => {
                console.log(res)

            setPets(res.data);
            navigate(`/pets/${id}`)
            
            })
            .catch(err => console.log(err))
            document.getElementById('button').setAttribute("disabled", "disabled");
    }
    const removeFromDom = (id) => {
        setPets(pets.filter((pets) => pets._id !== id));
    };
    // 4. Return
    return (
        <div>
            <Link to="/"> Home </Link>
            <div>
                
            <h3>Details about {pets.name}</h3>
            <p>Pet type: {pets.type}</p>
            <p>Description: {pets.description}</p>
            <p>Skills: 
                <ul>
                    {pets.skill1 ? <li>{pets.skill1}</li> : "" }
                    {pets.skill2 ? <li>{pets.skill2}</li> : "" }
                    {pets.skill3 ? <li>{pets.skill3}</li> : "" }
                </ul>
            </p>
            <Deletbtn id={pets._id} 
            successCallBack={(id) => removeFromDom(pets._id)}
            buttonText={`Adopt ${pets.name}`}                               />
            <p>Likes: {pets.likes}</p>

            <button onClick={ e => {likePet(pets._id)}} id="button">Like this pet</button>
            </div>
        </div>
    );
}

export default Details;
