import React from 'react';
import Styles from "./ProductOption.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Popover from "@mui/material/Popover";

const ProductOption = ({iconName, title}) => {
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
                anchorOrigin={{vertical: 'center', horizontal: 'right',}}
                transformOrigin={{vertical: 'center', horizontal: 'left',}}
                onClose={handlePopoverClose}
                disableRestoreFocus
                slotProps={{paper: { sx: {backgroundColor: 'transparent', boxShadow:'none'}}}}
            >
                <span className={Styles.productOptionTitle}>{title}</span>
            </Popover>
        </div>
    );
};

export default ProductOption;