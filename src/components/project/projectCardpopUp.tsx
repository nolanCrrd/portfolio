type projectCardpopUpProps = {
    projectData: Project;
}

type Project = {
    title: string;
    description: string;
    img: string;
    link: string;
    languages: string[];
    skills: string[];
    bigDescription: string;
};

function projectCardpopUp({projectData}: projectCardpopUpProps) {
    return (
        <div className={"blurScreen"}>
            <div className="projectCardPopUp">
                <img src={projectData.img} alt={projectData.title} className={"projectImg"}/>
                <h1>{projectData.title}</h1>
                <p dangerouslySetInnerHTML={{__html: projectData.bigDescription}}></p>
                <div className={'colonne'}>
                    <div>
                        <h2>Worked skills</h2>
                        <ul>
                            {projectData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Used Languages</h2>
                        {projectData.languages.map((language, index) => (
                            <img key={index} src={"/portfolio/images/home/languages/" + language + ".png"} alt=""
                                 className="languages"></img>
                        ))}
                    </div>
                </div>
                <h2>Access to the project</h2>
                {projectData.link === "Unavailable" ? (
                    <p>Sorry, this project is not accessible for now.</p>
                ) : (
                    <a>{projectData.link}</a>
                )
                }

            </div>
        </div>
    );
}

export default projectCardpopUp;