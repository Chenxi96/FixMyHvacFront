import React from "react";
import { useNavigate } from "react-router-dom";

export default function AllQuotebtn() {
    const navigate = useNavigate();
    
    return <button onClick={() => navigate('/allQuotes')} >All quotes</button>
}