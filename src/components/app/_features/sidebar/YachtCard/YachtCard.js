
// CSS files
import {Calendar, DoorClosed, Person, Rulers} from "react-bootstrap-icons";
import styles from "./YachtCard.module.css"


export function YachtCard (props) {


    return (
        <>
            <div className ={`card ${styles.card}`} onClick={() => {
                console.log("WOW")
                console.log(props)
                console.log(props.id)
                // props.handleChangeYacht({props})
            }}>
                <div className="row">
                    <h5 style={{textAlign: "center"}}> {props.id} {props.name} </h5>
                </div>

                <div style={{display: "flex"}}>

                    <div className={styles.invite_img_box}>
                        <img className={styles.invite_img} src={require(`./../../../../../assets/yachtsPhotos/${props.picture}`)} alt=""/>
                    </div>

                    <div style={{padding: "5px", margin: "auto"}}>
                        <div> <Person/> {props.places} </div>
                        <div> <DoorClosed/> {props.cabins} </div>
                        <div> <Calendar/> {props.build_year} </div>
                        <div> <Rulers/> {props.yacht_length_ft} ft / {props.yacht_length_m} m </div>
                    </div>

                    {/*<div>*/}
                    {/*    <Button variant="success" style={{marginTop: "20px"}}>*/}
                    {/*        Rezerwuj*/}
                    {/*    </Button>*/}
                    {/*</div>*/}

                </div>

            </div>
        </>
    )
} export default YachtCard;