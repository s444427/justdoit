import YachtCard from "./YachtCard/YachtCard";

export function Sidebar (props) {
    return (
        <>
            <nav style={{height: "750px", overflow: "hidden", overflowY: "scroll", }}>

                {props.yachts_content.length !== 0?
                    props.yachts_content.map(card =>
                        <YachtCard key = {card.id} {...props} {...card}/>
                    ): null
                }

            </nav>
        </>
    )
} export default Sidebar