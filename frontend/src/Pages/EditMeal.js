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
  
    
    };