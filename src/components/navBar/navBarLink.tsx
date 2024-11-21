import {NavLink} from "react-router-dom";

type NavBarLinkProps = {
    to: string;
    text: string;
    order: string;
    burgerOpen: boolean;
};

function NavBarLink({to, text, order, burgerOpen}: NavBarLinkProps) {
    return (
        <>
            <li className={order + (burgerOpen ? " visible" : "")}>
                <NavLink to={to} className={({isActive}) => isActive ? "active" : ""}>
                    {text}
                </NavLink>
                <div className={'navLinkAnnimation down'}></div>
                <div className={'navLinkAnnimation right'}></div>
                <div className={'navLinkAnnimation up'}></div>
                <div className={'navLinkAnnimation left'}></div>
            </li>
        </>
    );
}

export default NavBarLink;