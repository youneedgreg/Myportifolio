import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sun from "./../public/assets/sun_icon.svg";
import Moon from "./../public/assets/moon_icon.svg";

function ThemeButton() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const isDark = theme === "dark";

	return (
		<button
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="rounded-full w-8 h-8 flex justify-center items-center bg-opacity-20 bg-[#8c9db1] dark:bg-[#21213467] transition-all duration-300 ease-in-out relative overflow-hidden"
		>
			<AnimatePresence mode="wait">
				{isDark ? (
					<motion.div
						key="moon"
						initial={{ y: -15, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 15, opacity: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="absolute w-5 h-5"
					>
						<Moon />
					</motion.div>
				) : (
					<motion.div
						key="sun"
						initial={{ y: 15, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -15, opacity: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="absolute w-5 h-5"
					>
						<Sun />
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
}

export default ThemeButton;
