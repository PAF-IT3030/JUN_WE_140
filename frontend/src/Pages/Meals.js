import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Meals = () => {
    const [meals, setmeals] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:8080/student/add")
        .then((res) => setMeals(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div className="w-full absolute px-20 ">
          <div className=" mt-24 text-right ">
            <Link to="/CreateMeal">
              {" "}
              <button className=" bg-[#ffb703] px-8 py-1 rounded-lg text-white">
                Add New Meal
              </button>
            </Link>
          </div>
          <div className="my-10 flex flex-wrap justify-center gap-5 ">
            {meals.map((meal) => (
                <div
                    className="w-[300px] h-auto flex flex-col justify-between rounded-lg ring-1 ring-[#ffb703] shadow-lg p-5 text-center "
                    key={meal.id}
                >
                    <h1 className="text-2xl font-bold mb-5">{meal.title}</h1>
                    <div className="flex justify-center gap-8 items-center mb-5">
                    <h1>
                        <span className="text-lg font-semibold ">Owner: </span>
                        {meal.owner}
                    </h1>
                    <h1>
                        <span className="text-lg font-semibold ">Reps: </span>
                        {workout.reps}
                    </h1>
                    </div>
                    {/* <div className="mb-5">
                    <h1 className="text-lg font-semibold ">Weight</h1>
                    <h1>{workout.weight}</h1>
                    </div> */}
                    <h1 className=" underline font-semibold ">Note</h1>
                    <p className="text-justify">{workout.notes}</p>
                    <div className="flex gap-10 justify-center mt-5">
                    <Link to={`/Editupdate/${workout.id}`}>
                        <button className=" bg-[#ffb701] w-24 font-semibold px-4 py-1 rounded-lg text-white">
                        Edit
                        </button>
                    </Link>
                    <Link to={`/Deleteupdate/${workout.id}`}>
                        <button className=" bg-red-400 w-24 font-semibold px-4 py-1 rounded-lg text-white">
                        Delete
                        </button>
                    </Link>
                </div>
            </div>
            ))}
        </div>
          
        
        </div>
      );
};
export default Meals;