import styles from "../../../../YachtInfo.module.css";

export function YachtImagePanel (props) {

    return(
        <>
            <div>
                <img className={`${styles.support_img} ${styles.support_img_box}`} src={props.picture[1]} alt=""/>
                <img className={`${styles.support_img} ${styles.support_img_box}`} src={props.picture[2]} alt=""/>
                <img className={`${styles.support_img} ${styles.support_img_box}`} src={props.picture[3]} alt=""/>
                <img className={`${styles.support_img} ${styles.support_img_box}`} src={props.picture[4]} alt=""/>
            </div>
        </>
    )
} export default YachtImagePanel