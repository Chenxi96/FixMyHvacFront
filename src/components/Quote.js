import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quote() {
    const {getAccessTokenSilently} = useAuth0();
    const navigate = useNavigate();


    const submitChange = async (event) => {
        event.preventDefault()
        const accessToken = await getAccessTokenSilently();
        const form = document.getElementById('form')
        const formData = new FormData(form)
        await axios.post('https://fix-my-hvac.onrender.com/address', formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(res => console.log(res))
        .catch(e => console.log(e))
            console.log('from local')
            navigate('/allQuotes')
    }


    return (
        <>
            <form id="form" onSubmit={submitChange} >
                <label for="address">Address</label>
                <input type="text" name="address" id="address"  /><br/>
                <label for="name">Job Title</label>
                <input type="text" name="name" id="name"  /><br/>
                <label for="description">Description</label>
                <textarea type="text" name="description" id="description" ></textarea><br/>
                <label for="images">Images</label>
                <input type="file" name="images" id="images" multiple /><br/>
                <input type="submit" value="Save" />
            </form>
            {form}
        </>
    )
}