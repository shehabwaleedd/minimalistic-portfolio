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
import CairoCollective from "../../assets/ProjectDetails/Cairo/Cairo__collective.png"
import CairoMainImg from "../../assets/ProjectDetails/Cairo/Cairo__mainPage.png"
import CairoVideo from "../../assets/ProjectDetails/Cairo/Cairo__video.mp4"
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
import ReveMainImg from "../../assets/ProjectDetails/Reve/ilReve__mainPage.webp"
import ReveVideo from "../../assets/ProjectDetails/Reve/video.mp4"
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
    comment: "Cairo Studio is more than just a web and design agency; it's a dynamic powerhouse that thrives on the fusion of innovation and artistry. Our mission is to transcend the ordinary and sculpt digital experiences that resonate on a higher frequency. We're not content with following trends; we're here to set new ones. Our ambition is to elevate the standards of the local market, ushering in a new era of excellence in Egypt's digital landscape. At the heart of our success is our passionate and creative team, united by a shared vision to revolutionize the way digital projects are crafted and experienced. Quality and attention to detail are the cornerstones of our commitment to delivering excellence. Cairo Studio is not just a name; it's a promise to make a difference.",
    mission: "Our mission at Cairo Studio is to break boundaries and redefine the possibilities of web and design. We aim to create digital experiences that leave a lasting impact, ones that resonate with users on a deep level. By merging innovation and artistry, we strive to set new standards and inspire change in the Egyptian digital landscape. We're not just building websites and designs; we're crafting a legacy of excellence.",
    challenge: "In the dynamic world of web design and development, challenges become opportunities for innovation and growth. My mission was clear: create a website that not only meets but exceeds expectations, setting a new standard for excellence in the industry. The challenge? Crafting a unique, beautiful, and captivating website that stands out. I embarked on a journey of continuous learning and adaptation, pushing the boundaries of creativity and aesthetics. Every line of code, every design element was meticulously crafted to set this website apart. My goal is simple yet ambitious: to inspire other studios with a website that defines the criteria for extraordinary design and development. This website is a testament to my dedication to excellence",
    solution: "To conquer challenges, I adopted a dynamic approach, merging fresh insights and expertise. Extensive research and dedication to staying current with industry trends and technology empowered me to deliver state-of-the-art solutions customized to each project's unique demands. Employing ReactJS for responsive interfaces, Three.js for immersive 3D animations, and integrating Locomotive Scroll and GSAP for fluidity and precision, I prioritized user engagement. My code was meticulously crafted for optimal performance, security, and future sustainability. My unwavering commitment to continuous learning fueled innovation, setting new industry benchmarks. This website is not just a digital destination; it represents an ongoing journey of innovation, dedicated to making a lasting impact in web design and development.",
    class: "cairo-studio",
    mainTitle: "Main Page",
    mainTitleImg: CairoMainImg,
    video: CairoVideo,
    overView: "Overview",
    collective: CairoCollective,
    workingOnIt: false,
    newProject: true,
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
    comment: "Jin approached us with a request to create a website that elegantly showcases her work and resume. She wanted a simple yet sophisticated design to highlight her talents and achievements, I used React.js to make it and I used Framer Motion to make the animations",
    mission: "Our mission for this project was clear - to create a captivating online platform that showcases the artistry of Jinghui Ma. We aimed to provide an immersive experience for visitors, allowing them to explore her work and journey in a seamless and engaging manner. Our goal was not just to build a website but to craft a digital masterpiece that reflects her unique talents.",
    challenge: "The primary challenge we encountered was finding the perfect equilibrium between simplicity and sophistication. Jinghui Ma wanted a website with a clean, minimalist design that would let her work shine. However, we also needed to incorporate captivating animations and interactive elements to make the website memorable and interactive.",
    solution: "To overcome this challenge, we selected React.js as the core framework, ensuring the website was responsive and adaptable to various devices. Framer Motion came to the forefront for crafting enchanting animations that would leave a lasting impression. Our meticulous attention to detail, from the user interface to the user experience, resulted in a visually striking website that elegantly showcases Jinghui Ma's photographic talents and career achievements. With a harmonious blend of technology and creativity, we transformed her vision into a digital reality.",
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
    id: 2,
    image: Work9,
    title: "Il Rêve",
    category: ["Web Application", "UI/UX Design"],
    website: "https://le-revee.vercel.app/",
    mission: "Our mission with Il Rêve was to create an ambiance of luxury and simplicity from the moment users enter the website. We envisioned an interface where the elegance of the design would instill a sense of tranquility. Every element, from color palettes to typography, was meticulously chosen to evoke a feeling of opulence while maintaining a minimalist aesthetic.",
    challenge: "Crafting a user-centric platform that embodies both luxury and simplicity was a significant challenge. Additionally, we needed to seamlessly integrate hotel and restaurant reservations within the same system. Our goal was to ensure that users not only experienced a visually pleasing design but also enjoyed a smooth and intuitive booking process. Security and data management were crucial, especially with user data and payment information.",
    solution: "To address these challenges, we harnessed the power of React.js for its versatility in creating responsive and elegant user interfaces. Firebase became the cornerstone of our data management, allowing us to offer real-time updates and secure authentication. This also gave administrators complete control over the website, enabling them to add, modify, or remove items and prices effortlessly. Il Rêve's design exudes luxury through its vibrant color palette and subtle animations. It's a testament to the harmony between aesthetics and functionality, where guests can revel in the beauty of minimalism while effortlessly making reservations. We've empowered administrators with the tools they need to curate the perfect guest experience.",
    link: "",
    date: "August, 2023",
    comment: "Il Rêve is a sophisticated hotel and restaurant reservation web application that redefines the way users book rooms or tables. This project was built with a fusion of innovation, leveraging React.js and the reliability of Firebase. Let's dive into the story of how we brought this dream to life.",
    class: "le-reve",
    mainTitle: "Main Page",
    mainTitleImg: ReveMainImg,
    video: ReveVideo,
    workingOnIt: false,
    newProject: true,
    backgroundColor: "#E9A7A1",
    backgroundColor_mobile: "#E9A7A1",
  },
  {
    id: 4,
    image: Work8,
    title: "Eagle Lake",
    category: ["UI/UX Design", "Web Design", "Branding"],
    website: "https://eagle-lake.vercel.app/",
    link: "",
    date: "August, 2023",
    comment: "Eagle Lake is a charming coffee shop nestled in the picturesque landscapes of Sri Lanka. Our journey to bring their unique essence online is ongoing, and we're using React.js and Scss as our tools of choice. Join us as we create a digital space that reflects the warmth and hospitality of Eagle Lake.",
    mission: "Our mission for the Eagle Lake project is to capture the essence of this charming coffee shop and bring it to the digital world. We aspire to create a website that not only showcases their menu but also conveys the ambiance and hospitality that visitors experience when they step into Eagle Lake. Our goal is to make every online visitor feel like they're sipping coffee by the serene lake.",
    challenge: "One of the challenges we encountered was striking a balance between showcasing the coffee shop's unique charm and providing a seamless user experience. Additionally, as the website is still under development, we need to ensure that every design element aligns with the evolving vision of Eagle Lake. Staying up-to-date with the latest React.js features and Scss techniques is crucial for delivering an exceptional website.",
    solution: "To meet these challenges, we chose React.js as our development framework for its flexibility and the ability to adapt as the project evolves. Scss provides us with the tools to create a visually appealing and responsive design. As we continue to develop the website, we maintain close collaboration with the Eagle Lake team to ensure that every detail aligns with their vision. The result will be a digital space that captures the essence of Eagle Lake, where users can explore the menu, ambiance, and upcoming events with ease.",
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
    id: 3,
    image: Work2,
    title: "Lumos",
    category: ["Blog-Application", "Web Design", "UI/UX Design"],
    website: "https://blog-shehabwaleedd.vercel.app/",
    link: "https://github.com/shehabwaleedd/blog",
    classProject: "blog__class",
    date: "December, 2022",
    comment: "Lumos is a digital sanctuary for individuals with a passion for intellectual expression. Conceived as an online blog platform, Lumos was my inaugural full-fledged web application, meticulously crafted from the ground up. The platform serves as a creative haven, enabling users to freely share their thoughts and insights. Built with cutting-edge technologies, Lumos seamlessly integrates Firebase for secure authentication and robust database functionalities. The user experience is enriched with captivating animations powered by Framer Motion, and it's accessible in four languages thanks to i18next. Lumos features a design characterized by sharp angles and squares, complemented by a simple and elegant color palette that enhances the overall user experience.",
    mission: "Our mission with Lumos was to provide a digital platform where intellectual minds could shine. We wanted to create a space that encourages free expression of thoughts and ideas. Lumos isn't just a blog platform; it's a creative haven that fosters a community of thinkers, writers, and storytellers from around the world.",
    challenge: "Building Lumos presented several challenges. As my first full-fledged web application, I had to master various technologies, including React.js, Firebase, Framer Motion, and i18next. Ensuring seamless user experiences, data security, and multilingual support were paramount. The design challenge was to strike a balance between simplicity and elegance while allowing users to focus on content.",
    solution: "To address these challenges, I leveraged React.js for its flexibility and efficiency. Firebase provided a robust authentication system and database management, ensuring the security of user data. Framer Motion added captivating animations, elevating the overall user experience. Multilingual support was achieved with i18next, making Lumos accessible to a global audience. The design choices, characterized by sharp angles and a minimalist color palette, amplify content readability and user engagement. Lumos is a digital haven where intellectual exploration is not only encouraged but celebrated, offering a sophisticated and secure platform for free expression and creative exchange.",
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
    comment: "Moaaz Askaar, a gifted percussionist, entrusted us with the task of creating a personal website that would not only reflect his musical expertise but also honor the rich Nubian culture. Our mission was clear - to craft an elegant and culturally resonant platform that would elevate Moaaz's branding and professionalism. Drawing inspiration from the Nubian flag, the design weaved a tapestry of Nubian heritage and musical artistry.",
    mission: "Our mission with Moaaz Askaar's website was twofold - to showcase his remarkable musical talents and to pay homage to the vibrant Nubian culture. We aimed to create a digital space where visitors could not only explore Moaaz's musical journey but also immerse themselves in the rich cultural heritage of Nubia. Our goal was to build a platform that would enhance Moaaz's branding and professionalism while fostering a deep appreciation for his roots.",
    challenge: "One of the primary challenges we encountered was striking the perfect balance between elegance and cultural authenticity. We needed to ensure that the website would resonate with both music enthusiasts and those interested in Nubian heritage. Additionally, the design had to be user-friendly, offering an intuitive navigation experience while highlighting Moaaz's work effectively.",
    solution: "To address these challenges, we meticulously designed every element of the website, drawing inspiration from the Nubian flag's colors and symbols. The choice of React.js provided a responsive and versatile platform for showcasing Moaaz's musical journey. Cultural elements were seamlessly integrated, offering visitors a rich and immersive experience. The color palette and layout exuded elegance, while intuitive navigation ensured easy exploration of Moaaz's work. Moaaz Askaar's website stands as a testament to the harmonious fusion of art, culture, and technology, where visitors can embark on a journey through music and Nubian heritage.",
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