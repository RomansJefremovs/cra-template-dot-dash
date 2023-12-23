import { Grid } from '@mui/material';
import React from "react";
interface MainContentProps {
    children: React.ReactNode[]|React.ReactNode;
    backgroundColor?: string;
}

const MainContent: React.FC<MainContentProps> = ({ children, backgroundColor }:MainContentProps) => (
    <Grid container spacing={2} style={{ padding: '16px', backgroundColor:backgroundColor??'transparent'}}>
        {children}
    </Grid>
);

export default MainContent;


