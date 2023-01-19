// Project files
import YachtInfoHeader from "./_features/YachInfoHeader/YachtInfoHeader";
import YachtInfoImageSection from "./_features/YachtInfoImageSection/YachtInfoImageSection";
import YachtInfoDescriptionSection from "./_features/YachtInfoDescrioptionSection/YachtInfoDescriptionSection";

export function YachtInfo (props) {
    return (
        <>
            <div style={{padding: "20px, 0, 20px, 20px"}}>

                <YachtInfoHeader name = {props.current_yacht.name}/>
                <YachtInfoImageSection {...props}/>
                <YachtInfoDescriptionSection {...props}/>

            </div>
        </>
    )
}export default YachtInfo