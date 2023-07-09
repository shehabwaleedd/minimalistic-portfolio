import Work0 from "../../assets/Posters/shebo2.png"
import Work1 from "../../assets/Posters/lelu10.svg"
import Work2 from "../../assets/Posters/blog5.png"
import Work3 from "../../assets/Posters/moaz3.png"
import Work4 from "../../assets/Posters/cairo1.svg"
import Work5 from "../../assets/Posters/blog7.png"
import Work6 from "../../assets/Posters/Jin2.png"
import LeluMainImg from "../../assets/ProjectDetails/Lelu/Lelu__MainPage2.png"
import LeluMessageImg from "../../assets/ProjectDetails/Lelu/Lelu__BrandMessage.png"
import LeluLoginsImg from "../../assets/ProjectDetails/Lelu/Lelu__logins.png"
import LeluTestimonialsImg from "../../assets/ProjectDetails/Lelu/Lelu__testimonial.png"
import ShebooMainImg from "../../assets/ProjectDetails/Sheboo/Shehab__mainPage.png"
import ShebooMainProjectPageImg from "../../assets/ProjectDetails/Sheboo/Shehab__ProjectsPage.png"
import ShebooMainContactPageImg from "../../assets/ProjectDetails/Sheboo/Shehab__ContactPage.png"
import ShebooMainAboutPageImg from "../../assets/ProjectDetails/Sheboo/Shehab__AboutPage.png"
import ShebooDarkModeImg from "../../assets/ProjectDetails/Sheboo/Shehab__mainPageDarkMode.png"
import ShebooDarkModeImg2 from "../../assets/ProjectDetails/Sheboo/Shehab__mainPageDarkMode2.png"
import ShebooDarkModeImg3 from "../../assets/ProjectDetails/Sheboo/Shehab__mainPageDarkMode3.png"
import ShebooDarkModeImg4 from "../../assets/ProjectDetails/Sheboo/Shehab__mainPageDarkMode4.png"
import BlogMainPage from "../../assets/ProjectDetails/Blog/blog_mainPage.png"
import BlogSuBMenu from "../../assets/ProjectDetails/Blog/Blog__subMenu.png"
import BlogPageOnHover from "../../assets/ProjectDetails/Blog/Blog__mainPageOnHover.png"
import BlogArticleDetails from "../../assets/ProjectDetails/Blog/Blog__articleDetails.png"
import BlogEditPage from "../../assets/ProjectDetails/Blog/Blog__editPage.png"
import BlogCreatePost from "../../assets/ProjectDetails/Blog/Blog__createPost.png"
import BlogSubMenu from "../../assets/ProjectDetails/Blog/Blog__subMenu.png"
import BlogAccount from "../../assets/ProjectDetails/Blog/Blog__AccountPage.png"
import BlogAbout from "../../assets/ProjectDetails/Blog/Blog__aboutPage.png"
import BlogLogin from "../../assets/ProjectDetails/Blog/Blog__logInPage.png"
import BlogRegister from "../../assets/ProjectDetails/Blog/Blog__signUpPage.png"
import BlogLightMode1 from "../../assets/ProjectDetails/Blog/Blog__lightMode.png"
import BlogLightMode2 from "../../assets/ProjectDetails/Blog/Blog__lightMode2.png"
import BlogLightMode3 from "../../assets/ProjectDetails/Blog/Blog__lightMode3.png"
import BlogLightMode4 from "../../assets/ProjectDetails/Blog/Blog__lightMode4.png"
import BlogLightMode5 from "../../assets/ProjectDetails/Blog/Blog__lightMode5.png"
import BlogLightMode6 from "../../assets/ProjectDetails/Blog/Blog__lightMode6.png"
import BlogLightMode7 from "../../assets/ProjectDetails/Blog/Blog__lightMode7.png"
import BlogLightMode8 from "../../assets/ProjectDetails/Blog/Blog__lightMode8.png"
import RollDiceMainPage from "../../assets/ProjectDetails/RollDice/RollDice__mainPage.png"








