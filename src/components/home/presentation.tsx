function Presentation() {
    return (
        <div className={'homePresentation'}>
            <div className={'presentationTexte'}>
                <h1>Correard Nolan</h1>
                <p>
                    Welcome to my portfolio! I am a passionate developer with a great interest in web technologies and
                    software development. Over the years, I have honed my skills in various programming languages and
                    frameworks, and I am excited to showcase my work to you.
                </p>
                <p>
                    In this portfolio, you will find a collection of my projects, each demonstrating my ability to solve
                    complex problems and create efficient and user-friendly applications. From front-end design to
                    back-end development, I strive to deliver high-quality solutions that meet the needs of users and
                    clients.
                </p>
                <p>
                    Feel free to explore my work and contact me if you have any questions or if you would like to
                    collaborate on a project. Thank you for visiting!
                </p>
            </div>
            <div className={'presentationImg'}>
                <img src={"/portfolio/images/home/presentation/etudiant.png"} alt={'developer'}/>
            </div>
        </div>
    );
}

export default Presentation;