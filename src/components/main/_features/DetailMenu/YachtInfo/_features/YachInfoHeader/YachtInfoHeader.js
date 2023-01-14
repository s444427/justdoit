import styles from "./YachtInfoHeader.module.css"

export function YachtInfoHeader(props) {

    return(
        <>
            <div className={styles.header}>
                {props.name}
            </div>
        </>
    )
}export default YachtInfoHeader