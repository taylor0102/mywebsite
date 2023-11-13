import {
    PostgreIcon, GQLIcon, AWSIcon, HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, ExpressIcon, PythonIcon, ViteIcon, VsCodeIcon, NpmIcon, GitIcon, FigmaIcon, NetlifyIcon, NextAuthIcon, ReduxIcon, TailwindIcon, VercelIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon
} from "../../assets/Icons"

import {
    NextmartLogo, DigitalLogo, CovidtraxLogo, FilmstackLogo,  PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, CubicuzLogo, DesignliLogo
} from "../../assets/Logos"

import {
    NextmartShots, DigitalShots, CovidTraxShots, FilmstackShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, CubicuzShots, DesignliShots
} from "../../assets/Shots"

export const ProjectsList = [
    {
        Name: "Cubicuz Solutions",
        ShortDesc: "Cubicuz Solutions is a leading technology service provider offering highly customized website and mobile app development, eCommerce portals, CRM, and custom software development. It is offering few services such as cloud hosting, etc.",
        Desc: "Cubicuz Solutions is a leading technology service provider offering highly customized website and mobile app development, eCommerce portals, CRM, and custom software development. Our team of web designers & developers, content specialists, sales executives, programmers, and SEO experts understand your marketing goals and develop cutting-edge strategies and innovative solutions that positively impact your bottom line. Our end goal? To help you gain better online exposure, increase your brand recognition, and maximize your digital ROI, ensuring that you’re geared for attracting and retaining customers.",
        Logo: CubicuzLogo,
        Shot: CubicuzShots,
        Theme: "#fff",
        Status: "completed",
        Link: "https://cubicuz.com/",
        Source: "https://cubicuz.com/",
        Tech: [PythonIcon, NodeIcon, ReactIcon, JsIcon, TailwindIcon, RestApiIcon, GitIcon, AWSIcon, PostgreIcon],
        hideProject: false,
        LogoSize: 50
    },
    {
        Name: "Next Mart",
        ShortDesc: "Discover an unparalleled shopping experience with Next Mart website. Unleash the power of online shopping with a diverse range of products.",
        Desc: "Discover an unparalleled shopping experience with Next Mart, an exceptional web app developed by ChiragChrg. Unleash the power of online shopping with a vast array of products at your fingertips",
        Logo: NextmartLogo,
        Shot: NextmartShots,
        Theme: "#090b0b",
        Status: "development",
        Link: "https://nextmart.vercel.app/",
        Source: "https://github.com/ChiragChrg/nextmart",
        Tech: [NextIcon, TsIcon, MongoIcon, NextAuthIcon, ReduxIcon, TailwindIcon, GitIcon],
        hideProject: true,
        LogoSize: 40
    },
    {
        Name: "Designli",
        ShortDesc: "For about Designli, is an Agile Software Development Agency. Designli for Startups and Small Businesses. And also Designli for Enterprise. For more information and to see our extensive work portfolio, visit https://designli.co",
        Desc: "Designli specializes in the rapid prototyping of new software concepts, taking our clients from vision to 'V1' as quickly and effectively as possible. Enterprises, mid-market businesses, startups, and entrepreneurs value our agile process because it yields working software quickly, and then allows us to iterate. Most software development companies take a project-based approach. This naturally puts them on a waterfall methodology. Waterfall isn't the best way to build software, though. When your business depends on your mobile app or custom software, choose a development partner who will build the right way. Established businesses also benefit from our agile workflows. They lean on Designli when launching new, software-driven initiatives for many of these same reasons, seeking internal buy-in while iterating quickly based on customer feedback. For more information and to see our extensive work portfolio, visit https://designli.co",
        Logo: DesignliLogo,
        Shot: DesignliShots,
        Theme: "#fff",
        Status: "completed",
        Link: "https://armss.netlify.app/",
        Source: "https://github.com/ChiragChrg/ARMS",
        Tech: [ReactIcon, NodeIcon, PostgreIcon, AWSIcon, GQLIcon, TailwindIcon, ReduxIcon, AWSIcon],
        hideProject: false,
        LogoSize: 55
    },
    {
        Name: "Digital Silk",
        ShortDesc: "Digital Silk creates custom websites to drive higher conversions and greater SEO value to grow brands online. From start-ups to Fortune 500, we have an outstanding track record on delivering on results.",
        Desc: "Digital Silk creates custom websites to drive higher conversions and greater SEO value to grow brands online. From start-ups to Fortune 500, we have an outstanding track record on delivering on results. Our clients include: SONY, Northwestern University, P&G, EV Universe, SNP Therapeutics, Xerox, NYU and others.",
        Logo: DigitalLogo,
        Shot: DigitalShots,
        Theme: "#001220",
        Status: "completed",
        Link: "https://www.digitalsilk.com/",
        Source: "https://www.digitalsilk.com/",
        Tech: [ReactIcon, NodeIcon, MongoIcon, SocketIoIcon, ExpressIcon, GitIcon, GQLIcon, AWSIcon, TailwindIcon],
        hideProject: false,
        LogoSize: 55
    },
    {
        Name: "FilmStack",
        ShortDesc: "Discover trending movies and access details of all films and search for any movie you desire. Easily search for any film and immerse in the world of cinema.",
        Desc: "FilmStack is the ultimate movie app that brings you all the details of trending films at your fingertips. Explore a vast collection of movies, access comprehensive information, and immerse yourself in the world of cinema. With FilmStack, you can effortlessly search for any movie, making it easy to find your favorite movies.",
        Logo: FilmstackLogo,
        Shot: FilmstackShots,
        Theme: "#fff",
        Status: "completed",
        Link: "https://filmstack.netlify.app/",
        Source: "https://github.com/ChiragChrg/FilmStack",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "CovidTrax",
        ShortDesc: "",
        Desc: "Search global COVID-19 statistics for each Country and Indian States and Districts",
        Logo: CovidtraxLogo,
        Shot: CovidTraxShots,
        Theme: "#fff",
        Status: "completed",
        Link: "https://covidtrax.netlify.app/",
        Source: "https://github.com/ChiragChrg/CovidTrax",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55
    },
]