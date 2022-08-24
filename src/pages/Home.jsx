import React from 'react'
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UsserSearch";

function Home(){
    return (
        <>
            {/*Search component*/}
            <UserSearch />
            <UserResults />

        </>
    )
}

export default Home
