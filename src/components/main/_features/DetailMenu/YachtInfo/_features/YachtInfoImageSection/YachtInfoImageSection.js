import YachtInfoLeadImage from "./_features/YachtInfoLeadImage/YachtInfoLeadImage";
import YachtImagePanel from "./_features/YachtInfoImagePanel/YachtInfoImagePanel";

export function YachtInfoImageSection (props) {
    return (
        <>
            <div style={{display: "flex", textAlign:"center"}}>
                <YachtInfoLeadImage picture = {props.current_yacht.picture[0]}/>
                <YachtImagePanel picture = {props.current_yacht.picture}/>
            </div>
            <div>{props.current_yacht.pictures_owner}</div>
        </>
    )} export default YachtInfoImageSection