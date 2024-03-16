import React, {useState} from 'react';
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import styles from "./NMenu.module.css";

const NMenuButton = ({children, title, href, className}) => {

    return (
        children ? (
            <div className={styles.dropButton}>
                <ListItem
                    sx={{width: "fit-content", cursor: "pointer", color: "white"}}
                    className={styles.menuItems}
                >
                    <Typography textAlign="center" color="white" className={styles.menuItem+" "+styles.whiteColor} fontSize="1rem">{title}</Typography>
                </ListItem>
                <div className={styles.dropDown + ' ' + className}>
                    {children}
                </div>
            </div>
        ) : (
            <Link style={{color: "white"}} href={href}>
                <ListItem className={styles.menuItems}>
                    <Typography textAlign="center" className={styles.menuItem} fontSize="1rem">{title}</Typography>
                </ListItem>
            </Link>
        )
    );
};

export default NMenuButton;