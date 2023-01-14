import styles from "../../YachtInfo.module.css";

export function YachtImagePanel (props) {

    return(
        <>
            {/*skonfigurować proxy, żeby skrócić url (/assets) lub zmienna z początkiem ścieżki*/}

            <div>
                {/**/}
                <img className={styles.support_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
                <img className={styles.support_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
                <img className={styles.support_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
                <img className={styles.support_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
            </div>
        </>
    )
} export default YachtImagePanel