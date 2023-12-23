import {Box, Grid, useMediaQuery, useTheme} from '@mui/material';
import React from "react";

interface BookingSectionProps {
    children: React.ReactNode | React.ReactNode[]
    backgroundImage?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ children, backgroundImage }) => {
    const theme = useTheme();
    // Use media queries for responsiveness
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return(
    <Box

        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: isMobile ? 1 : 4, // padding adjusted for mobile
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // color: 'white',
            // height: '100vh', // full height of the viewport
        }}
    >
        {children}
    </Box>
);}

export default BookingSection;
