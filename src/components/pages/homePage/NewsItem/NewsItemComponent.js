import React from 'react';
import styles from "./NewsItem.module.css";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";

const NewsItemComponent = ({title, imgSrc, desc, date, to}) => {
    return (
        <Link to={to} className={styles.box6Item}>
            <div className={styles.button6}>
                <span style={{fontSize: ".7rem", color: "white"}}>{title}</span>
            </div>
            <img width='100%' style={{borderRadius: '20px'}} src={imgSrc} alt={title}/>
            <div
                style={{
                    width: '97%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginTop: '15px',
                    direction: "rtl"
                }}
            >
                <span
                    style={{
                        width: '120px',
                        fontSize: '15px',
                        color: '#01e281',
                        textAlign: 'center',
                        backgroundColor: 'white',
                        zIndex: '1'
                    }}
                >
                    {date}
                </span>
                <span
                    style={{
                        width: '100%',
                        height: "60px",
                        fontSize: '15px',
                        color: '#49607e',
                        textAlign: 'right',
                        paddingTop: '20px',
                        marginTop: '-12px',
                        borderTop: 'rgba(128, 128, 128, 0.2) solid 1px',
                    }}
                    className={styles.desc}
                >
                    {desc}
                </span>
            </div>
            <div className={styles.box6ItemLink}>
                <LinkIcon color="primary"/>
            </div>
        </Link>
    );
};

export default NewsItemComponent;