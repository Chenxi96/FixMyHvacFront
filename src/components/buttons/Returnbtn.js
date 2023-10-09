import React from "react";
import { useNavigate } from "react-router-dom";

export default function Return() {
    const navigate = useNavigate();

    return <button onClick={() => navigate('/loggedIn')} >Return</button>
}