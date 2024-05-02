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

    const handleEditWorkout = (e) => {
        const data = {
          exercise,
          sets,
          reps,
          weight,
          notes,
        };
    
        e.preventDefault();
        axios
          .put(`http://localhost:8081/workout/${id}`, data)
          .then(() => {
            navigate("/updates");
          })
          .catch((err) => {
            alert("Something went wrong..");
            console.log(err);
          });
    };

    return (
        <div className="w-full absolute px-20 ">
          <div className="mt-24 w-[40%] mx-auto shadow-lg p-5 rounded-lg ">
            <form>
              <div className="flex flex-col gap-2 mb-5 ">
                <label className="text-lg font-medium">Excersice</label>
                <input
                  type="text"
                  name="excersice"
                  value={exercise}
                  onChange={(e) => setExercise(e.target.value)}
                  placeholder="Excersice"
                  className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
                />
              </div>
              
              
            </form>
          </div>
        </div>
      );

};

export default EditUpdate;