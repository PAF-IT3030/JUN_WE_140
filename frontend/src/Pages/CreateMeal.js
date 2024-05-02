import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateMeal = () => {
    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState();
    const [calories, setCalories] = useState();
    const [plan, setPlan] = useState("");
    const navigate = useNavigate();
  
    const handleCreateMeal = (e) => {
      const data = {
        title,
        owner,
        calories,
        plan,
      };
  
      e.preventDefault();
      axios
        .post("localhost:8080/student/add", data)
        .then(() => navigate("/meals"))
        .catch((err) => {
          alert("Something went wrong...");
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
                name="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
                className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
              />
            </div>
            <div className="flex flex-col gap-2 mb-5 ">
              <label className="text-lg font-medium">owner</label>
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
              <label className="text-lg font-medium">calories</label>
              <input
                type="number"
                name="calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="calories"
                className="ring-1 ring-slate-400 rounded-md py-1 px-2 "
              />
            </div>
  
            <div className="flex flex-col gap-2 mb-5 ">
              <label className="text-lg font-medium">plan</label>
              <textarea
                type="text"
                name="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                placeholder="Meal plan"
                className="ring-1 ring-slate-400 rounded-md py-1 px-5 "
              />
            </div>
            <button
              onClick={handleCreateMeal}
              className=" bg-[#ffb703] px-8 py-1 rounded-lg text-white"
            >
              Share
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateMeal;
  