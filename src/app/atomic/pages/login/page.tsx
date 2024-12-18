"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Presentation from "../../molecules/presentation";
import Login from "../../molecules/login";
import Options from "../../molecules/options";

export default function Page() {

    return (
        <div className=" flex flex-col justify-center items-center gap-20 h-svh">
                <Presentation/>
                <Options/>
                <Login/>
        </div>
    );
}
