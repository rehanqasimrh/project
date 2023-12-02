import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make a GET request using Axios when the component mounts
        axios.get('http://localhost:3001/users')
            .then(response => {
                console.log("response.data", response.data)
                setData(response.data); // Set the retrieved data in state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to execute only on mount

    // Render the retrieved data
    return (
        <div>
            <h1>Retrieved Data:</h1>
            <ul>
                {JSON.stringify(data)}
            </ul>
        </div>
    );
};

export default MyComponent;
