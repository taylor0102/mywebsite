import "./ProjectDetails.css"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import FadeModal from "../../../utils/FadeModal"
import FadeUp from "../../../utils/FadeUp"
import { useContextData } from "../../../Hooks/useContextData"
import { Close, GithubIcon, LinkArrow } from "../../../assets"

const ProjectDetails = () => {
    const [showModal, setShowModal] = useState(false)
    const { selectedProject, setSelectedProject } = useContextData()

    useEffect(() => {
        if (selectedProject.length !== 0) {
            setShowModal(true)
            document.querySelector(":root").style.setProperty("--LogoBgColor", selectedProject.Theme)
        }
        else
            setShowModal(false)
    }, [selectedProject])

    // Overriding back button to CLOSE the Modal instead of Navigating back
    window.onpopstate = () => {
        setShowModal(false)
        setTimeout(() => {
            // small delay before clearing state
            setSelectedProject([])
        }, 100)
    };

    const handleModalClose = () => {
        setShowModal(false)
        setSelectedProject([])
        window.history.back();
    }

    return (
        <div className={!showModal ? "ProjectDetails-Main Hidden" : "ProjectDetails-Main ShowModal"}>
            <div className="ProjectDetails-Container flex">
                <button className="ProjectDetails-CloseBtn flex" onClick={handleModalClose}>
                    <img src={Close} alt="CloseModal" width="35px" height="35px" />
                </button>

                <div className="ProjectDetails-Left">
                    <div className="ProjectDetails-Screenshot flex col">
                        <img src={selectedProject.Shot} alt="Project_ScreenShot" width="100%" height="100%" />

                        <FadeModal className="ProjectDetails-Logo flex">
                            <img src={selectedProject.Logo} alt="Project_Logo" width={(selectedProject?.LogoSize || 55) * 1.8} height={(selectedProject?.LogoSize || 55) * 1.8} />
                        </FadeModal>
                    </div>
                    <div className="ProjectDetails-Overlay"></div>

                    <FadeModal className="ProjectDetails-Info flex col gap">
                        <h1 className="flex">{selectedProject.Name}</h1>

                        <FadeModal className="ProjectDetails-TechIcons flex gap">
                            {selectedProject?.Tech?.map((icon, indx) => {
                                return (
                                    <motion.img transition={{ delay: 5 }} src={icon} key={indx} alt="Tech" width={28} height={28} />
                                )
                            })}
                        </FadeModal>

                        <FadeModal className="ProjectDetails-Links flex">
                            <a href={selectedProject.Link ? selectedProject.Link : "https://chiragchrg.netlify.app/"} className="flex gap05" target="_blank" rel="noreferrer">
                                <motion.img src={LinkArrow} alt="LinkArrow" width={24} height={24} />
                                <span>Live Site</span>
                            </a>
                        </FadeModal>
                    </FadeModal>
                </div>

                <FadeModal className="ProjectDetails-Right">
                    <FadeUp height="fit-content">
                        {selectedProject?.Demo && <div className="ProjectDetails-Demo flexStart col gap05 selectable">
                            <h3>Demo Credentials:</h3>
                            <p>Email: {selectedProject.Demo.email}</p>
                            <p>Password: {selectedProject.Demo.password}</p>
                        </div>}
                    </FadeUp>

                    <FadeModal className="ProjectDetails-About flexStart col gap05">
                        <h2>About the project.</h2>
                        <p>{selectedProject.Desc}</p>
                    </FadeModal>
                </FadeModal>
            </div>
        </div >
    )
}

export default ProjectDetails