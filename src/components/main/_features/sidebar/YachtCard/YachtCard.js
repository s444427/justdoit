// Project files
import YachtCardInfo from "./_features/YachtCardInfo/YachtCardInfo";
import YachtCardImage from "./_features/YachtCardImage/YachtCardImage";
import YachtCardTitle from "./_features/YachtCardTitle/YachtCardTitle";

// CSS files
import styles from "./YachtCard.module.css"

export function YachtCard (props) {

    let currently_selected = props.id === props.current_yacht.id

    return (
        <>
            <div className ={` ${styles.card}`}
                 style= {{background: currently_selected?"#939196":"white"}}
                 onClick={() => {props.handleChangeYacht(props) }}>

                <div>
                    <YachtCardTitle {...props}/>
                </div>

                <div style={{display: "flex"}}>
                    <YachtCardImage {...props}/>
                    <YachtCardInfo {...props}/>
                </div>

            </div>
        </>
    )
} export default YachtCard;