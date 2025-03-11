import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TVShowsList from '../tvShowsList/TVShowsList';
import TVShowsDetails from '../tvShowsDetails/TVShowsDetails';

const TVShowsRoutes = () => {
    const routes = [
        {
            viewId: "tv-shows",
            path: "",
            component: <TVShowsList />,
        },
        // {
        //     viewId: "tv-shows-details",
        //     path: ":id",
        //     component: <TVShowsDetails />,
        // },
    ];

    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.viewId}
                    path={route.path}
                    element={route.component}
                />
            ))}
        </Routes>
    );
}

export default TVShowsRoutes;