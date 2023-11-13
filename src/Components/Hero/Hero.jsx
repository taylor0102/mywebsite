import "./Hero.css"
import { motion } from "framer-motion"

import { AvatarImg, GithubIcon, GoogleIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../../assets/index"
import { OrbitContainer, OrbitItems, TextContainer, TextItems } from "../../utils/Variants"

const Hero = () => {
    return (
        <section id="hero" className="Hero-Main flex">
            <div className="Hero-Intro flex col">
                <motion.div
                    variants={TextContainer}
                    initial="hidden"
                    animate="visible"
                    className="Hero-Text">
                    <motion.p
                        variants={TextItems}>Hi! my name is,</motion.p>
                    <motion.h1
                        variants={TextItems}
                        className="gradientText">Taylor.</motion.h1>
                    <motion.p
                        variants={TextItems}>I'm a dynamic and versatile Senior Full-Stack Engineer.</motion.p>
                    <motion.p
                        variants={TextItems}>My Main Goal is My Clients' <span className="gradientText" style={{fontWeight:"bold"}}>BENEFIT.</span></motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.8,
                        delay: 1
                    }}
                    className="Hero-Links flex">
                    <a href="https://github.com/taylor0102" title="GitHub" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="GithubIcon" width={30} height={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/taylor0102/" title="LinkedIn" target="_blank" rel="noreferrer">
                        <img src={LinkedinIcon} alt="LinkedinIcon" width={30} height={30} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={OrbitContainer}
                initial="hidden"
                animate="visible"
                className="Hero-AvatarContainer flex">
                <motion.div
                    variants={OrbitItems}
                    className="Hero-Avatar flex">
                    <img src={AvatarImg} alt="ChiragChrg" width="100%" height="100%" />
                </motion.div>
                <motion.div
                    variants={OrbitItems}
                    className="Hero-AvatarTrail Trail1">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={OrbitItems}
                    className="Hero-AvatarTrail Trail2">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={OrbitItems}
                    className="Hero-AvatarTrail Trail3">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
                <motion.div
                    variants={OrbitItems}
                    className="Hero-AvatarTrail Trail4">
                    <div className="Hero-TrailDot"></div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero