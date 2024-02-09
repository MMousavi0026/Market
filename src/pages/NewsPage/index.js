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
import {newsList} from "../../data/newsList";
import styles from "./NewsPage.module.css";
import {tags} from "../../data/tags";

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        محصولات
    </Typography>,
];

const NewsPage = () => {
    const [dataList, setData] = useState(newsList.slice(0,4));

    const onPaginationChange = useCallback((_, index) => (
        setData(newsList.slice((index - 1) * 4, index * 4))
    ), [newsList])

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col xs={12}/>
            <Col xs={12} className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12}/>
            <Col xs={12}>
                <Row columnSpacing={4}>
                    <Col xs={8}>
                        <Row spacing={4}>
                            {
                                dataList.map((item, index) => (
                                    <Col xs={6} key={index}>
                                        <div className={styles.newsItem}>
                                            <Button sx={{borderRadius:"20px", mb:"10px"}}>
                                                <img src={item.imgSrc} alt={item.title} width="100%" style={{borderRadius:"20px"}} />
                                            </Button>
                                            <Link fontSize={25} href="/" className={styles.newsItemTitle}>{item.title}</Link>
                                            <Typography fontSize={15} display="block" color="text.secondary" margin="10px 0">{item.date}</Typography>
                                            <Typography fontSize={17} display="block" color="text.primary" className={styles.newsItemDesc}>{item.desc}</Typography>
                                            <Button variant="contained" color="secondary" sx={{mt:"20px"}}>
                                                <LinkIcon/>
                                                <Typography>ادامه مطلب</Typography>
                                            </Button>
                                        </div>
                                    </Col>
                                ))
                            }
                            <Col xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                <Pagination count={Math.ceil(newsList.length / 4)} color="primary" onChange={onPaginationChange} />
                            </Col>
                            <Col xs={12}/>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <Row rowSpacing={4}>
                            <Col xs={12}>
                                <SideBox title="جستجو">
                                    <div style={{display:"flex", alignItems:"center"}}>
                                        <TextField
                                            label="جستجو"
                                            type="text"
                                            sx={{mr:2.5, backgroundColor:"white.main"}}
                                            color="secondary"
                                        />
                                        <Button variant="contained" color="secondary">جستجو</Button>
                                    </div>
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="برچسب ها">
                                    {
                                        tags.map((item, index) => (
                                            <Link href="#">
                                                <Button variant="contained" color="white" sx={{ml:'10px', mb:'10px'}}>{item}</Button>
                                            </Link>
                                        ))
                                    }
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="تبلیغات ساده">
                                    <Link href="#" >
                                        <img src="/img/ads.jpg" alt="تبلیغات" style={{borderRadius:"20px", marginTop:'15px'}}/>
                                    </Link>
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