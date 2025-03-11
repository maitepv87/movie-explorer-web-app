import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Grid } from '@mui/material';
import TVShowInfoCard from '../components/TVShowInfoCard';

const TVShowsList = () => {
    const navigate = useNavigate();

    const [tvShows, setTVShows] = useState([]);
    const [tvShow, setTVShow] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = 'e8752c25ec72a395c2e9f279e9b4e18f';

    // Get TV Shows from the API
    const getTVShowsDataFromAPI = () => {
        const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;

        axios.get(url)
            .then(response => {
                // console.log("API Response:", response.data.results);
                setTVShows(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getTVShowsDataFromAPI();
    }, []);

    const handleTVShowClick = (tvShowId) => {
        const url = `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${apiKey}&language=en-US`;

        axios.get(url)
            .then(response => {
                console.log("API TV-Show:", response.data);
                setTVShow(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });

        // Navigate to the TVShowDetails path
        navigate(`/tv-shows/${tvShowId}`);

    }

    return (
        <Grid container spacing={2} >
            {tvShows.map((tvShow) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={tvShow.id}>
                    <TVShowInfoCard tvShow={tvShow} onClick={handleTVShowClick} />
                </Grid>
            ))}
        </Grid>
    );
};

export default TVShowsList;