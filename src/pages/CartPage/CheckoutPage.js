import React from 'react';
import Col from "../../components/mui/Grid/Col";
import {Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, TextField} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import styles from "./CartPage.module.css";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Link} from "react-router-dom";
import Row from "../../components/mui/Grid/Row";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";
import SideBox from "../../components/pages/ShopPage/SideBox";

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherite" to="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        صفحه تسویه حساب
    </Typography>,
];

const CheckoutPage = () => {
    return (
        <Row spacing={4}>
            <Col xs={12} />
            <Col xs={12}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12} sx={{display: {xs: "none", sm: "block"}}}>
                <div className={styles.titleWrapper}>
                    <Link to="/cart-list" style={{fontSize: "25px", color: '#999999'}}>سبد خرید</Link>
                    <ArrowBackIcon sx={{m: "0 20px"}}/>
                    <Typography fontSize={25}>جزئیات تسویه حساب</Typography>
                    <ArrowBackIcon sx={{m: "0 20px"}}/>
                    <Typography fontSize={25} color="inherit.main">ثبت سفارش</Typography>
                </div>
            </Col>
            <Col xs={12}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        کد تخیفف دارید؟ اینجا کلیک کنید
                    </AccordionSummary>
                    <AccordionDetails sx={{display: 'flex', alignItems: 'center'}}>
                        <TextField
                            variant="outlined"
                            label="کد تخفیف"
                        />
                        <Button variant="contained" color="secondary" sx={{ml: "10px"}}>اعمال کد تخفیف</Button>
                    </AccordionDetails>
                </Accordion>
            </Col>
            <Col xs={12} sm={6}>
                <SideBox title="جزئیات صورتحساب"></SideBox>
            </Col>
            <Col xs={12} sm={6}>
                <SideBox title="سفارش شما"></SideBox>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

export default CheckoutPage;