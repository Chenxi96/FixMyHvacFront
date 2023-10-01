import React from "react";
import Profile from "../components/Profile";
import LogoutButton from "../components/buttons/Logout";
import Quote from "../components/Quote";

export default function CustomerPage() {
    return (
        <>
            <Profile />
            <Quote />
            <LogoutButton />
        </>
    )
}