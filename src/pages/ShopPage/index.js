import React, {useCallback, useEffect, useRef, useState} from 'react';
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import SideBox from "../../components/pages/ShopPage/SideBox";
import {
    Breadcrumbs,
    FormControl, FormHelperText,
    InputLabel,
    MenuItem,
    Pagination,
    PaginationItem,
    Rating,
    Select
} from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import {productsCategories, reviewsOfRecentProducts} from "../../data/productsData";
import styles from './shopPage.module.css'
import {useLocation} from "react-router-dom";
import {productsList} from "../../data/productsData";
import Product from "../../components/pages/ShopPage/Product";
import RangeSlider, {valuetext} from "../../components/pages/ShopPage/RangeSlider";
import axios from "axios";

const Content = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    return (
        <Pagination
            page={page}
            count={2}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                    {...item}
                />
            )}
        />
    );
}

const ShopPage = () => {

    useEffect(() => {
        axios.get('https://json.xstack.ir/api/v1/products')
            .then(res => {
                setProductList(res.data.data);
                setData(res.data.data.slice(0, 6))
            })
    }, []);

    const [productList, setProductList] = useState([]);
    const [dataList, setData] = useState([]);
    const [age, setAge] = useState('');
    const [age2, setAge2] = useState('');

    const breadcrumbs = [
        <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
            <HomeIcon style={{fontSize:'18px'}}/>
        </Link>,
        <Typography fontSize={"18px"} key="2" color="text.primary">
            اخبار
        </Typography>,
    ];

    const pageHandleChange = (event) => {
        setAge(event.target.value);
    };

    const pageHandleChange2 = (event) => {
        setAge2(event.target.value);
    };

    const pageNumberRef = useRef(1)

    const onPaginationChange = useCallback((_, number)=> {
        pageNumberRef.current = number
        setData(productList.slice((number - 1) * 6, number * 6))
    }, [productList])

    const scroll = () => {
        window.scrollTo({
            top: 250 ,
            behavior: "smooth",
        })
    }

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col xs={12} className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12}/>
            <Col xs={12}>
                <Row spacing={6}>
                    <Col xs={12} lg={8}>
                        <Row rowSpacing={4}>
                            <Col xs={12} sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                                <Typography>نمایش {((pageNumberRef.current - 1) * 6) + 1} - {pageNumberRef.current * 6} از {productList.length} نتیجه</Typography>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 120 , color:"primary"}}>
                                        <InputLabel id="demo-simple-select-helper-label" >تعداد محصول در هر صفحه</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="تعداد محصول در هر صفحه"
                                            onChange={pageHandleChange}
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <i>تعداد محصول در هر صفحه</i>
                                            </MenuItem>
                                            <MenuItem value={10}>۴ محصول در هر صفحه</MenuItem>
                                            <MenuItem value={20}>۸  محصول در هر صفحه</MenuItem>
                                            <MenuItem value={30}>۱۶  محصول در هر صفحه</MenuItem>
                                            <MenuItem value={40}>۲۴  محصول در هر صفحه</MenuItem>
                                            <MenuItem value={50}>۳۲  محصول در هر صفحه</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">مرتب سازی پیشفرض</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age2}
                                            label="مرتب سازی پیشفرض"
                                            onChange={pageHandleChange2}
                                            fullWidth
                                        >
                                            <MenuItem value="">
                                                <i>مرتب سازی پیش فرض</i>
                                            </MenuItem>
                                            <MenuItem value={10}>مرتب سازی بر اساس محبوبیت</MenuItem>
                                            <MenuItem value={20}>مرتب سازی بر اساس امتیاز</MenuItem>
                                            <MenuItem value={30}>مرتب سازی بر اساس فروش</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <Row spacing={4}>
                                    {
                                        dataList.map((item, index) => (
                                            <Col key={index} xs={12} sm={6}>
                                                <Product {...item} to={`/shop/${item.id}`} />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                            <Col xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                <Pagination count={Math.ceil(productList.length / 6)} onClick={scroll} color="primary" onChange={onPaginationChange} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} sx={{position:"sticky"}}>
                        <Row rowSpacing={4} flexDirection="column">
                            <Col>
                                <SideBox title="فیلتر بر اساس قیمت" >
                                    <RangeSlider />
                                </SideBox>
                            </Col>
                            <Col>
                                <SideBox title="دسته بندی محصولات">
                                    {
                                        productsCategories.map((item) => (
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
                                                <div style={{display:"flex", flexDirection:"row", alignItems:'center', justifyContent:'space-between', width:'100%', margin:"10px 0"}}>
                                                    <img src={item.imgSrc} alt={item.title} style={{width: "90px", borderRadius: "10px"}}/>
                                                    <div>
                                                        <Typography variant="body1">{item.title}</Typography>
                                                        <Rating name="read-only" value={item.ratingNum} color="#faaf00" readOnly />
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
                    <Col xs={12} />
                </Row>
            </Col>
        </Row>
    );
};

export default ShopPage;