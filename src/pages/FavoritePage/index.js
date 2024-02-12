import React, {useState} from 'react';
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {Breadcrumbs} from "@mui/material";
import Col from "../../components/mui/Grid/Col";
import Row from "../../components/mui/Grid/Row";
import Product from "../../components/pages/ShopPage/Product";
import {productsList} from "../../data/productsData";

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" to="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        علاقمندی ها
    </Typography>,
];
const FavoritePage = () => {

    const [dataList] = useState(productsList.slice(0,4))

    return (
        <Row rowSpacing={4}>
            <Col xs={12} />
            <Col xs={12}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col>
                <Row spacing={4}>
                    {
                        dataList.map((item) => (
                            <Col xs={12} sm={2} lg={3}>
                                <Product closeIcon {...item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
            <Col xs={12} />
        </Row>
    );
};

export default FavoritePage;