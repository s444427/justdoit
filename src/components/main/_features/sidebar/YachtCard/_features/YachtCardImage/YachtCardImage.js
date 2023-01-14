import styles from "../../YachtCard.module.css";

export function YachtCardImage (props) {
    return (
        <>
            <div className={styles.card_img_box}>
                <img className={styles.card_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
            </div>
        </>
    )
} export default YachtCardImage