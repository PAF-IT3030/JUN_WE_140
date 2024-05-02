import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DeleteUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteWorkout = () => {
        axios
          .delete(`http://localhost:8081/workout/${id}`)
          .then(() => {
            navigate("/updates");
          })
          .catch((err) => {
            alert("Somethnig went wrong..");
            console.log(err);
          });
    };

    return (
        <div className="p-4 mx-10">
          <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] mt-20 p-8 mx-auto">
            <h3 className="text-2xl">
                Are you sure you want to delete this Workout
            </h3>

            <div className="flex justify-center mt-8 gap-10">
              <button
                onClick={handleDeleteWorkout}
                className="bg-red-600 text-white p-2 w-28 rounded-lg font-semibold"
            >
            Yes, Delete
          </button>
          <Link to="/updates">
            <button className="bg-sky-600 text-white p-2 w-28 rounded-lg font-semibold">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
        );
    };

    export default DeleteUpdate;
