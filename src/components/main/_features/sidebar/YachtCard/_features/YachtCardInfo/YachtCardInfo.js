import {Calendar, DoorClosed, Person, Rulers} from "react-bootstrap-icons";

export function YachtCardInfo(props) {
    return (
        <>
            <div style={{padding: "5px", margin: "auto"}}>
                <div> <Person/> {props.places} </div>
                <div> <DoorClosed/> {props.cabins} </div>
                <div> <Calendar/> {props.build_year} </div>
                <div> <Rulers/> {props.yacht_length_ft} ft / {props.yacht_length_m} m </div>
            </div>
        </>
    )
} export default YachtCardInfo