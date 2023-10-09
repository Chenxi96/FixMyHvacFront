import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function AllQuotes() {
    const { getAccessTokenSilently } = useAuth0();
    const [quotes, setQuotes] = useState();

    useEffect(() => {

        async function fetch() {
            const accessToken = await getAccessTokenSilently();
            await axios({
            method: 'get',
            url: 'https://fix-my-hvac.onrender.com/getAllImage',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
            })
            .then(data => {
                setQuotes(data.data)
            })
        }

        fetch()
        return () => {
            fetch()
        }
    }, [setQuotes, getAccessTokenSilently])

    if(quotes) {
        return (
            quotes.map(quote => (
                <>
                    <p>{quote.name}</p>
                    <p>{quote.description}</p>
                    {quote.images.map(image => (
                        <img height={50} width={50} src={image.url} alt={image.imageName} />
                    ))}
                </>
            ))
        )
    }

    return <p>No Quotes</p>
}