const projectsData = [
  {
    id: 1,
    image: Work0,
    title: "Sheboo",
    category: ["Branding", "UI/UX Design", "Web Design"],
    website: "https://shehabwaleedd.vercel.app/",
    link: "https://github.com/shehabwaleedd/minimalistic-portfolio",
    date: "March, 2023",
    class:"shehab",
    comment: "I am commonly known as 'Sheboo' on various social media platforms, shaping my online identity. The primary aim of this project was to establish a versatile and adaptable identity that encompasses both my real name and nickname. As a frontend developer, it was essential to create a website that showcases my expertise, reflects my design principles, and establishes my unique identity. The goal was to develop a cohesive and recognizable personal brand that seamlessly translates between online and offline channels, ensuring a consistent representation across different mediums. This initiative aimed to optimize search engine visibility while presenting a professional and polished image.",
    mainTitle: "Main Page",
    mainTitleImg: ShebooMainImg,
    mainProjectsPage: "Projects Page",
    mainProjectsPageImg: ShebooMainProjectPageImg,  
    mainContactPage: "Contact Page",
    mainContactPageImg: ShebooMainContactPageImg,
    mainAboutPage: "About Page",
    mainAboutPageImg: ShebooMainAboutPageImg,
    mainDarkMode: "Dark Mode",
    mainDarkModeImg: ShebooDarkModeImg,
    mainDarkModeImg2: ShebooDarkModeImg2,
    mainDarkModeImg3: ShebooDarkModeImg3,
    mainDarkModeImg4: ShebooDarkModeImg4,
  },
  {
    id: 2,
    image: Work1,
    title: "LELU STORE",
    category: ["E-commerce", "Web Application", "UI/UX Design"],
    website: "https://lelu-store.vercel.app/",
    link: "https://github.com/shehabwaleedd/lelu-store",
    date: "March, 2023",
    comment: "Sheboo is the nickname I use on social medias. The goal of this project was to create my own identity, adaptable and modular to work with both my real name and my nickname. First, the identity needed to be defined in brand guidelines and then had to be adapted for digital medias (website, wallpapers, social medias) and physical formats (business cards/stickers, letter paper and resume).",
    mainTitle: "Main Page",
    mainTitleImg: LeluMainImg,
    mainTitle2: "Main Message",
    mainTitleImg2: LeluMessageImg,
    projectLogins: "Project Login/Sign Up Page",
    projectLoginsImg: LeluLoginsImg,
    projectTestimonials: "Project Testimonials Section",
    projectTestimonialsImg: LeluTestimonialsImg,
  },
  {
    id: 7,
    image: Work6,
    title: "Jinghui Ma",
    category: ["Branding", "Web Design", "UI/UX Design"],
    website: "https://cairobrews.vercel.app/",
    link: "https://github.com/shehabwaleedd/liquor",
    date: "2023, July",
    comment: "I made this website using HTML and CSS, I was trying to make it as close as possible to the original twitter website, I used flexbox to make it responsive"
  },
  {
    id: 3,
    image: Work2,
    title: "Minimalistic Blog",
    category: ["Application", "Web Design", "UI/UX Design"],
    website: "https://blog-shehabwaleedd.vercel.app/",
    link: "https://github.com/shehabwaleedd/blog",
    classProject: "blog__class",
    date: "December, 2022",
    comment: "I made this small website just to keep always reminding myself of the time left for me to finish my learning process and start to actually make good projects, I used Vanilla JavaScript to make it",
    mainTitle: "Main Page",
    mainTitleImg: BlogMainPage,
    mainTitleSubMenu: "Sub Menu",
    mainTitleSubMenuImg: BlogSuBMenu,
    mainPageOnHover: "Main Page On Hover",
    mainPageOnHoverImg: BlogPageOnHover,
    articleDetails: "Article Details",
    articleDetailsImg: BlogArticleDetails,
    editPage: "Edit Page",
    editPageImg: BlogEditPage,
    createPost: "Create Post",
    createPostImg: BlogCreatePost,
    subMenu: "Sub Menu",
    subMenuImg: BlogSubMenu,
    accountPage: "Account Page",
    accountPageImg: BlogAccount,
    mainAboutPage: "About Page",
    mainAboutPageImg: BlogAbout,
    projectLogins: "Login Page",
    projectLoginsImg: BlogLogin,
    registerPage: "Register Page",
    registerPageImg: BlogRegister,
    lightMode: "Light Mode",
    lightModeImg1: BlogLightMode1,
    lightModeImg2: BlogLightMode2,
    lightModeImg3: BlogLightMode3,
    lightModeImg4: BlogLightMode4,
    lightModeImg5: BlogLightMode5,
    lightModeImg6: BlogLightMode6,
    lightModeImg7: BlogLightMode7,
    lightModeImg8: BlogLightMode8,
  },
  {
    id: 4,
    image: Work3,
    title: "Moaaz Askaar",
    category: ["Branding", "Web Design", "UI/UX Design"],
    website: "https://cairobrews.vercel.app/",
    link: "https://github.com/shehabwaleedd/liquor",
    date: "2023, July",
    comment: "I made this website using HTML and CSS, I was trying to make it as close as possible to the original twitter website, I used flexbox to make it responsive"
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
  },
  {
    id: 5,
    image: Work4,
    title: "Cairo Brews",
    category: ["E-commerce", "Web Application", "UI/UX Design"],
    website: "https://cairobrews.vercel.app/",
    link: "https://github.com/shehabwaleedd/liquor",
    date: "June, 2023",
    comment: "Cairo Brews is an elegant and seamless online alcohol shop created by a passionate frontend developer. The website offers a premium selection of wines, beers, and spirits, catering to the discerning tastes of customers in Cairo. With a focus on fast and reliable delivery, Cairo Brews ensures customers receive their chosen beverages promptly. Meticulous attention to detail is evident in the website's design, which provides an immersive and visually pleasing experience. Smooth animations and transitions enhance user engagement. The user-friendly account system allows customers to manage preferences, track orders, and receive personalized recommendations. Cairo Brews is the destination for premium beverages, combining convenience and curated excellence."
  },



]

export default projectsData;