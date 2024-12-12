import {useEffect, useState} from "react";
import ProjectCardpopUp from "../components/project/projectCardpopUp.tsx";
import VisibilityObserver from "../components/observer/visibilityObserver.tsx";

function Projects() {
    const [nbColumns, setNbColumns] = useState([1, 2, 3]);

    const [selectedProject, setSelectedProject] = useState('');

    useEffect(() => {
        //fonction permettant de modifier la variable de la taille de la fenêtre
        function handleResize() {
            //définie le nombre de colonnes de manière responsive
            setNbColumns(
                window.innerWidth > 1200 ? [1, 2, 3] : window.innerWidth > 800 ? [1, 2] : [1]
            );
        }

        handleResize()
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        function handleCloseEvent(e: MouseEvent | KeyboardEvent) {
            if (e instanceof MouseEvent) {
                if ((e.target as HTMLElement).classList.contains('blurScreen')) {

                    ClosePopUp();
                }
            } else if (e instanceof KeyboardEvent) {
                if (e.key === 'Escape') {
                    ClosePopUp();
                }
            }
        }

        window.addEventListener('click', handleCloseEvent);
        window.addEventListener('keydown', handleCloseEvent)

        return () => {
            window.removeEventListener('click', handleCloseEvent);
            window.removeEventListener('keydown', handleCloseEvent);
        };
    }, []);

    //fonction pour afficher un composant détaillant le projet selectionné
    function handleProjectClick(key: string) {
        setSelectedProject(key);
    }

    function ClosePopUp() {
        document.querySelector('.blurScreen')?.classList.remove('visible');
        setTimeout(() => {
            setSelectedProject('');
        }, 300)
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

    //list des projets dans un langage humain
    const projectList: { [key: string]: Project } = {
        1: {
            title: 'Nuit du Code 2024',
            description: 'This video game is the result of a mondial gameJam in 2024 of 6 hours called "Nuit du Code".',
            img: `${import.meta.env.BASE_URL}images/projects/NDC/ndc.png`,
            link: 'Unavailable',
            languages: ['python'],
            skills: ['Teamwork', 'Pressure management', 'Time management', 'Game design'],
            bigDescription: "<p>This event is organized by a French school in Tokyo, and all other French schools around the world can participate. <br /><br />" +
                "The goal is to create a video game in 6 hours with a team of few people. The organizers provide all participants with a texture pack to help create the game. " +
                "At the end of my first year of developpement in highschool our teacher decided to sign us up for those who wanted to participate. <br /><br />" +
                "So at the begining of the event when we saw the textures for a character and other mobs, we immediately thought of making a small 2D RPG. <br /><br />" +
                "We created a simple map with different phases to progressively teach the player all the game mechanics, featuring some NPCs along the way. " +
                "At the end, there is a boss fight with a big monster, and the player must use everything they've learned to defeat it.</p>"
        },
        2: {
            title: 'Site Web IMB',
            description: 'This web site is a groupe project during the first semester of my first year of BUT.',
            img: `${import.meta.env.BASE_URL}images/projects/IMB/IMB.png`,
            link: 'Unavailable',
            languages: ['html', 'css'],
            skills: ['Web design', 'Teamwork', 'Deadline management'],
            bigDescription: "During the first semester of my first year at the Bachelor's in Computer Science program, we had a group project aimed at redesigning the website of a major tech company to make it more accessible and understandable for third-year students looking for an internship. Out team choose the IBM company <br /><br />" +
                "The main challenge was to simplify the content while maintaining the professional tone and information accuracy. We worked on streamlining the navigation, improving the readability of technical sections, and creating a more intuitive user experience. <br /><br />" +
                "Our goal was to make the website more welcoming to students, with clear guidance on how to apply for internships and navigate the resources available at IBM. <br /><br />"
        },
        3: {
            title: 'Space Shooter',
            description: 'This game is was a training project to learn how to use the library called "Pyxel" for the event "Nuit du Code".',
            img: `${import.meta.env.BASE_URL}images/projects/SpaceShooter/spaceShooter.png`,
            link: 'Unavailable',
            languages: ['python'],
            skills: ['Libraries usage', 'Game design'],
            bigDescription: "During my first year of development studies in high school, we learned Python. To make it more engaging and interesting, our teacher decided to use video games as a teaching tool. <br /><br />" +
                "At the end of the year, in preparation for the 'Nuit du Code' event, we were tasked with creating a video game using the Pyxel library. <br /><br />" +
                "I decided to create a space shooter game, where the player controls a spaceship and must destroy all the asteroids to gain points, or dodge them to avoid losing HP. <br /><br />" +
                "The game includes a score system, a life system, a game over screen, and progressively increasing difficulty. <br /><br />" +
                "I also added drifting astronauts that the player must avoid shooting, as shooting them would result in losing points. Instead, the player must rescue them by catching them mid-flight. <br /><br />"


        },
        4: {
            title: 'Ma Route Mon Village',
            description: 'This mobile application, is a team project during the first part of my second year of BUT, to put the french patrimony in the spotlight.',
            img: `${import.meta.env.BASE_URL}images/projects/MRMV/mrmv.png`,
            link: 'Unavailable',
            languages: ['html', 'css', 'react'],
            skills: ['Teamwork', 'Project management', 'Mobile Developpement', "Need analysis"],
            bigDescription: "<p>The goal of this app is to highlight French heritage. <br/><br/>" +
                "To achieve this, we decided to create something that can turn boring holiday trips into exciting adventures, " +
                "and transform your stops on highways into welcoming villages. <br/><br/>" +
                "This app allows you to create itineraries with a starting and an ending point, and find villages with heritage " +
                "along your route where you can stop to rest. <br/><br/>" +
                "You will also be able to specify what type of village or services you'd like to find. <br/><br/>" +
                "Now, all you have to do is buckle up and embark on your adventure! <br/><br/>" + 
                "This app is currently in developpement</p>"

        }
    };

    const projectKeys = Object.keys(projectList);
    const projectsPerColumn = Math.floor(projectKeys.length / nbColumns.length);
    const remainingProjects = projectKeys.length % nbColumns.length;

    return (
        <div className={'projectPage'}>
            <VisibilityObserver className="projectBox"/>
            <VisibilityObserver className="blurScreen"/>
            {nbColumns.map((_, colIndex) => (
                <div key={'col' + colIndex} className={'projectCol'}
                     style={{width: nbColumns.length === 3 ? "33%" : nbColumns.length === 2 ? "50%" : "100%"}}>
                    {projectKeys
                        .slice(
                            colIndex * projectsPerColumn + Math.min(colIndex, remainingProjects),
                            (colIndex + 1) * projectsPerColumn + Math.min(colIndex + 1, remainingProjects)
                        )
                        .map((key) => (
                            <div key={key} className={'projectBox'} onClick={() => handleProjectClick(key)}>
                                <h2>{projectList[key].title}</h2>
                                <p>{projectList[key].description}</p>
                                <img src={projectList[key].img} alt={projectList[key].title}/>
                            </div>
                        ))}
                </div>
            ))}
            {selectedProject && (
                <ProjectCardpopUp projectData={projectList[selectedProject]}/>
            )}
        </div>
    );
}

export default Projects;