import { navigate } from "@reach/router";
const PetForm = ({
    pets,
    changeFunction,
    submitFunction,
    // buttonText,
}) => {
    return (
        <>
            <form onSubmit={submitFunction}>


                <div class="form-group row"
                >
                    Pet Name:{""}
                    <input
                        type="text"
                        name="name"
                        value={pets.name}
                        onChange={changeFunction}
                    />
                </div >
                <div class="form-group row"
                >
                    Pet Type:{" "}
                    <input
                        type="text"
                        name="type"
                        value={pets.type}
                        onChange={changeFunction}
                    />
                </div >
                <div class="form-group row"
                >
                    Pet Description:{" "}
                    <input
                        type="text"
                        name="description"
                        value={pets.description}
                        onChange={changeFunction}
                    />
                </div >
                <div class="optinal">
                    <div class="form-group row"
                    >
                        skills 1:{" "}
                        <input
                            type="text"
                            name="skill1"
                            value={pets.skill1}
                            onChange={changeFunction}
                        />
                    </div >
                    <div class="form-group row"
                    >
                        skills 2:{" "}
                        <input
                            type="text"
                            name="skill2"
                            value={pets.skill2}
                            onChange={changeFunction}
                        />
                    </div >
                    <div class="form-group row"
                    >
                        skills 3:{" "}
                        <input
                            type="text"
                            name="skill3"
                            value={pets.skill3}
                            onChange={changeFunction}
                        />
                    </div >
                </div>
                <div className="btn">
                    {/* <button onClick={() => navigate("/")}>cancel </button>

                    <button type="submit">{buttonText}</button> */}
  <input type="submit" value="Add Pet"  />
                    </div>
            </form>
        </>
    );
}

export default PetForm;