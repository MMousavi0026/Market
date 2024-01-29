import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

const AccesMenuButton = ({title, Icon}) => {
    return (
        <Link color="#fff" sx={{display:'flex', alignItems:"center"}}>
            {Icon && <Icon fontSize="1rem" style={{marginLeft: "8px", color: '#546875'}}/>}
            <Typography  textAlign="center" fontSize="1rem">{title}</Typography>
        </Link>
    )
}

export default AccesMenuButton;