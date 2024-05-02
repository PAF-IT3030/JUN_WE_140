import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditMeal = () => {
    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState(0);
    const [calories, setCalories] = useState(0);
    const [plan, setPlan] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
        axios
          .get(`http://localhost:8080/student/add/${id}`)
          .then((res) => {
            setTitle(res.data.title);
            setOwner(res.data.owner);
            setCalories(res.data.calories);
            setPlan(res.data.plan);
          })
          .catch((err) => {
            alert("Something went wrong..");
            console.log(err);
          });
      }, [id]);

      const handleEditMeal = (e) => {
        const data = {
          title,
          owner,
          calories,
          plan,
        };

        e.preventDefault();
    axios
      .put(`http://localhost:8081/workout/${id}`, data)
      .then(() => {
        navigate("/meals");
      })
      .catch((err) => {
        alert("Something went wrong..");
        console.log(err);
      });
  };


    };

    export default EditMeal;