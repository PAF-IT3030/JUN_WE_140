import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DeleteUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteWorkout = () => {
        axios
          .delete(`http://localhost:8081/workout/${id}`)
          .then(() => {
            navigate("/updates");
          })
          .catch((err) => {
            alert("Somethnig went wrong..");
            console.log(err);
          });
};

};
