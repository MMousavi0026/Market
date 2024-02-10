const menuData = [
    {
        title: "صفحه اصلی",
        to: "/"
    },
    {
        title: "ورود / ثبت نام",
        to: "/login"
    },
    {
        title: "همه محصولات",
        to: "/shop"
    },
    {
        title: "تخفیفات ویژه",
        type: "button",
        children: [
            {
                imgSrc: "/img/s1.png",
                title: "ماهی و آبزیان",
                to: "shop",
            },
            {
                imgSrc: "/img/s2.png",
                title: "میوه و سبزیجات",
                to: "shop",
            },
            {
                imgSrc: "/img/s3.png",
                title: "نان و غلات",
                to: "shop",
            },
            {
                imgSrc: "/img/s4.png",
                title: "لبنیات و پروتئین",
                to: "shop",
            },
            {
                imgSrc: "/img/s5.png",
                title: "شوینده و نظافتی",
                to: "shop",
            },
            {
                imgSrc: "/img/s6.png",
                title: "گوشت و استیک",
                to: "/shop",
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
                        to: "/shop"
                    },
                    {
                        title: "مرغ و ماهی",
                        to: "/shop"
                    },
                    {
                        title: "سبزیجات",
                        to: "/shop"
                    },
                    {
                        title: "لبنیات",
                        to: "/shop"
                    },
                    {
                        title: "نظافت و شستشو",
                        to: "/shop"
                    },
                    {
                        title: "پرفروش ترین ها",
                        to: "/shop"
                    },
                ]
            },
            {
                title: "برچسب ها",
                type: "list",
                children: [
                    {
                        title: "سس",
                        to: "/shop"
                    },
                    {
                        title: "سبزیجات",
                        to: "/shop"
                    },
                    {
                        title: "گوشت استیک",
                        to: "/shop"
                    },
                    {
                        title: "برگر",
                        to: "/shop"
                    },
                    {
                        title: "اسپری",
                        to: "/shop"
                    },
                ]
            },
            {
                title: "دسترسی سریع",
                type: "list",
                children: [
                    {
                        title: "سس",
                        to: "/shop"
                    },
                    {
                        title: "سبزیجات",
                        to: "/shop"
                    },
                    {
                        title: "گوشت استیک",
                        to: "/shop"
                    },
                    {
                        title: "برگر",
                        to: "/shop"
                    },
                    {
                        title: "اسپری",
                        to: "/shop"
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

export default menuData;