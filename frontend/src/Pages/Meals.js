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
};
export default Meals;