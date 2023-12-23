import { Grid } from '@mui/material';
import React from "react";

interface GallerySectionProps {
    children: React.ReactNode | React.ReactNode[]
    backgroundColor?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ children, backgroundColor }) => (
    <Grid container spacing={2} style={{ padding: '16px', backgroundColor: backgroundColor??'transparent' }}>
        {children}
    </Grid>
);

export default GallerySection;
