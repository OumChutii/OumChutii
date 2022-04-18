import React from "react";
import './ActivitySelection.css';
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import Input from "../../components/Input/Input";


const imageLogo = <img src="./logo.png" className="icon" />

function ActivitySelection() {
    return (
        <>
            <div className="wrapper">
                <NavBar pageTitle="ActivitySelection" />
                {/*  */}

                <section className="container container-activity-selection ">
                    <div className="container-css-50">
                        <Input className="add-input" type="text" id="Search" placeholder="Search.." title="Selection Activity"

                        />
                        <div className="activity-select ">
                            {imageLogo}
                            {imageLogo}
                            {imageLogo}
                            <Button className="button-cf" type="submit" >Confirm</Button>
                        </div>
                        <SwitchButton classLabel="display-none" textLeft="Indoor" textRight="Outdoor" textOnSwitch="indoor-outdoor"
                            inputName="toggle-1"
                        />
                        <div className="container-list">
                            {/* <a href="#" >
                                <i className="fas fa-chevron-left fa-5x" aria-hidden="true"></i>
                            </a> */}
                            <div className="activity-list">
                                <input type="radio" name="activity" value="Run"></input>
                                {imageLogo}
                                <input type="radio" name="activity" value="Swim"></input>
                                {imageLogo}
                                <input type="radio" name="activity" value="Hiking"></input>
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                                {imageLogo}
                            </div>

                            {/* <a href="#" >
                                <i className="fas fa-chevron-right fa-5x" aria-hidden="true"></i>
                            </a> */}
                        </div>
                    </div>
                </section>

                <div className="push"></div>
            </div>
            <Footer>@Copy Right 2022 : Goal to fit</Footer>
        </>
    );

}
export default ActivitySelection; 