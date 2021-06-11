import axios from "axios";
import { navigate, redirectTo } from "@reach/router";

const Deletbtn = ({ id, successCallBack,buttonText }) => {
  const clickFunction = (id) => {
    axios
      .delete(`http://localhost:8000/del/${id}`)
      .then((res) => {
        // do something after delete
        navigate("/");
        console.log(res);
        successCallBack();

      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={() => clickFunction(id)}>{buttonText}</button>
    </>
  );
};

export default Deletbtn;
