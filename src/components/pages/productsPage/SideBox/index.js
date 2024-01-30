import React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import styles from "./SideBox.module.css";

const SideBox = (data, title, children, ) => {
    return (
        <Box>
            <div>
                {title}
            </div>
            <List>
                {
                    data.map((item) => (
                        <ListItem className={styles.sideBoxItemWrapper}>
                            {children}
                            <Typography variant={h6} textAlign="center" className={styles.sideBoxItem}>{item.title}</Typography>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};

export default SideBox;