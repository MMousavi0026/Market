import React from 'react';
import Grid from "@mui/material/Grid";
import RTLDirection from "../../RTLDirection";
import Row from "./Row";

const Col = (props) => {
    return (
        <RTLDirection>
            <Grid {...props} item/>
        </RTLDirection>
    );
};

Row.propTypes = {
    // ...GridProps
}


export default Col;