import React, {useCallback} from 'react';
import {AppBar, Toolbar} from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ProductsCategorization from "../../productsCategorization/productsCategorization";
import NMenuButton from "./NMenuButton";
import Col from "../../mui/Layout/Col";
import Row from "../../mui/Layout/Row";
import FolderIcon from "@mui/icons-material/Folder";
import styles from "./NMenu.module.scss";
import AccesMenuButton from "./accesMenuButton";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Divider from "@mui/material/Divider";
import LinkIcon from "@mui/icons-material/Link";

const NavMenu = () => {

    const processElements = useCallback((data) => (
        data.map((item, index) => (
            <NMenuButton fontSize="1.2rem"{...item}>
                {
                    item.children?.length && (
                        item.type === "button" ?
                            <Row spacing={2} sx={{padding:"10px"}}>
                                {
                                    item.children.map((discountDataItem) => {
                                        return(
                                            <Col xs={2.2}>
                                                <ProductsCategorization titleColor="white" discount="۲۰٪ تخفیف" {...discountDataItem} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        :
                            <Row spacing={3} sx={{padding:"10px 24px"}}>
                                <Col className={styles.NMenuList}>
                                    {
                                        item.children && item.children.length > 0 ?
                                            processElements(item.children) : null
                                    }
                                </Col>
                            </Row>
                    )
                }
            </NMenuButton>
        ))
    ))

    const menuData = [
        {
            title: "خانه",
            to: "/"
        },
        {
            title: "ورود / ثبت نام",
            to: "/login"
        },
        {
            title: "همه محصولات",
            to: "/products"
        },
        {
            title: "تخفیفات ویژه",
            type: "button",
            children: [
                {
                    imgSrc: "/img/s1.png",
                    title: "ماهی و آبزیان",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s2.png",
                    title: "میوه و سبزیجات",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s3.png",
                    title: "نان و غلات",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s4.png",
                    title: "لبنیات و پروتئین",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s5.png",
                    title: "شوینده و نظافتی",
                    to: "/fish",
                },
                {
                    imgSrc: "/img/s6.png",
                    title: "گوشت و استیک",
                    to: "/fish",
                },
            ]
        },
        {
            title: "دسترسی سریع",
            type: "list",
            children: [
                {
                    title: "دسته بندی",
                    type: "list",
                    children: [
                        {
                            title: "سوپر مارکت",
                            to: "/fish"
                        },
                        {
                            title: "مرغ و ماهی",
                            to: "/fish"
                        },
                        {
                            title: "سبزیجات",
                            to: "/fish"
                        },
                        {
                            title: "لبنیات",
                            to: "/fish"
                        },
                        {
                            title: "نظافت و شستشو",
                            to: "/fish"
                        },
                        {
                            title: "پرفروش ترین ها",
                            to: "/fish"
                        },
                    ]
                },
                {
                    title: "برچسب ها",
                    type: "list",
                    children: [
                        {
                            title: "سس",
                            to: "/fish"
                        },
                        {
                            title: "سبزیجات",
                            to: "/fish"
                        },
                        {
                            title: "گوشت استیک",
                            to: "/fish"
                        },
                        {
                            title: "برگر",
                            to: "/fish"
                        },
                        {
                            title: "اسپری",
                            to: "/fish"
                        },
                    ]
                },
                {
                    title: "دسترسی سریع",
                    type: "list",
                    children: [
                        {
                            title: "سس",
                            to: "/fish"
                        },
                        {
                            title: "سبزیجات",
                            to: "/fish"
                        },
                        {
                            title: "گوشت استیک",
                            to: "/fish"
                        },
                        {
                            title: "برگر",
                            to: "/fish"
                        },
                        {
                            title: "اسپری",
                            to: "/fish"
                        },
                    ]
                },
            ]
        },
        {
            title: "اخبار",
            to: "/news"
        },
        {
            title: "تماس با ما",
            to: "/contact-us"
        },
    ]

    return (
        <AppBar position="static" color="tertiary" className={styles.navAppBar}>
            <Toolbar className={styles.navToolbar}>
                <List component="nav" aria-label="main mailbox folders" className={styles.navList}>
                    {processElements(menuData)}
                </List>
                <Button variant="contained" className={styles.giftButton}>
                    <CardGiftcardIcon className={styles.giftIcon}/>
                    <Typography  fontSize="1rem">
                        تخففیفات روزانه
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavMenu;