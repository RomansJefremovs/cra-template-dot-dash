import {
    AppBar,
    Box,
    Button,
    Container,
    Grid, Hidden,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography, useTheme
} from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTo from "../../Hooks/useScollToElement/useScrollToElement";
interface AppNavigationProps{
    backgroundColor?: string;
    menuItems: string[];
    logo: string;
    socials?: React.ReactNode;
}

const AppNavigation = ({ menuItems}:AppNavigationProps) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const scrollTo = useScrollTo();
const theme = useTheme();
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (id:string) => {
        setAnchorElNav(null);
        scrollTo(id)
    };


    return (
        <AppBar sx={{
            width: '100%',
            backgroundColor:'transparent'
        }} elevation={0} position="absolute">
            <Container maxWidth="xl">
                <Toolbar component={Grid} container direction={'row'} justifyContent={'space-between'} disableGutters>
                    <Grid item md={2} container direction={'column'}  alignItems={'center'} width={'fit-content'}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                // display: { xs: 'none', md: 'flex' },
                                // fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: theme.palette.warning.main,
                                textDecoration: 'none',
                            }}
                        >
                            BIO
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                // display: { xs: 'none', md: 'flex' },
                                // fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: theme.palette.warning.main,
                                textDecoration: 'none',
                            }}
                        >
                            Vinbar
                        </Typography>
                    </Grid>

                    <Grid item md={8}>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'center' }}>
                        {menuItems.map((page) => (
                            <Button
                                key={page}
                                onClick={()=>handleCloseNavMenu(page)}
                                sx={{ my: 2, mx:2 }}
                            >
                                <Typography variant={'body1'} color={'white'}>{page}</Typography>
                            </Button>
                        ))}
                    </Box>
                    </Grid>
                    <Grid item xs={2} >
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color={'warning'}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Hidden mdUp>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    '.MuiMenu-paper':{
                                        backgroundColor:theme.palette.primary.main
                                    }

                                }}
                            >
                                {menuItems.map((page) => (
                                    <MenuItem key={page} onClick={()=>handleCloseNavMenu(page)}>
                                        <Typography variant={'body1'} color={theme.palette.success.main} textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Hidden>
                        </Box>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default  AppNavigation;