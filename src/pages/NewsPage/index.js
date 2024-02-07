import React, {useCallback, useContext, useState} from 'react';
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import {Breadcrumbs, Pagination, TextField} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import SideBox from "../../components/pages/ShopPage/SideBox";
import Button from "@mui/material/Button";
import LinkIcon from '@mui/icons-material/Link';
import newsData from "../../data/newsData";
import styles from "./NewsPage.module.css";

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        محصولات
    </Typography>,
];

const NewsPage = () => {
    const [dataList, setDate] = useState(newsData.slice(0,4))

    const onPaginationChange = useCallback((_, index) => (
        setDate(newsData.slice((index - 1) * 4, index * 4))
    ), [newsData])

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col xs={12} className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12}>
                <Row>
                    <Col xs={8}>
                        <Row>
                            {
                                dataList.map((item, index) => (
                                    <Col xs={6} key={index}>
                                        <div style={{borderRadius:"solid #01e281 1px"}}>
                                            <img src={item.imgSrc} alt={item.title}/>
                                            <Typography>{item.title}</Typography>
                                            <Typography>{item.date}</Typography>
                                            <Typography>{item.desc}</Typography>
                                            <Button variant="contained" color="secondary">
                                                <LinkIcon/>
                                                <Typography>ادامه مطلب</Typography>
                                            </Button>
                                        </div>
                                    </Col>
                                ))
                            }
                            <Col xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                <Pagination count={newsData.length/4} color="primary" onChange={onPaginationChange} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={12}>
                                <SideBox title="جستجو">
                                    <TextField
                                        label="جستجو"
                                        type="text"
                                    />
                                    <Button variant="contained" color="secondary">جستجو</Button>
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="برچسب ها">
                                    <Button variant="contained" color="white">تنقلات</Button>
                                    <Button variant="contained" color="white">حبوبات</Button>
                                    <Button variant="contained" color="white">لبنیات</Button>
                                    <Button variant="contained" color="white">میوه</Button>
                                    <Button variant="contained" color="white">سفارش آنلاین</Button>
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="تبلیغات ساده">
                                    <img src="/img/ads.jpg" alt="تبلیغات" style={{borderRadius:"20px"}}/>
                                </SideBox>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default NewsPage;