import React from 'react';
import { Tooltip, Fab } from '@mui/material';

const ActionButton = ({ title, icon, onClick, size = "medium" }) => {
    return (
        <Tooltip title={title}>
            <Fab size={size} aria-label={title} onClick={onClick}>
                {icon}
            </Fab>
        </Tooltip>
    );
};

export default ActionButton;
