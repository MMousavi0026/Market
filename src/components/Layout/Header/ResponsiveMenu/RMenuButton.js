import React, {useMemo} from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Collapse} from "@mui/material";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import styles from "./RMenu.module.scss";

const RMenuButton = ({children, title, selected, onClick, fontSize, to, Icon}) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const MenuButton = useMemo(()=> ({children, haveChildren}) => {
        return (
            haveChildren ?
                <>
                    {children}
                </>
                :
                <NavLink
                    to={to}
                    component={ListItemButton}
                    style={({isActive}) =>
                        isActive ?
                            {
                                color: "#01e281",
                                backgroundColor: 'none'
                            }
                            : {
                                color: "white"
                            }
                    }
                >
                    {children}
                </NavLink>
        )
    }, [to])

    return (
        <MenuButton style={{width:"100%", height:"100%"}} haveChildren={children}>
            <ListItemButton
                selected={selected}
                onClick={() => {
                    onClick();
                    handleClick()
                }}
            >
                {Icon && <Icon fontSize={fontSize} style={{marginLeft: "8px", color: '#546875'}}/>}
                <Typography  color="white" fontSize={fontSize}>{title}</Typography>
                {children ? (open ? <ExpandLess color="white"/> : <ExpandMore color="white"/>) : null}
            </ListItemButton>
            {
                children ?(
                    <Collapse in={open} timeout="auto" unmountOnExit classes={{wrapperInner: styles.collapse}}>
                        {children}
                    </Collapse>
                ) : null
            }
        </MenuButton>
    );
};

export default RMenuButton;