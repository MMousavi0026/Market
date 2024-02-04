import React from 'react';
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import SideBox from "../../components/pages/productsPage/SideBox";
import {Breadcrumbs, Rating} from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Slider from "react-slick";
import {productsCategorization, reviewsOfRecentProducts} from "../../data/productsPage";
import styles from './products.module.css'

const ProductsPage = () => {
    const breadcrumbs = [
        <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
            <HomeIcon style={{fontSize:'18px'}}/>
        </Link>,
        <Typography fontSize={"18px"} key="2" color="text.primary">
            محصولات
        </Typography>,
    ];

    const valuetext = (value) => {
        return `${value} تومان`;
    }
    const [value, setValue] = React.useState([0, 20]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col>
                <Row>
                    <Col>
                        <Row>

                        </Row>
                    </Col>
                    <Col sx={{position:"sticky"}}>
                        <Row rowSpacing={4} flexDirection="column">
                            <Col>
                                <SideBox title="فیلتر بر اساس قیمت">
                                    <Slider
                                        getAriaLabel={() => 'Price range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </SideBox>
                            </Col>
                            <Col>
                                <SideBox title="دسته بندی محصولات">
                                    {
                                        productsCategorization.map((item) => (
                                            <ListItem className={styles.sideBoxItemWrapper}>
                                                <Link to={item.to}>
                                                    <Typography className={styles.sideBoxItem}>{item.title}</Typography>
                                                </Link>
                                            </ListItem>
                                        ))
                                    }
                                </SideBox>
                            </Col>
                            <Col>
                                <SideBox title="نقدهای محصولات اخیر">
                                    {
                                        reviewsOfRecentProducts.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <div style={{display:"flex", flexDirection:"row", alignItems:'center', justifyContent:'space-between', width:'80%', margin:"10px 0"}}>
                                                    <img src={item.imgSrc} alt={item.title} style={{width: "90px", borderRadius: "10px"}}/>
                                                    <div>
                                                        <Typography variant="body1">{item.title}</Typography>
                                                        <Rating name="read-only" value={item.ratingNum} readOnly />
                                                        <Typography variant="body2">{item.desc}</Typography>
                                                    </div>
                                                </div>
                                                {index !== reviewsOfRecentProducts.length - 1 && <Divider/>}
                                            </React.Fragment>
                                        ))
                                    }
                                </SideBox>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ProductsPage;