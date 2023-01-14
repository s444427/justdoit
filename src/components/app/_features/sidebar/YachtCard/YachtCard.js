
// CSS files
import {Calendar, DoorClosed, Person, Rulers} from "react-bootstrap-icons";
import styles from "./YachtCard.module.css"


export function YachtCard (props) {

    let currently_selected = props.id === props.current_yacht.id

    return (
        <>
            <div className ={`card ${styles.card}`}
                 style= {{background: currently_selected?"#939196":"white"}}
                 onClick={() => {props.handleChangeYacht(props) }}>

                <div className="row">
                    <h5 style={{textAlign: "center"}}> {props.id} {props.name} </h5>
                </div>

                <div style={{display: "flex"}}>

                    <div className={styles.invite_img_box}>
                        <img className={styles.invite_img} src={require(`./../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
                    </div>

                    <div style={{padding: "5px", margin: "auto"}}>
                        <div> <Person/> {props.places} </div>
                        <div> <DoorClosed/> {props.cabins} </div>
                        <div> <Calendar/> {props.build_year} </div>
                        <div> <Rulers/> {props.yacht_length_ft} ft / {props.yacht_length_m} m </div>
                    </div>

                </div>

            </div>
        </>
    )
} export default YachtCard;