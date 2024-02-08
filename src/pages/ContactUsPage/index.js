import React from 'react';
import styles from "./ContectUs.module.css";
import Row from "../../components/mui/Grid/Row";
import {
    Breadcrumbs,
    FormControl,
    FormGroup,
    FormLabel,
    InputLabel,
    MenuItem,
    paperClasses, Select,
    TextField
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Col from "../../components/mui/Grid/Col";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Form} from "react-router-dom";
import Button from "@mui/material/Button";

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        تماس با ما
    </Typography>,
];

const ContactUsPage = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Row rowSpacing={4} className={styles.wrapper}>
            <Col xs={12} width="100%" className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12} width="100%">
                <Row spacing={4}>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <EmailIcon className={styles.icon}/>
                            <Typography className={styles.featureTitle} variant="h5" marginTop="10px">پشتیبانی</Typography>
                            <Link href="mailto:support@yoursite.com" sx={{cursor:"pointer", textDecoration:"none"}}>support@yoursite.com</Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <CallIcon className={styles.icon}/>
                            <Typography className={styles.featureTitle} variant="h5" marginTop="10px">تلفن تماس</Typography>
                            <Link href="tel:009822334455" sx={{textDecoration:"none"}}>۹۸۲۲۳۳۴۴۵۵+</Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <LocationOnIcon className={styles.icon}/>
                            <Typography className={styles.featureTitle} variant="h5" marginTop="10px">آدرس</Typography>
                            <Typography sx={{cursor:"pointer", textDecoration:"none"}}>تهران، خیابان آزادی</Typography>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={7} width="100%" >
                <form style={{backgroundColor:"#122d40", borderRadius:"30px", padding:"30px 30px", display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"center", boxShadow:'0 10px 15px 0 rgba(0, 0, 0, 0.4)'}}>
                    <Typography variant="h2" color="white.main" marginBottom={5} >با ما در ارتباط باشید</Typography>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", width:'100%', marginBottom:"20px"}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="نام"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            sx={{ width:"48%",
                                "& .MuiInputBase-input": {
                                    color: "white.main",
                                },
                                "& .MuiFormLabel-root": {
                                    color: "white.main",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white.main",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "secondary.main",
                                },
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="ایمیل"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            sx={{ width:"48%",
                                "& .MuiInputBase-input": {
                                    color: "white.main",
                                },
                                "& .MuiFormLabel-root": {
                                    color: "white.main",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white.main",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "secondary.main",
                                },
                            }}
                        />
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", width:'100%'}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="موضوع"
                            type="text"
                            variant="outlined"
                            color="secondary"
                            sx={{ width:"48%",
                                "& .MuiInputBase-input": {
                                    color: "white.main",
                                },
                                "& .MuiFormLabel-root": {
                                    color: "white.main",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white.main",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "secondary.main",
                                },
                            }}
                        />
                        <FormControl style={{ width:"48%" }}>
                            <InputLabel color="white" id="demo-simple-select-label">دپارتمان</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="دپارتمان"
                                onChange={handleChange}
                                color="secondary"
                                fullWidth
                                sx={{
                                    "& .MuiSelect-iconOutlined": {
                                        color: 'white.main !important',
                                    }
                                }}
                            >
                                <MenuItem value={10}>فروش</MenuItem>
                                <MenuItem value={20}>مشتری داری</MenuItem>
                                <MenuItem value={30}>پشتیبانی</MenuItem>
                                <MenuItem value={30}>سایر</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <TextField
                        required
                        id="outlined-required"
                        label="دیدگاه شما"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        multiline
                        rows={4}
                        sx={{marginTop:"20px",
                            "& .MuiInputBase-input": {
                                color: "white.main",
                            },
                            "& .MuiFormLabel-root": {
                                color: "white.main",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white.main",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "secondary.main",
                            }
                        }}
                    />
                    <Button variant="contained" color="secondary" sx={{padding:"10px 30px", mt:'20px'}} >
                        <Typography fontSize={20}>ارسال</Typography>
                    </Button>
                </form>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

export default ContactUsPage;