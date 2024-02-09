import React from 'react';
import styles from "./NewsItem.module.css";
import LinkIcon from "@mui/icons-material/Link";

const NewsItemComponent = ({title, imgSrc, desc, date}) => {
    return (
        <div className={styles.box6Item}>
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
                    marginTop: '15px'
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
                        height: "50px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: '15px',
                        color: '#49607e',
                        textAlign: 'right',
                        paddingTop: '20px',
                        marginTop: '-12px',
                        borderTop: 'rgba(128, 128, 128, 0.2) solid 1px'
                    }}
                >
                    {desc}
                </span>
            </div>
            <div className={styles.box6ItemLink}>
                <LinkIcon/>
            </div>
        </div>
    );
};

export default NewsItemComponent;