import { CgMenuGridO } from "react-icons/cg";
import Button from "../subcomponent/Button";

const Nav = () => {

    return (
        <nav>
            <div>
                <h1 id="nav_logo">
                    billy english
                </h1>
            </div>
            
            <div>
                <ul>
                    <li>
                        <Button
                            icon={<CgMenuGridO size={30} />}
                            className="nav_menu_button"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;