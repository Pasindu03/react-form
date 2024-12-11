import {Outlet} from "react-router";
import {Navigation} from "./Navigation.tsx";

const RootLayout = () => {
    return (
        <div>
            <Navigation/>
            <Outlet />
        </div>
    );
};

export default RootLayout;