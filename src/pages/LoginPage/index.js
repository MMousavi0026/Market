import React from 'react';
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Index = () => {
    return (
        <div style={{marginTop:"200px", width:"100%", display:"flex", justifyContent:"center"}}>
            <Link href="/sign-up" style={{textDecoration:"none", }}>
                <Button variant="contained" color="secondary" sx={{padding: "20px 50px", marginLeft:"20px"}}>
                    <Typography fontSize="30px">ثبت نام</Typography>
                </Button>
            </Link>
            <Link href="/sign-in" style={{textDecoration:"none", }}>
                <Button variant="contained" color="secondary" sx={{padding: "20px 50px"}}>
                    <Typography fontSize="30px">ورود</Typography>
                </Button>
            </Link>
        </div>
    );
};

export default Index;