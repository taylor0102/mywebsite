import "./About.css"
import FadeUp from "../../utils/FadeUp";
import { AvatarImg } from "../../assets";

const About = () => {
    return (
        <section id="about" className="About-Main">
            <FadeUp width="100%">
                <h1 className="Title-Tag Opening flex">
                    <span>{"<"}</span>
                    <p>About Me</p>
                    <span>{">"}</span>
                </h1>
            </FadeUp>

            <FadeUp className="About-Content flex">
                <img src={AvatarImg} alt="ChiragChrg" className="About-Image" width="250px" height="100%" />

                <div className="About-Info flex col gap">
                    <FadeUp className="fsH2">Hey there! 👋🏻</FadeUp>
                    <FadeUp >I'm Taylor, a dynamic and versatile Senior Full Stack Engineer with a passion for crafting innovative web solutions.</FadeUp>
                    <FadeUp >With a solid background in software engineering and a keen eye for detail, I excel in designing and implementing elegant and user-friendly applications.</FadeUp>
                    <FadeUp >Their expertise spans across front-end and back-end technologies, including JS/TS, Python, React, Node.js, and Database handling. </FadeUp>
                    <FadeUp >If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas to life!</FadeUp>
                    <FadeUp ><span className="gradientText" style={{fontSize: "1.2em", fontWeight:"bold"}}>My Main Goal is My Clients' BEBEFIT!!!</span></FadeUp>
                </div>
            </FadeUp>

            <FadeUp width="100%">
                <span className="Title-Tag Closing flex">
                    <span>{"</"}</span>
                    <p>About Me</p>
                    <span>{">"}</span>
                </span>
            </FadeUp>
        </section>
    )
}

export default About