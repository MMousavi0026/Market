import React from 'react';
import Styles from "./Product.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const ProductOption = ({iconName, title, iconVertical, iconHorizontal, textVertical, textHorizontal}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <button className={Styles.love} aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                <FontAwesomeIcon className={Styles.icon} icon={iconName} />
            </button>
            <Popover
                id="mouse-over-popover"
                sx={{pointerEvents: 'none'}}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{vertical: iconVertical, horizontal: iconHorizontal,}}
                transformOrigin={{vertical: textVertical, horizontal: textHorizontal,}}
                onClose={handlePopoverClose}
                disableScrollLock
                slotProps={{paper: { sx: {backgroundColor: 'transparent', boxShadow:'none'}}}}
            >
                <Typography variant="span" className={Styles.productOptionTitle}>{title}</Typography>
            </Popover>
        </div>
    );
};

export default ProductOption;