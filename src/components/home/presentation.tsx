function Presentation() {
    return (
        <div className={'homePresentation'}>
            <div className={'presentationTexte'}>
                <h1>Correard Nolan</h1>
                <p>
                    Welcome to my portfolio! I am a passionate developer with a great interest in web technologies and
                    software development. Since the start of my studies, I have honed my skills in various programming languages and
                    frameworks.
                </p>
                <p>
                    In this portfolio, you will find a collection of my projects. From front-end design to
                    back-end development, I strive to deliver something simple and functional.
                </p>
                <p>
                    Feel free to explore my work and contact me if you have any questions or if you would like to
                    collaborate on a project. Thank you for visiting!
                </p>
            </div>
            <div className={'presentationImg'}>
                <img src={`${import.meta.env.BASE_URL}images/home/presentation/etudiant.png`} alt={'developer'}/>
            </div>
        </div>
    );
}

export default Presentation;