import YachtCard from "./YachtCard/YachtCard";
import styles from "./Sidebar.module.css"

export function Sidebar (props) {
    return (
        <>
            <nav className={styles.side_navbar_scroll}>

                {props.yachts_content.length !== 0?
                    props.yachts_content.map(card =>
                        <YachtCard key = {card.id} {...props} {...card}/>
                    ): null
                }

            </nav>
        </>
    )
} export default Sidebar