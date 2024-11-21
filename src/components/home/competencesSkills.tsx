type CompetencesSkillsProps = {
    img: string;
    imgAlt: string;
    text: string;
};

function CompetencesSkills({ img, imgAlt, text }: CompetencesSkillsProps) {
    return (
        <div className={'softSkill'}>
            <img src={img} alt={imgAlt}/>
            <p>{text}</p>
        </div>
    );
}

export default CompetencesSkills;