import React from "react"
import { Link, useNavigate } from 'react-router-dom';
import "../App.css"
export default function LandingPage() {

    const router = useNavigate();
    return (
        <>

            
            <div className="landingPageContainer">
                <nav>
                    <div className="navHeader">
                        <h2>ReeMan</h2>
                        <h4>Video Call</h4>
                    </div>
                    <div className="navList">

                        {/* //
                        <p onClick={() => {
                            router("/randomGuest");
                        }}>Join As Guest</p>
                        // */}

                        <p onClick={() => {
                            router("/auth");
                        }}>Register</p>

                        <div onClick={ () => {
                            router("/auth")
                        }} role="button">

                            <p>Login</p>
                        </div>
                    </div>
                </nav>

                <div className="landingMainContainer">
                    <div>
                        <h1>Connect with <span style={{ color: "#FF9838" }}>ReeMan</span> VideoCall</h1>
                        <p>Stay close, no matter the distance</p>
                        <div role="button">
                            <Link to={"/auth"}>Let's Connect</Link>
                        </div>
                    </div>
                    <div>
                        <img src="/mainImage.png" alt="" />
                    </div>
                </div>

            </div>


        </>

    )
}