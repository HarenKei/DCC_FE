"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";
import GoogleAuth from 'google-auth-library';

export default function Login() {
    // get session from nextAuth
    const { data, status } = useSession();
    console.log(data?.user);
    // useSession uses React Context

    // if the user exists -> show a Sign Out button and their information
    if(data?.user) {
        return (
            <>
                <p>status: {status}</p>
                <img src={data.user.image} alt="" style={{borderRadius: '50px'}} />
                <p>{data?.user?.name}</p>
                
                {/* Pass session info to server component */}
                <UserCard user={data?.user}/>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => signIn()} type="button" className="btn btn-primary">Sign In with Google</button>
            </>
        )
    }

    // if a user doesn't exist -> show a Sign In button
}