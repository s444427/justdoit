import styles from "./YachtCardTitle.module.css"

export function YachtCardTitle (props) {
    return (
        <>
            <div className={styles.card_title}>
                {props.id}. {props.name}
            </div>
        </>
    )
} export default YachtCardTitle