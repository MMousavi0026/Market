import React from 'react';
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import Menu from "@mui/material/Menu";
import styles from "./NMenu.module.scss";

const NMenuButton = ({children, title, to}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        children ? (
            <>
                <ListItem
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    sx={{width: "fit-content", cursor: "pointer", color: "white"}}
                    className={styles.menuItems}
                >
                    <Typography textAlign="center" className={styles.menuItem} fontSize="1rem">{title}</Typography>
                </ListItem>
                <Menu
                    id="basic-menu"
                    sx={{pointerEvents: 'none'}}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
                    transformOrigin={{vertical: 'top', horizontal: 'right',}}
                    onMouseLeave={handlePopoverClose}
                    disableScrollLock
                    slotProps={{paper: {className: styles.menuPaper}}}
                >
                    {children}
                </Menu>
            </>
        ) : (
            <NavLink
                style={({isActive}) =>
                    isActive ?
                        {
                            color: "#01e281",
                            backgroundColor: 'none'
                        }
                        : {
                            color: "white"
                        }
                } to={to}
            >
                <ListItem className={styles.menuItems}>
                    <Typography textAlign="center" className={styles.menuItem} fontSize="1rem">{title}</Typography>
                </ListItem>
            </NavLink>
        )
    );
};

export default NMenuButton;