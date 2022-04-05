import React from "react";
import './ActivitySelection.css';
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/Button/Button";
import JSONDATA from "../../Datatest.json";

const ActivitySelection = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            {/* <!-- TOP NAV START --> */}
            <NavBar pageTitle="Activity Selection" />
            {/* <!-- TOP NAV END --> */}
            <hr />

            {/* <!-- Activity selection  --> */}
            <section>
                <div>
                    <input type="text" id="mySearch" onKeyUp="myFunction()" placeholder="Search.." title="Selection Activity" />
                    <div>
                        <img src="./src/img/200x200.gif" /> 
                        <img src="./src/img/200x200.gif" /> 
                        <img src="./src/img/200x200.gif" /> 
                        <Button>Confirm</Button>        
                    </div>

                    <div>
                        <Button>Indoor Outdoor</Button>           
                    </div>
                    
                </div>

            
                {/* <div className="row 
                    <div className="row col-12">
                    <input
                        type="text"
                        className="search__input text-center mb-24"
                        placeholder="Search..."
                        onChange={event => {
                            setSearchTerm(event.target.value)
                        }}
                    />
                    </div>
                </div>
                

                    {JSONDATA.filter((val) => {
                    if (searchTerm == "") {
                    return val
                    } else if (val.act.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                        }
                    }).map((val, key) => {
                        return (
                            <div className="col-3 text-center mt-15" key={key}>
                                <div id="act-icon">
                                    <img className="pt-15" src={val.icon} alt="" />
                                    <p>{val.act}</p>
                                </div>
                            </div>
                        );
                    })}
                </div> */}

                {/* <a href= "#" /> 
                    <img src="#"alt= "Ex-images1" height ="20px" />
                <ul >
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li> 
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>    
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>       
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>    
                </ul>

                <ul >
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li> 
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>    
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>       
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>    
                </ul>

                <ul >
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li> 
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>    
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>       
                    <li><img src="./src/img/200x200.gif" /><p>Lorem </p></li>    
                </ul>
                
                <a href= "#" target="_blank" /> 
                    <img src="#"alt= "Ex-images1" height ="20px" /> */}
               
            </section>

            <Footer>@Copy Right 2022 : Goal to fit</Footer>


        </div>
    )
}

export default ActivitySelection;