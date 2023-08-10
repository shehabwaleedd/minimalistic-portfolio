import Work0 from "../../assets/Posters/shebo2.png"
import Work1 from "../../assets/Posters/lelu10.svg"
import Work2 from "../../assets/Posters/blog4.webp"
import Work3 from "../../assets/Posters/moaz3.png"
import Work4 from "../../assets/Posters/cairo1.svg"
import Work5 from "../../assets/Posters/blog7.png"
import Work6 from "../../assets/Posters/Jin2.png"
import Work7 from "../../assets/Posters/qaa3a.png"
import Work8 from "../../assets/Posters/eagle.png"
import LeluMainImg from "../../assets/ProjectDetails/Lelu/Lelu__MainPage2.png"
import LeluVideo from "../../assets/ProjectDetails/Lelu/Lelu__video.mp4"
import LeluMessageImg from "../../assets/ProjectDetails/Lelu/Lelu__BrandMessage.png"
import LeluLoginsImg from "../../assets/ProjectDetails/Lelu/Lelu__logins.png"
import LeluTestimonialsImg from "../../assets/ProjectDetails/Lelu/Lelu__testimonial.png"
import ShebooMainImg from "../../assets/ProjectDetails/Sheboo/Shehab__mainPage.png"
import ShebooVideo from "../../assets/ProjectDetails/Sheboo/Shehab__video.mp4"
import ShebooCollective from "../../assets/ProjectDetails/Sheboo/Shehab__collective.png"
import BlogMainPage from "../../assets/ProjectDetails/Blog/blog_mainPage.png"
import BlogVideo from "../../assets/ProjectDetails/Blog/Blog_video.mp4"
import BlogCollective from "../../assets/ProjectDetails/Blog/Blog__collective.png"
import RollDiceMainPage from "../../assets/ProjectDetails/RollDice/RollDice__mainPage.png"
import JingMainPage from "../../assets/ProjectDetails/Jing/Jin__mainPage.png"
import JinGridView from "../../assets/ProjectDetails/Jing/Jin__gridView.png"
import JinAboutPage from "../../assets/ProjectDetails/Jing/Jin__aboutPage.png"
import JinContactPage from "../../assets/ProjectDetails/Jing/Jin__contactPage.png"
import JinDarkMode from "../../assets/ProjectDetails/Jing/Jin__darkMode1.png"
import JinDarkMode2 from "../../assets/ProjectDetails/Jing/Jing__darkMode2.png"
import JinDarkMode3 from "../../assets/ProjectDetails/Jing/Jin__darkMode3.png"
import JinDarkMode4 from "../../assets/ProjectDetails/Jing/Jin__darkMode4.png"
import MoaazMainPage from "../../assets/ProjectDetails/Moaaz/Moaaz__mainPage.png"
import MoaazVideo from "../../assets/ProjectDetails/Moaaz/Moaaz_video.mp4"
import MoaazColelctive from "../../assets/ProjectDetails/Moaaz/collective.png"
import EagleMainImg from "../../assets/ProjectDetails/Eagle/Eagle__mainPage.png"
import EagleCollective from "../../assets/ProjectDetails/Eagle/Eagle__collective.png"
import EagleVideo from "../../assets/ProjectDetails/Eagle/video.mov"


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
    id: 2,
    image: Work1,
    title: "LELU STORE",
    category: ["E-commerce", "Web Application", "UI/UX Design"],
    website: "https://lelu-store.vercel.app/",
    link: "https://github.com/shehabwaleedd/lelu-store",
    date: "March, 2023",
    class: "lelu",
    comment: "Sheboo is the nickname I use on social medias. The goal of this project was to create my own identity, adaptable and modular to work with both my real name and my nickname. First, the identity needed to be defined in brand guidelines and then had to be adapted for digital medias (website, wallpapers, social medias) and physical formats (business cards/stickers, letter paper and resume).",
    mainTitle: "Main Page",
    mainTitleImg: LeluMainImg,
    video: LeluVideo,
    mainTitle2: "Main Message",
    mainTitleImg2: LeluMessageImg,
    projectLogins: "Project Login/Sign Up Page",
    projectLoginsImg: LeluLoginsImg,
    projectTestimonials: "Project Testimonials Section",
    projectTestimonialsImg: LeluTestimonialsImg,
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#ffdebeb4",
    backgroundColor_mobile: "#ffdebeb4",
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
    class: "blog",
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#f9e5bf9a",
    backgroundColor_mobile: "#f9e5bf9a",
  },
  {
    id: 9,
    image: Work8,
    title: "Eagle Lake",
    category: ["UI/UX Design", "Web Design", "Branding"],
    website: "https://eagle-lake.vercel.app/",
    link: "",
    date: "June, 2023",
    comment: "Eagle Lake is a simple coffee shop in Sri Lanka. The website was built using React.js and Scss, and it is still under development.",
    class: "eagle",
    mainTitle: "Main Page",
    mainTitleImg: EagleMainImg,
    mockup: EagleVideo,
    overView: "Overview",
    collective: EagleCollective,
    workingOnIt: false,
    newProject: true ,
    backgroundColor: "#9736367b",
    backgroundColor_mobile: "#9736367b",
  },
  {
    id: 4,
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

  },

  {
    id: 6,
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
  {
    id: 7,
    image: Work6,
    title: "Jinghui Ma",
    category: ["Branding", "Web Design", "UI/UX Design"],
    website: "https://jinghui-mmaa.vercel.app/",
    link: "https://github.com/shehabwaleedd/JINGHUI-MA",
    date: "2023, July",
    comment: "Jin, a friend of mine, approached me with a request to create a website that elegantly showcases her work and resume. She wanted a simple yet sophisticated design to highlight her talents and achievements, I used React.js to make it and I used Framer Motion to make the animations",
    mainTitle: "Main Page",
    mainTitleImg: JingMainPage,
    mainTitle2: "Grid View",
    mainTitleImg2: JinGridView,
    mainAboutPage: "About Page",
    mainAboutPageImg: JinAboutPage,
    mainContactPage: "Contact Page",
    mainContactPageImg: JinContactPage,
    mainDarkMode: "Dark Mode",
    mainDarkModeImg: JinDarkMode,
    mainDarkModeImg2: JinDarkMode2,
    mainDarkModeImg3: JinDarkMode3,
    mainDarkModeImg4: JinDarkMode4,
    class: "jing",
    workingOnIt: false,
    newProject: false,
    backgroundColor: "#ed293999",
    backgroundColor_mobile: "#ed293969",
  },
  {
    id: 5,
    image: Work4,
    title: "Cairo Brews",
    category: ["E-commerce", "Web Application", "UI/UX Design"],
    website: "https://cairobrews.vercel.app/",
    link: "https://github.com/shehabwaleedd/liquor",
    date: "June, 2023",
    comment: "Cairo Brews is an elegant and seamless online alcohol shop created by a passionate frontend developer. The website offers a premium selection of wines, beers, and spirits, catering to the discerning tastes of customers in Cairo. With a focus on fast and reliable delivery, Cairo Brews ensures customers receive their chosen beverages promptly. Meticulous attention to detail is evident in the website's design, which provides an immersive and visually pleasing experience. Smooth animations and transitions enhance user engagement. The user-friendly account system allows customers to manage preferences, track orders, and receive personalized recommendations. Cairo Brews is the destination for premium beverages, combining convenience and curated excellence.",
    class: "cairo",
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#E19C007b",
    backgroundColor_mobile: "#E19C007b",
  },
  {
    id: 8,
    image: Work7,
    title: "Qaa'a",
    category: ["Web Application", "UI/UX Design"],
    website: "https://qaa-a.vercel.app/",
    link: "",
    date: "June, 2023",
    comment: "Qaa'a is a web application that allows couples who are about to get married to connect with venues' owners. The application was built using React.js and Firebase.  ",
    class: "qaa",
    workingOnIt: true,
    newProject: false,
    backgroundColor: "#E19C007b",
    backgroundColor_mobile: "#E19C007b",
  },

]

export default projectsData;