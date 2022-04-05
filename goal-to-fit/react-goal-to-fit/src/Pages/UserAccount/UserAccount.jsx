import React from "react";
import './UserAccount.css';
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ImageTitle from "../../components/ImageTitle/ImageTitle";

const UserAccount = () => {
    return (
        <div>

        <section className="container-user-account">
            <div className="profile-name secondary-text-color ">
                <ImageTitle imgSrc={'./logo.png'} classDiv={"profile-name"}
                    classImg={"icon-logo"}>
                    Goal to fit
                </ImageTitle>
            </div>


            {/* <img src="./logo.png" alt="profile" /> */}
            <div>Username</div>
            <p>Gender</p>
            <Button>MALE</Button>
            <Button>FEMALE</Button>

            <label htmlFor="">Year of birth</label>
            <Input type="date" />

            <label htmlFor="">Height</label>
            <Input type="text" />

            <label htmlFor="">Weight</label>
            <Input type="text" />

            <label htmlFor="">Goal</label>
            <Input type="text" />

            <p>Exercise day</p>
            <Input type="checkbox" name="m" />
            <label htmlFor="m">M</label>
            <Input type="checkbox" name="tu" />
            <label htmlFor="tu">TU</label>
            <Input type="checkbox" name="w" />
            <label htmlFor="w">W</label>
            <Input type="checkbox" name="th" />
            <label htmlFor="th">TH</label>
            <Input type="checkbox" name="f" />
            <label htmlFor="f">SA</label>
            <Input type="checkbox" name="su" />
            <label htmlFor="su">SU</label>

            <p>start time</p>
            <p>*It takes about 30 minutes or more.</p>
            <Input type="text" name="" id="" />
            <p>:</p>
            <Input type="text" name="" id="" />

            <Button>SAVE</Button>
        </section>
        <Footer>@Copy Right 2022 : Goal to fit</Footer>

        </div>
    );
}

export default UserAccount;