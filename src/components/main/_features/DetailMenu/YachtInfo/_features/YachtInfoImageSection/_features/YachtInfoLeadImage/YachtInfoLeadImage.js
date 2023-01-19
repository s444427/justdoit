import styles from "./YachtInfoLeadImage.module.css";

export function YachtInfoLeadImage(props) {
    return (
        <>
            <div>
                <img className={`${styles.lead_img}`} src={props.picture} alt=""/>
            </div>
        </>
    )
} export default YachtInfoLeadImage