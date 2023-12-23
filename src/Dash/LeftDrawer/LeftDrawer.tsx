import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {useAuth} from "../../Contexts/Auth";

const drawerWidth = 240;
interface LeftDrawerProps {
    open: boolean;
    handleDrawerClose: () => void;
}
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

interface MenuItems {
    item: string;
    path: string;
}

const menuItems:MenuItems[] = [
    {item: 'Events', path: 'events'},
    {item: 'Weekly Wine', path: 'weekly-wine'},
    {item: 'Weekly Dish', path: 'weekly-dish'},
    {item: 'Wine Tasting', path: 'wine-tasting'},

]
const LeftDrawer = ({handleDrawerClose,open}:LeftDrawerProps) => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        // handleDrawerClose();
    };
    const {logout} = useAuth()
    // const theme = useTheme();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                // color: theme.palette.background.default,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    // bgcolor: theme.palette.warning.main,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <Typography variant={'body2'}>BIO Vinbar</Typography>
                <IconButton onClick={handleDrawerClose}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {menuItems.map(({item,path}, index) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton onClick={() => handleNavigation(`/admin-dashboard/${path}`)}>
                            <ListItemText><Typography variant={"body2"}>{item}</Typography></ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button variant={'text'} onClick={logout}>
                Log Out
            </Button>
        </Drawer>

  );
}

export default LeftDrawer