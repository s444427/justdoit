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
            {console.log("props")}
            {console.log(props)}
            <div style={{padding: "20px"}}>
                <h5 style={{textAlign: "center"}}>
                    Antila 27
                </h5>
                <div style={{display: "flex", textAlign:"center"}}>
                    <div>
                        <img src={lead_img} className={styles.lead_img}/>
                    </div>
                    <div>
                        <img src={supp_img_1} className={styles.support_img} alt=""/>
                        <img src={supp_img_2} className={styles.support_img} alt=""/>
                        <img src={supp_img_3} className={styles.support_img} alt=""/>
                        <img src={supp_img_4} className={styles.support_img} alt=""/>
                    </div>
                </div>
                <div>
                    <h5 style={{textAlign: "center", margin: "10px"}}>
                        Statystyki
                    </h5>
                    <div>
                        hello
                    </div>
                </div>
            </div>
        </>
    )
}export default YachtInfo