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

  return (
    <div className="w-full absolute px-20 ">
      <div className="mt-24 w-[40%] mx-auto shadow-lg p-5 rounded-lg ">
        <form>
          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>

          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Owner</label>
            <input
              type="text"
              name="owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="owner"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>

          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Calories</label>
            <input
              type="text"
              name="calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="calories"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>

          <div className="flex flex-col gap-2 mb-5 ">
            <label className="text-lg font-medium">Plan</label>
            <textarea
              type="text"
              name="plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              placeholder="plan"
              className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
            />
          </div>
          <button
            onClick={handleEditMeal}
            className=" bg-[#ffb703] px-8 py-1 rounded-lg text-white"
          >
            Save
          </button>         
        </form>
      </div>
    </div>
  );
};

export default EditMeal;