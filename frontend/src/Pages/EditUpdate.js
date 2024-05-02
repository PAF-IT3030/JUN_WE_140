import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUpdate = () => {
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/student/add/${id}`)
        .then((res) => {
          setExercise(res.data.exercise);
          setSets(res.data.sets);
          setReps(res.data.reps);
          setWeight(res.data.weight);
          setNotes(res.data.notes);
        })
        .catch((err) => {
          alert("Something went wrong..");
          console.log(err);
        });
    }, [id]);

};

export default EditUpdate;