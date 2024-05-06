import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo_jpg from '../Images/workout1.jpg'; // Import the workout1.png image

const Updates = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/workouts") // Update the API endpoint to fetch workout data
            .then((res) => setWorkouts(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="w-full absolute px-20 ">
            <div className="mt-24 text-center"> {/* Move "Add New" button to the middle */}
                <Link to="/Createupdates">
                    {" "}
                    <button className="bg-[#ffb703] px-8 py-1 rounded-lg text-white">
                        Add New Workout {/* Update button text to "Add New Workout" */}
                    </button>
                </Link>
            </div>
            <div className="my-10 flex flex-wrap justify-center gap-5 ">
                {workouts.map((workout) => (
                    <div
                        className="w-[300px] h-auto flex flex-col justify-between rounded-lg ring-1 ring-[#ffb703] shadow-lg p-5 text-center "
                        key={workout.id}
                    >
                        <h1 className="text-2xl font-bold mb-5">{workout.exercise}</h1>
                        <div className="flex justify-center gap-8 items-center mb-5">
                            <h1>
                                <span className="text-lg font-semibold ">Sets: </span>
                                {workout.sets}
                            </h1>
                            <h1>
                                <span className="text-lg font-semibold ">Reps: </span>
                                {workout.reps}
                            </h1>
                        </div>
                        <div className="mb-5">
                            <h1 className="text-lg font-semibold ">Weight</h1>
                            <h1>{workout.weight}</h1>
                        </div>
                        <h1 className="underline font-semibold ">Note</h1>
                        <p className="text-justify">{workout.notes}</p>
                        <div className="flex gap-10 justify-center mt-5">
                            <Link to={`/Editupdate/${workout.id}`}>
                                <button className="bg-[#ffb701] w-24 font-semibold px-4 py-1 rounded-lg text-white">
                                    Edit
                                </button>
                            </Link>
                            <Link to={`/Deleteupdate/${workout.id}`}>
                                <button className="bg-red-400 w-24 font-semibold px-4 py-1 rounded-lg text-white">
                                    Delete
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {/* Image similar to Meals.js */}
            <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden mb-8 bg-white border border-gray-300">
                <img src={Logo_jpg} alt="Workout" className="w-full h-auto" />
                {/* Description */}
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Workout Description:</h2>
                    <p className="text-sm text-gray-700">
                        Sets: Complete 3 sets of 12 reps for each exercise.<br />
                        Reps: Aim to perform 12 repetitions of each exercise in one set.<br />
                        Weight: 95KG<br />
                        Note: Focus on maintaining proper form throughout each set. If the weight is too heavy and compromises your form, reduce the weight to avoid injury.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Updates;
