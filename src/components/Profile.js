import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Profile = () => {
  const {user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [item, setItem] = useState()

  useEffect(() => {
    const getUserMetadata = async () => {
        try{
            const accessToken = await getAccessTokenSilently();
            await axios({
              url: 'https://fix-my-hvac.onrender.com/getAllImage',
              method: "GET",
              headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${accessToken}`
              }
            }).then(response => setItem(response.data))

        } catch(e) {
            console.log(e)
        }
    };
    getUserMetadata()
    return () => {
      getUserMetadata()
    }
  
  }, [getAccessTokenSilently, setItem]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )

  );
};

export default Profile;