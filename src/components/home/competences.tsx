import CompetencesSkills from "./competencesSkills.tsx";
import TimeLineText from "./timeLineText.tsx";
import Language from "./language.tsx";

function Competences() {
    return (
        <div className={'competences'}>
            <div className={'part1'}>
                <div className={'un'}>
                    <h1>Soft Skills</h1>
                    <div className={'ligne1'}>
                        <CompetencesSkills img={'/portfolio/images/home/competences/groupe.png'} imgAlt={'Team'}
                                           text={"Teamwork"}/>
                        <CompetencesSkills img={'/portfolio/images/home/competences/communication.png'}
                                           imgAlt={'Communication'} text={'Communication'}/>
                    </div>
                    <div className={'ligne2'}>
                        <CompetencesSkills img={'/portfolio/images/home/competences/flexibilite.png'}
                                           imgAlt={'Flexibility'} text={'Adaptability'}/>
                        <CompetencesSkills img={'/portfolio/images/home/competences/sablier.png'} imgAlt={'Hourglass'}
                                           text={'Time Management'}/>
                        <CompetencesSkills img={'/portfolio/images/home/competences/diplome.png'}
                                           imgAlt={'Graduation Cap'} text={'Self-taught'}/>
                    </div>
                </div>
                <div className={'deux'}>
                    <h1>Education</h1>
                    <div className={'timeLineBox'}>
                        <div className={'timeLine'}></div>
                        <div className={'timeLineList'}>
                            <TimeLineText title={'2023 - Baccalaureate - Lycée Choiseul, 37000'} side={'right'}>
                                <p>
                                    Specialties:
                                    <ul>
                                        <li>Mathematics</li>
                                        <li>Physics</li>
                                        <li>NSI</li>
                                    </ul>
                                </p>
                            </TimeLineText>
                            <TimeLineText title={'2023 -> Now - BUT Computer Science - IUT2, 3800'} side={'right'}>
                                <p>
                                    Currently in the 2nd year of BUT Computer Science
                                </p>
                            </TimeLineText>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'part2'}>
                <div className={'deux'}>
                    <h1>Professional Experience</h1>
                    <div className={'timeLineBox'}>
                        <div className={'timeLineList'}>
                            <TimeLineText title={'Summer 2022 - Roofer Assistant - ARC37, 37330'} side={'left'}>
                                <p>
                                    Summer job with no previous experience.
                                    <br/><br/>
                                    Objective: Assist a roofer with handling and simple tasks
                                    <br/><br/>
                                    Skills Developed:
                                    <ul>
                                        <li>Teamwork</li>
                                        <li>Adaptability</li>
                                    </ul>
                                </p>
                            </TimeLineText>
                            <TimeLineText title={'Summer 2023 - Mason Assistant - Hubert Arnaud, 37340'} side={'left'}>
                                <p>
                                    Objective: Assist a small team of masons with handling and simple tasks
                                    <br/><br/>
                                    Skills Developed:
                                    <ul>
                                        <li>Teamwork</li>
                                        <li>Adaptability</li>
                                    </ul>
                                </p>
                            </TimeLineText>
                            <TimeLineText title={'Dec 2023 -> Apr 2024 - Crew Member - McDo, 38000'} side={'left'}>
                                <p>
                                    Objective: Kitchen crew member at McDo
                                    <br/><br/>
                                    Skills Developed:
                                    <ul>
                                        <li>Teamwork</li>
                                        <li>Quick Learning</li>
                                        <li>Pressure Management</li>
                                        <li>Adaptability</li>
                                    </ul>
                                </p>
                            </TimeLineText>
                            <TimeLineText title={'Summer 2024 - Hospital Service Agent - 37230'} side={'left'}>
                                <p>
                                    Objective: Manage a cafeteria independently within a hospital.
                                    <br/><br/>
                                    Skills Developed:
                                    <ul>
                                        <li>Communication</li>
                                        <li>Autonomy</li>
                                    </ul>
                                </p>
                            </TimeLineText>
                        </div>
                        <div className={'timeLine'}></div>
                    </div>
                </div>
                <div className={'un'}>
                    <h1>Languages</h1>
                    <Language img={'/portfolio/images/home/languages/html.png'} imgAlt={'HTML'} name={'HTML'}
                              progression={'Complete Mastery'}/>
                    <Language img={'/portfolio/images/home/languages/css.png'} imgAlt={'CSS'} name={'CSS'}
                              progression={'Very Advanced Mastery'}/>
                    <Language img={'/portfolio/images/home/languages/react.png'} imgAlt={'React'} name={'React'}
                              progression={'Self-taught Learning'}/>
                    <Language img={'/portfolio/images/home/languages/java.png'} imgAlt={'Java'} name={'Java'}
                              progression={'Advanced Mastery'}/>
                    <Language img={'/portfolio/images/home/languages/cpp.png'} imgAlt={'Cpp'} name={'Cpp'}
                              progression={'Partial Mastery'}/>
                    <Language img={'/portfolio/images/home/languages/python.png'} imgAlt={'Python'} name={'Python'}
                              progression={'Advanced Mastery'}/>
                </div>
            </div>
        </div>
    );
}

export default Competences;