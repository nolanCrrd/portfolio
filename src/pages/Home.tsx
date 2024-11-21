import Presentation from "../components/home/presentation.tsx";
import Competences from "../components/home/competences.tsx";

function Home() {
    return (
        <div className={'homePage'}>
            <Presentation/>
            <Competences/>
        </div>
    );
}

export default Home;