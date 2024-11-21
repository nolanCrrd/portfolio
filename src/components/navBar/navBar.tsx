import NavBarLink from "./navBarLink.tsx";
import {useEffect, useState} from "react";

function NavBar() {
    const [burger, setBurger] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [burgerFirstSpawn, setBurgerFirstSpawn] = useState(true);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 900) {
                setBurger(true);
                setBurgerFirstSpawn(true);
            } else {
                setBurger(false);
                setBurgerOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [burger, burgerOpen]);

    useEffect(() => {
        function handleBurgerClick(e: MouseEvent) {
            if (e.target === document.querySelector('.burgerBTN') || (e.target as HTMLElement).closest('a')) {
                setBurgerOpen(!burgerOpen);
                setBurgerFirstSpawn(false);

            }
        }

        window.addEventListener('click', handleBurgerClick);

        return () => {
            window.removeEventListener('click', handleBurgerClick);
        }
    }, [burgerOpen]);

    return (
        <div className="navBarDiv">
            {burger ?
                <>
                    <img src={'/src/assets/images/navBar/burger-bar.png'} className={"burgerBTN"} alt={"burgerBTN"}/>
                </>
                : ""
            }
            <div>
                <h1>Correard Nolan</h1>
                <h2>Software Developer</h2>
            </div>
            <div className={'pageSelect' + (burgerOpen ? ' open' : '') + (burgerFirstSpawn ? ' firstSpawn' : '')}>
                <ul>
                    <NavBarLink to={'/'} text={"Home"} order={"un"} burgerOpen={burgerOpen}/>
                    <NavBarLink to={'/projects'} text={"Projects"} order={"deux"} burgerOpen={burgerOpen}/>
                    <NavBarLink to={'/contact'} text={"Contact"} order={"trois"} burgerOpen={burgerOpen}/>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;