"use client";
import { useSession } from "next-auth/react";
import Form from "../Form";
import SocialSignIn from "./SocialSignIn";

const Authentication = () => {
    const { data: session } = useSession();
    return session?.user ? (
        <Form data-oid="x4snnjt" />
    ) : (
        <SocialSignIn data-oid="qi9dpvd" />
    );
};

export default Authentication;
