import {Calendar, CaretUpSquare, PersonFill, Rulers} from "react-bootstrap-icons";

import logo from "../../../../assets/logo.svg"
import {Button} from "react-bootstrap";
import "./YachtCard.css"


export function YachtCard (props) {

    return (
        <>
            <div className = "card" style={{padding: "10px", margin: "10px", borderRadius: "25px"}} onClick={() => {
                console.log("WOW")
            }}>
                <div className="row">
                    <h5 style={{textAlign: "center"}}> Antila 27 </h5>
                </div>

                <div style={{display: "flex"}}>
                    <div style={{padding: "5px", alignContent: "center", justifyContent: "center"}}>
                        <img src={logo} style={{height: "80px", width: "80px", borderRadius: "25px", border: "solid"}}/>
                    </div>
                    <div style={{padding: "5px", margin: "auto"}}>
                        <div>
                            <PersonFill/> 8
                        </div>
                        <div>
                            <CaretUpSquare/> 3
                        </div>
                        <div>
                            <Calendar/> 2017
                        </div>
                        <div>
                            <Rulers/> 27 ft / 12,66 m
                        </div>
                    </div>
                    <div>
                        <Button variant="success" style={{marginTop: "20px"}}>
                            Rezerwuj
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
} export default YachtCard;