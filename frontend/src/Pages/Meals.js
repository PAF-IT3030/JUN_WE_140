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
          
        
        </div>
      );
};
export default Meals;