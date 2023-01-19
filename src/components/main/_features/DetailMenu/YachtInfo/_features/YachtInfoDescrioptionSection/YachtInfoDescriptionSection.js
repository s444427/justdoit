import YachtInfoDescriptionCopyrights from "./_features/YachtInfoDescriptionCopyrights/YachtInfoDescriptionCopyrights";
import YachtInfoDescriptionHeader from "./_features/YachtInfoDescriptionHeader/YachtInfoDescriptionHeader";

export function YachtInfoDescriptionSection (props) {
    return (
        <>
            <div style={{marginBottom: 0}}>
                <YachtInfoDescriptionHeader {...props}/>
                
                {/**/}
                <div>
                    {props.current_yacht.description}
                </div>
            </div>

            <YachtInfoDescriptionCopyrights {...props}/>
        </>
    )} export default YachtInfoDescriptionSection