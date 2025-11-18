import { useNavigate } from "react-router-dom";

const currentNavigation = () => {
    const navigation = useNavigate()

    const currentRoute = (getRoute: string) => {
        navigation(getRoute)
    }

    return currentRoute;

};

export default currentNavigation;