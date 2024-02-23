const menuData = [
    {
        id: 1,
        title: "صفحه اصلی",
        to: "/"
    },
    {
        id: 2,
        title: "ورود / ثبت نام",
        to: "/login"
    },
    {
        id: 3,
        title: "همه محصولات",
        to: "/shop"
    },
    {
        id: 4,
        title: "تخفیفات ویژه",
        type: "button",
        elementVertical: 'bottom',
        elementHorizontal: 'right',
        childrenVertical: 'top',
        childrenHorizontal: 'right',
        children: [
            {
                id: 11,
                imgSrc: "/img/s1.png",
                title: "ماهی و آبزیان",
                to: "shop",
            },
            {
                id: 12,
                imgSrc: "/img/s2.png",
                title: "میوه و سبزیجات",
                to: "shop",
            },
            {
                id: 13,
                imgSrc: "/img/s3.png",
                title: "نان و غلات",
                to: "shop",
            },
            {
                id: 14,
                imgSrc: "/img/s4.png",
                title: "لبنیات و پروتئین",
                to: "shop",
            },
            {
                id: 15,
                imgSrc: "/img/s5.png",
                title: "شوینده و نظافتی",
                to: "shop",
            },
            {
                id: 16,
                imgSrc: "/img/s6.png",
                title: "گوشت و استیک",
                to: "/shop",
            },
        ]
    },
    {
        id: 5,
        title: "دسترسی سریع",
        type: "list",
        elementVertical: 'bottom',
        elementHorizontal: 'right',
        childrenVertical: 'top',
        childrenHorizontal: 'right',
        children: [
            {
                id: 17,
                title: "دسته بندی",
                type: "list",
                elementVertical: 'center',
                elementHorizontal: 'left',
                childrenVertical: 'top',
                childrenHorizontal: 'right',
                children: [
                    {
                        id: 20,
                        title: "سوپر مارکت",
                        to: "/shop"
                    },
                    {
                        id: 21,
                        title: "مرغ و ماهی",
                        to: "/shop"
                    },
                    {
                        id: 22,
                        title: "سبزیجات",
                        to: "/shop"
                    },
                    {
                        id: 23,
                        title: "لبنیات",
                        to: "/shop"
                    },
                    {
                        id: 24,
                        title: "نظافت و شستشو",
                        to: "/shop"
                    },
                    {
                        id: 25,
                        title: "پرفروش ترین ها",
                        to: "/shop"
                    },
                ]
            },
            {
                id: 18,
                title: "برچسب ها",
                type: "list",
                elementVertical: 'center',
                elementHorizontal: 'left',
                childrenVertical: 'top',
                childrenHorizontal: 'right',
                children: [
                    {
                        id: 26,
                        title: "سس",
                        to: "/shop"
                    },
                    {
                        id: 27,
                        title: "سبزیجات",
                        to: "/shop"
                    },
                    {
                        id: 28,
                        title: "گوشت استیک",
                        to: "/shop"
                    },
                    {
                        id: 29,
                        title: "برگر",
                        to: "/shop"
                    },
                    {
                        id: 30,
                        title: "اسپری",
                        to: "/shop"
                    },
                ]
            },
            {
                id: 19,
                title: "دسترسی سریع",
                type: "list",
                elementVertical: 'center',
                elementHorizontal: 'left',
                childrenVertical: 'top',
                childrenHorizontal: 'right',
                children: [
                    {
                        id: 31,
                        title: "سس",
                        to: "/shop"
                    },
                    {
                        id: 32,
                        title: "سبزیجات",
                        to: "/shop"
                    },
                    {
                        id: 33,
                        title: "گوشت استیک",
                        to: "/shop"
                    },
                    {
                        id: 34,
                        title: "برگر",
                        to: "/shop"
                    },
                    {
                        id: 35,
                        title: "اسپری",
                        to: "/shop"
                    },
                ]
            },
        ]
    },
    {
        id: 6,
        title: "اخبار",
        to: "/news"
    },
    {
        id: 7,
        title: "تماس با ما",
        to: "/contact-us"
    },
]

export default menuData;