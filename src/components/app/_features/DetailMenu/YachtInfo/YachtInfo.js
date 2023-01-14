import lead_img from "../../../../../assets/yachtsPhotos/Antila_27_model.jpg"
import supp_img_1 from "../../../../../assets/yachtsPhotos/Antila_27_inside.jpg"
import supp_img_2 from "../../../../../assets/yachtsPhotos/Antila_27_outside.jpg"
import supp_img_3 from "../../../../../assets/yachtsPhotos/Antila_27_outside_2.jpg"
import supp_img_4 from "../../../../../assets/yachtsPhotos/Antila_27_front.jpg"


import logo from "../../../../../assets/logo.svg"
import styles from "./YachtInfo.module.css"

export function YachtInfo (props) {

    return (
        <>
            <div style={{padding: "20px"}}>
                <h5 style={{textAlign: "center"}}>
                    {props.current_yacht.name}
                </h5>
                <div style={{display: "flex", textAlign:"center"}}>
                    <div>
                        <img className={styles.lead_img} src={require(`./../../../../../assets/yachtsPhotos/${props.current_yacht.picture[0]}`)} alt=""/>

                    </div>
                    <div>
                        <img className={styles.support_img} src={require(`./../../../../../assets/yachtsPhotos/${props.current_yacht.picture[0]}`)} alt=""/>
                        <img className={styles.support_img} src={require(`./../../../../../assets/yachtsPhotos/${props.current_yacht.picture[0]}`)} alt=""/>
                        <img className={styles.support_img} src={require(`./../../../../../assets/yachtsPhotos/${props.current_yacht.picture[0]}`)} alt=""/>
                        <img className={styles.support_img} src={require(`./../../../../../assets/yachtsPhotos/${props.current_yacht.picture[0]}`)} alt=""/>
                    </div>
                </div>
                <div>
                    <h5 style={{textAlign: "center", margin: "10px"}}>
                        Statystyki
                    </h5>
                    <div>
                        {props.current_yacht.description}
                    </div>
                </div>
            </div>
        </>
    )
}export default YachtInfo