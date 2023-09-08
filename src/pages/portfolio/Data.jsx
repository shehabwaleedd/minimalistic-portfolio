import Work0 from "../../assets/Posters/shebo2.png"
import Work2 from "../../assets/Posters/blog4.webp"
import Work3 from "../../assets/Posters/moaz3.png"
import Work4 from "../../assets/Posters/cairo1.svg"
import Work5 from "../../assets/Posters/blog7.png"
import Work6 from "../../assets/Posters/Jin2.png"
import Work7 from "../../assets/Posters/qaa3a.png"
import Work8 from "../../assets/Posters/eagle.png"
import Work9 from "../../assets/Posters/reve.png"
import Work10 from "../../assets/Posters/kemet.png"
import Work11 from "../../assets/Posters/cairostudio.png"
import ShebooMainImg from "../../assets/ProjectDetails/Sheboo/Shehab__mainPage.png"
import ShebooVideo from "../../assets/ProjectDetails/Sheboo/Shehab__video.mp4"
import ShebooCollective from "../../assets/ProjectDetails/Sheboo/Shehab__collective.png"
import BlogMainPage from "../../assets/ProjectDetails/Blog/blog_mainPage.png"
import BlogVideo from "../../assets/ProjectDetails/Blog/Blog_video.mp4"
import BlogCollective from "../../assets/ProjectDetails/Blog/Blog__collective.png"
import BlogMockup from "../../assets/ProjectDetails/Blog/video.mov"
import RollDiceMainPage from "../../assets/ProjectDetails/RollDice/RollDice__mainPage.png"
import JingMainPage from "../../assets/ProjectDetails/Jing/Jin__mainPage.png"
import JingVideo from "../../assets/ProjectDetails/Jing/Jinghui Ma.mp4"
import JingCollective from "../../assets/ProjectDetails/Jing/collective.png"
import MoaazMainPage from "../../assets/ProjectDetails/Moaaz/Moaaz__mainPage.png"
import MoaazVideo from "../../assets/ProjectDetails/Moaaz/Moaaz_video.mp4"
import MoaazColelctive from "../../assets/ProjectDetails/Moaaz/collective.png"
import MoaazMockup from "../../assets/ProjectDetails/Moaaz/video.mov"
import EagleMainImg from "../../assets/ProjectDetails/Eagle/Eagle__mainPage.png"
import EagleCollective from "../../assets/ProjectDetails/Eagle/Eagle__collective.png"
import EagleVideo from "../../assets/ProjectDetails/Eagle/video.mov"
import ReveMainImg from "../../assets/ProjectDetails/Reve/Reve__mainPage.png"
import KemetMainImg from "../../assets/ProjectDetails/Kemet/Kemet__mainPage.png"

