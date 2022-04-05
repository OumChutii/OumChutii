import React from "react";
import './CurrentActivity.css';
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";

const CurrentActivity = () => {
    return (
        <div>
            <NavBar pageTitle="Current Activity" />
            <section class="current activity">
                <img src="./yoga.png" />
                <div>Set timer</div>
                <p> 00:30:00 </p>
                <div>
                <img src="./src/img/video_icon.png" />
                <img src="./src/img/gallery.png" />
                </div>
                <Button>start</Button>
                <Button>pause</Button>
                <Button>stop</Button>
            </section>

            <Footer>@Copy Right 2022 : Goal to fit</Footer>

        </div>
    )
}

export default CurrentActivity;