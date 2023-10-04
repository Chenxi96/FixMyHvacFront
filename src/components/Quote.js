import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Quote() {
    const {getAccessTokenSilently} = useAuth0();

    
    const submitChange = async () => {
        console.log('test')
        const accessToken = await getAccessTokenSilently();
        await axios.postForm('https://fix-my-hvac.onrender.com/address', document.querySelector('#form'), {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }

    return (
        <>
            <form id="form" onSubmit={submitChange}>
                <label for="address">Address</label>
                <input type="text" name="address" id="address"  /><br/>
                <label for="name">Job Title</label>
                <input type="text" name="name" id="name"  /><br/>
                <label for="description">Description</label>
                <textarea type="text" name="description" id="description" ></textarea><br/>
                <label for="images">Images</label>
                <input type="file" multiple name="images" id="images"  /><br/>
                <input type="submit" value="Save" />
            </form>
        </>
    )
}