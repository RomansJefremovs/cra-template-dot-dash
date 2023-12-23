import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Divider, Grid, Hidden, useTheme} from "@mui/material";



interface FooterProps{
    copyright:React.ReactNode
    leftTop?:React.ReactNode
    centerTop?:React.ReactNode
    rightTop?:React.ReactNode
    text?:React.ReactNode,
    bgColor?:string
}
export default function Footer({copyright, leftTop, rightTop, centerTop, text,bgColor}:FooterProps) {

   const theme = useTheme();
    return (


                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        // mt: '-50px',
                        mx: 'auto',
                        backgroundColor: bgColor
                    }}
                >
                    <Grid mt={'50px'} justifyContent={'space-around'}  columns={16} container direction={'row'} alignItems={'center'}>
                      <Hidden mdDown>
                          <Grid xs={5} item>{leftTop}</Grid>
                      </Hidden>
                        <Grid textAlign={'center'} xs={12} md={2} item>{centerTop}</Grid>
                        <Hidden mdDown>
                            <Grid xs={5} item>{rightTop}</Grid>
                        </Hidden>
                    </Grid>
                    <Divider sx={{my:5}} color={theme.palette.background.default}/>
                    <Container maxWidth="sm">
                        {/*<Typography variant="body1">*/}
                            {text}
                        {/*</Typography>*/}
                        {copyright}
                    </Container>
                </Box>

    );
}