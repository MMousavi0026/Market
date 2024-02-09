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

export default menuData;