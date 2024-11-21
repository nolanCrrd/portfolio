import VisibilityObserver from "../observer/visibilityObserver.tsx";

type LanguageProps = {
    img: string;
    imgAlt: string;
    name: string;
    progression: string;
}

function Language({img, imgAlt, name, progression}: LanguageProps) {
    return (
        <div className={'language'}>
            <div className={'languageImg'}>
                <img src={img} alt={imgAlt}/>
                <p>{name}</p>
            </div>
            <div className={'languageBarre'}>
                <VisibilityObserver className={'languageBarreProgression'}/>
                <div className={'languageBarreProgression scroll ' + name}/>
            </div>
            <p>{progression}</p>
        </div>
    );
}

export default Language;