const projectsData = [
  {
    id: 1,
    image: Work0,
    title: "Sheboo",
    category: ["Branding", "UI/UX Design", "Web Design"],
    website: "https://shehabwaleedd.vercel.app/",
    link: "https://github.com/shehabwaleedd/minimalistic-portfolio",
    date: "March, 2023",
    class: "shehab",
    comment: "I am commonly known as 'Sheboo' on various social media platforms, shaping my online identity. The primary aim of this project was to establish a versatile and adaptable identity that encompasses both my real name and nickname. As a frontend developer, it was essential to create a website that showcases my expertise, reflects my design principles, and establishes my unique identity. The goal was to develop a cohesive and recognizable personal brand that seamlessly translates between online and offline channels, ensuring a consistent representation across different mediums. This initiative aimed to optimize search engine visibility while presenting a professional and polished image.",
    mainTitle: "Main Page",
    mainTitleImg: ShebooMainImg,
    video: ShebooVideo,
    overView: "Overview",
    collective: ShebooCollective,
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#63b7b777",
    backgroundColor_mobile: "#63b7b777",
  },
  {
    id: 13,
    image: Work11,
    title: "Cairo Studio",
    category: ["Web Application", "UI/UX Design", "Web Design"],
    website: "https://cairo-studio.com/",
    link: "",
    date: "August, 2023",
    comment: "Cairo Studio stands as a dynamic powerhouse, where the fusion of innovation and artistry is the cornerstone of our mission. As a pioneering web and design agency, we don't just create web applications and designs; we sculpt digital experiences that resonate on a higher frequency. Our ambition lies in crafting exceptional, cutting-edge solutions that transcend the ordinary, elevating the standards of the local market. We are a team of passionate and creative individuals, driven by a shared vision to revolutionize the digital landscape in Egypt. Our team is committed to delivering excellence, with a focus on quality and attention to detail. We are Cairo Studio, and we are here to make a difference.",
    class: "cairo-studio",
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#4D2CF19a",
    backgroundColor_mobile: "#4D2CF19a",

  },
  {
    id: 8,
    image: Work6,
    title: "Jinghui Ma",
    category: ["Branding", "Web Design", "UI/UX Design"],
    website: "https://jinghui-mmaa.vercel.app/",
    link: "https://github.com/shehabwaleedd/JINGHUI-MA",
    date: "2023, July",
    comment: "Jin, a friend of mine, approached me with a request to create a website that elegantly showcases her work and resume. She wanted a simple yet sophisticated design to highlight her talents and achievements, I used React.js to make it and I used Framer Motion to make the animations",
    mainTitle: "Main Page",
    mainTitleImg: JingMainPage,
    video: JingVideo,
    overView: "Overview",
    collective: JingCollective,
    class: "jing",
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#ed293999",
    backgroundColor_mobile: "#ed293969",
  },
  {
    id: 4,
    image: Work8,
    title: "Eagle Lake",
    category: ["UI/UX Design", "Web Design", "Branding"],
    website: "https://eagle-lake.vercel.app/",
    link: "",
    date: "August, 2023",
    comment: "Eagle Lake is a simple coffee shop in Sri Lanka. The website was built using React.js and Scss, and it is still under development.",
    class: "eagle",
    mainTitle: "Main Page",
    mainTitleImg: EagleMainImg,
    mockup: EagleVideo,
    overView: "Overview",
    collective: EagleCollective,
    workingOnIt: false,
    newProject: true,
    backgroundColor: "#9736367b",
    backgroundColor_mobile: "#9736367b",
  },
  {
    id: 2,
    image: Work9,
    title: "Le Rêve",
    category: ["Web Application", "UI/UX Design"],
    website: "https://le-revee.vercel.app/",
    link: "",
    date: "August, 2023",
    comment: "Le Rêve is hotel and restaurant reservation web application. It allows users to book a room or a table in a restaurant. The application was built using React.js and Firebase.",
    class: "le-reve",
    mainTitle: "Main Page",
    mainTitleImg: ReveMainImg,
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#E9A7A1",
    backgroundColor_mobile: "#E9A7A1",
  },
  {
    id: 3,
    image: Work2,
    title: "Lumos",
    category: ["Blog-Application", "Web Design", "UI/UX Design"],
    website: "https://blog-shehabwaleedd.vercel.app/",
    link: "https://github.com/shehabwaleedd/blog",
    classProject: "blog__class",
    date: "December, 2022",
    comment: "Lumos was conceived as an online digital blog platform, tailored for individuals with intellectual inclinations, to provide them with a space to freely express their thoughts. It served as my inaugural full-fledged web application, built entirely from scratch. The platform integrated Firebase for authentication and database functionalities, employed Framer Motion for animations, and utilized i18next for seamless translation into four languages. The design was characterized by sharp angles and squares, complemented by a simple color palette to enhance user experience.",
    mainTitle: "Main Page",
    mainTitleImg: BlogMainPage,
    overView: "Overview",
    collective: BlogCollective,
    video: BlogVideo,
    mockup: BlogMockup,
    class: "blog",
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#f9e5bf9a",
    backgroundColor_mobile: "#f9e5bf9a",
  },
  {
    id: 5,
    image: Work3,
    title: "Moaaz Askaar",
    category: ["Branding", "Web Design", "UI/UX Design"],
    website: "https://moaaz.vercel.app/",
    link: "https://github.com/shehabwaleedd/moaaz-askaar",
    date: "2023, July",
    comment: "Moaaz, a percussionist, requested a simple yet elegant personal website that reflects Nubian culture and his musical perspective for better branding and professionalism. Inspired by the Nubian flag, the design represents the rich musical and human heritage of Nubia.",
    class: "moaaz",
    workingOnIt: false,
    newProject: true,
    backgroundColor: "#006F469a",
    backgroundColor_mobile: "#006F469a",
    mainTitle: "Main Page",
    mainTitleImg: MoaazMainPage,
    video: MoaazVideo,
    overView: "Overview",
    collective: MoaazColelctive,
    mockup: MoaazMockup,
  },
  {
    id: 7,
    image: Work5,
    title: "Roll The Dice",
    category: ["Game", "Web Application"],
    website: "https://rollthedice-one.vercel.app/",
    link: "https://github.com/shehabwaleedd/rollthedice",
    date: "June, 2023",
    comment: "Inspired by witnessing my friends indulge in online casino games, I was intrigued and decided to embark on my own practice journey. This led me to create a simple yet captivating game, offering the perfect opportunity to refine skills and experience the excitement of online gambling.",
    mainTitle: "Main Page",
    mainTitleImg: RollDiceMainPage,
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#4D2CF19a",
    backgroundColor_mobile: "#4D2CF19a",
  },
  // {
  //   id: 9,
  //   image: Work4,
  //   title: "Cairo Brews",
  //   category: ["E-commerce", "Web Application", "UI/UX Design"],
  //   website: "https://cairobrews.vercel.app/",
  //   link: "https://github.com/shehabwaleedd/liquor",
  //   date: "June, 2023",
  //   comment: "Cairo Brews is an elegant and seamless online alcohol shop created by a passionate frontend developer. The website offers a premium selection of wines, beers, and spirits, catering to the discerning tastes of customers in Cairo. With a focus on fast and reliable delivery, Cairo Brews ensures customers receive their chosen beverages promptly. Meticulous attention to detail is evident in the website's design, which provides an immersive and visually pleasing experience. Smooth animations and transitions enhance user engagement. The user-friendly account system allows customers to manage preferences, track orders, and receive personalized recommendations. Cairo Brews is the destination for premium beverages, combining convenience and curated excellence.",
  //   class: "cairo",
  //   workingOnIt: true,
  //   newProject: false,
  //   backgroundColor: "#E19C007b",
  //   backgroundColor_mobile: "#E19C007b",
  // },
  // {
  //   id: 10,
  //   image: Work7,
  //   title: "Venues",
  //   category: ["Web Application", "UI/UX Design"],
  //   website: "https://qaa-a.vercel.app/",
  //   link: "",
  //   date: "June, 2023",
  //   comment: "Venues is a web application that allows couples who are about to get married to connect with venues' owners. The application was built using React.js and Firebase.  ",
  //   class: "Venues",
  //   workingOnIt: true,
  //   newProject: false,
  //   backgroundColor: "#DF8F9B99",
  //   backgroundColor_mobile: "#DF8F9B99",
  // },
  {
    id: 11,
    image: Work10,
    title: "Kemet",
    category: ["Web Application", "UI/UX Design", "Web Design"],
    website: "https://kemet-sigma.vercel.app/",
    link: "",
    date: "August, 2023",
    comment: "Kemet is a web application that educate users about the richness of the history of Egypt. The application was built using React.js and Firebase.  ",
    class: "kemet",
    mainTitle: "Main Page",
    mainTitleImg: KemetMainImg,
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#E19C007b",
    backgroundColor_mobile: "#E19C007b",
  },

]

export default projectsData;