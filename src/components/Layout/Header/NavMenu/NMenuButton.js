import React, {useState} from 'react';
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import Menu from "@mui/material/Menu";
import styles from "./NMenu.module.scss";

const NMenuButton = ({children, title, to, elementVertical, elementHorizontal, childrenVertical, childrenHorizontal}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleHoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleHoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        children ? (
            <>
                <ListItem
                    id="basic-menu"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onMouseEnter={handleHoverOpen}
                    sx={{width: "fit-content", cursor: "pointer", color: "white"}}
                    className={styles.menuItems}
                >
                    <Typography textAlign="center" color="white" className={styles.menuItem+" "+styles.whiteColor} fontSize="1rem">{title}</Typography>
                </ListItem>
                <Menu
                    id="basic-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    anchorEl={anchorEl}
                    onMouseLeave={handleHoverClose}
                    anchorOrigin={{vertical: elementVertical, horizontal: elementHorizontal,}}
                    transformOrigin={{vertical: childrenVertical, horizontal: childrenHorizontal,}}
                    // disableScrollLock
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