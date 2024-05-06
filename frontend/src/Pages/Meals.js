import { Box, Divider, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";
import RightSideBar from "../Components/RightSideBar";
import Logo_jpg from '../Images/meal1.jpg';



const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
      axios
          .get("http://localhost:8080/student/add")
          .then((res) => setMeals(res.data))
          .catch((err) => console.log(err));
  }, []);

  // Sample meal details
  const sampleMeal = {
      title: "A heart-healthy breakfast",
      plan: "Breakfast: Oatmeal with pumpkin seeds and berries\nLunch: Salad with salmon, hard-boiled eggs and beans\nDinner: Baked salmon with roasted vegetables",
      calories: 45
  };

  return (
      <Box>
          <Stack direction="row" justifyContent="space-between">
              <SideBar />
              <Divider orientation="vertical" variant="fullwidth" flexItem />
              <div className="w-full relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-8 text-center">
                      <Link to="/CreateMeal">
                          <button className="bg-[#ffb703] px-8 py-1 rounded-lg text-white">
                              Add New Meal
                          </button>
                      </Link>
                  </div>
                  <div className="px-20 my-10 flex flex-wrap justify-center gap-5">
                      {/* Displaying meals from API */}
                      {meals.map((meal) => (
                          <div
                              className="w-[300px] h-auto flex flex-col justify-between rounded-lg ring-1 ring-[#ffb703] shadow-lg p-5 text-center"
                              key={meal.id}
                          >
                              <h1 className="text-2xl font-bold mb-5">{meal.title}</h1>
                              <div className="flex justify-center gap-8 items-center mb-5">
                                  <h1>
                                      <span className="text-lg font-semibold">Owner: </span>
                                      {meal.owner}
                                  </h1>
                                  <h1>
                                      <span className="text-lg font-semibold">Calories: </span>
                                      {meal.calories}
                                  </h1>
                              </div>
                              <h1 className="underline font-semibold">Plan</h1>
                              <p className="text-justify">{meal.plan}</p>
                              <div className="flex gap-10 justify-center mt-5">
                                  <Link to={`/Editupdate/${meal.id}`}>
                                      <button className="bg-[#ffb701] w-24 font-semibold px-4 py-1 rounded-lg text-white">
                                          Edit
                                      </button>
                                  </Link>
                                  <Link to={`/Deleteupdate/${meal.id}`}>
                                      <button className="bg-red-400 w-24 font-semibold px-4 py-1 rounded-lg text-white">
                                          Delete
                                      </button>
                                  </Link>
                              </div>
                          </div>
                      ))}
                  </div>
                  {/* Instagram post */}
                  <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden mb-8 bg-white border border-gray-300">
                      <img src={Logo_jpg} alt="Meal" className="w-full h-auto" />
                      <div className="p-4">
                          <div className="flex items-center mb-2">
                              <span className="font-semibold mr-2">45 Calories</span>
                              <div className="flex-grow border-t border-gray-300"></div>
                          </div>
                          <p className="text-sm mb-2">{sampleMeal.title}</p>
                          <p className="text-xs text-gray-500 mb-2">{sampleMeal.plan}</p>
                          <div className="flex justify-between items-center">
                              <div>
                                  <button className="text-gray-600 hover:text-gray-800">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                  </button>
                                  <span className="text-xs ml-1">Like</span>
                              </div>
                              <div>
                                  <button className="text-gray-600 hover:text-gray-800">
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10a4 4 0 00-8 0v2a4 4 0 008 0v-2z"></path></svg>
                                  </button>
                                  <span className="text-xs ml-1">Comment</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <Divider orientation="vertical" variant="fullwidth" flexItem />
              <RightSideBar />
          </Stack>
      </Box>
  );
};

export default Meals;