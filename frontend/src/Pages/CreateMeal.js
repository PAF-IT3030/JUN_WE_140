import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


  const CreateMeal = () => {
    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState("");
    const [calories, setCalories] = useState("");
    const [plan, setPlan] = useState("");
    const navigate = useNavigate();
  
    const handleCreateMeal = (e) => {
      e.preventDefault();
      if (!title || !owner || !calories || !plan) {
        alert("Please fill in all fields");
        return;
      }
  
      const data = {
        title,
        owner,
        calories,
        plan,
      };
  
      axios
        .post("http://localhost:8080/student/add", data)
        .then(() => navigate("/meals"))
        .catch((err) => {
          alert("Something went wrong...");
          console.error(err);
        });
    };
  
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[40%] mx-auto shadow-lg p-5 rounded-lg">
          <form className="flex flex-col space-y-4">
            <div>
              <label className="text-lg font-medium">Title</label>
              <input
                type="text"
                name="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="block w-full ring-1 ring-slate-400 rounded-md py-2 px-4"
              />
            </div>
            <div>
              <label className="text-lg font-medium">Owner</label>
              <input
                type="text"
                name="owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                placeholder="Owner"
                className="block w-full ring-1 ring-slate-400 rounded-md py-2 px-4"
              />
            </div>
            <div>
              <label className="text-lg font-medium">Calories</label>
              <input
                type="text"
                name="calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Calories"
                className="block w-full ring-1 ring-slate-4 rounded-md py-2 px-400"
              />
            </div>
  
            <div>
              <label className="text-lg font-medium">Plan</label>
              <textarea
                name="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                placeholder="Meal plan"
                className="block w-full ring-1 ring-slate-400 rounded-md py-2 px-4"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleCreateMeal}
                className="bg-[#ffb703] px-8 py-2 rounded-lg text-white"
              >
                Share
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateMeal;
  