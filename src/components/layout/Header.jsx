"use client";

import ThemeToggler from "../ui/ThemeToggler";
import MenuToggler from "../ui/MenuToggler";
import Avatar from "../ui/Avatar";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Header = () => {
    const pathname = usePathname();
    const isAvatarShown = pathname !== "/";

    return (
        <header
            className="mb-12 flex items-center justify-between tracking-tight sm:mb-14"
            data-oid="m9fsy4v"
        >
            <div className="flex flex-1 justify-start" data-oid="97d42ed">
                {isAvatarShown ? <Avatar data-oid="oflddbp" /> : null}
            </div>
            <Navbar pathname={pathname} data-oid="1uixbm0" />
            <div
                className="flex flex-1 justify-end gap-x-2.5"
                data-oid="ye6b926"
            >
                <MenuToggler data-oid="9zh1xpt" />
                <ThemeToggler data-oid="za62fc6" />
            </div>
        </header>
    );
};

export default Header;
