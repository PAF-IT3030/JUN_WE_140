import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Updates = () => {
    const [workouts, setWorkouts] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:8080/student/add")
        .then((res) => setWorkouts(res.data))
        .catch((err) => console.log(err));
    }, []);

};

export default Updates;