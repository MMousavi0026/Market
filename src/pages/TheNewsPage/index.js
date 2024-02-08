import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderIcon from '@mui/icons-material/Folder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Col from "../../components/mui/Grid/Col";
import {Breadcrumbs, Pagination, TextField} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Row from "../../components/mui/Grid/Row";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import {newsData} from "../../data/newsData";
import SideBox from "../../components/pages/ShopPage/SideBox";
import {tags} from "../../data/tags";
import HomeIcon from "@mui/icons-material/Home";
import styles from "../NewsPage/NewsPage.module.css";

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        محصولات
    </Typography>,
];

const TheNewsPage = () => {
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
                        <Row rowSpacing={4}>
                            <Col xs={12}>
                                <img src={newsData[0].imgSrc} alt={newsData[0].title} width="100%" style={{borderRadius:"20px"}}/>
                                <Typography fontSize={25} fontWeight="bold">{newsData[0].title}</Typography>
                                <Typography fontSize={20} display="block" margin="10px 0" >{newsData[0].desc}</Typography>
                            </Col>
                            <Col xs={12} className={styles.bottomItemWrapper} >
                                <div className={styles.bottomItem}>
                                    <PersonIcon color="secondary" fontSize="15px" className={styles.icon}/>
                                    <Button variant="outlined" color="primary" sx={{fontSize:"15px", ml:"7px"}}>{newsData[0].author}</Button>
                                </div>
                                <div className={styles.bottomItem}>
                                    <AccessTimeIcon color="secondary" fontSize="15px" className={styles.icon}/>
                                    <Button variant="outlined" color="primary" sx={{fontSize:"15px", ml:"7px"}}>{newsData[0].date}</Button>
                                </div>
                                <div className={styles.bottomItem}>
                                    <FolderIcon color="secondary" fontSize="15px" className={styles.icon}/>
                                    <Button variant="outlined" color="primary" sx={{fontSize:"15px", ml:"7px"}}>{newsData[0].categories}</Button>
                                </div>
                                <div className={styles.bottomItem}>
                                    <LocalOfferIcon color="secondary" fontSize="15px" className={styles.icon}/>
                                    <Button variant="outlined" color="primary" sx={{fontSize:"15px", ml:"7px"}}>{newsData[0].tag}</Button>
                                </div>

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

export default TheNewsPage;