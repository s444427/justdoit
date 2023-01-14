import styles from "../../YachtInfo.module.css";
import images from "../../../../../../shared/ImageManager/ImageManager";

export function YachtImagePanel (props) {

    let img_title = props.picture[0].split('.jpg')

    return(
        <>
            {/*{img_title}*/}
            {/*skonfigurować proxy, żeby skrócić url (/assets) lub zmienna z początkiem ścieżki*/}

            <div>
                {/**/}
                {/*<img src= {images.Antila_27_front}/>*/}
                <img className={styles.support_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
                <img className={styles.support_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
                <img className={styles.support_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
                <img className={styles.support_img} src={require(`./../../../../../../../assets/yachtsPhotos/${props.picture[0]}`)} alt=""/>
            </div>
        </>
    )
} export default YachtImagePanel