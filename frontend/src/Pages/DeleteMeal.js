import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DeleteMeal = () => {
    const navigate = useNavigate();
    const { id } = useParams();
  
    const handleDeleteMeal = () => {
      axios
        .delete(`http://localhost:8081/workout/${id}`)
        .then(() => {
          navigate("/meals");
        })
        .catch((err) => {
          alert("Somethnig went wrong..");
          console.log(err);
        });
    };