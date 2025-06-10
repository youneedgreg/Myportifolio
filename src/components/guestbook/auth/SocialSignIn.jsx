import SignInButton from "./SignInButton";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialSignIn = () => {
    const SIGN_IN_OPTIONS = [
        {
            icon: <FcGoogle size={18} />,
            provider: "google",
            label: "Sign in with Google",
        },
        {
            icon: <FaGithub size={18} />,
            provider: "github",
            label: "Sign in with GitHub",
        },
    ];

    return (
        <div className="flex flex-wrap gap-2">
            {SIGN_IN_OPTIONS.map((item, index) => (
                <SignInButton
                    key={index}
                    provider={item.provider}
                    icon={() => item.icon}
                    label={item.label}
                />
            ))}
        </div>
    );
};

export default SocialSignIn;
