// Project files
import YachtInfoHeader from "./_features/YachInfoHeader/YachtInfoHeader";
import YachtInfoLeadImage from "./_features/YachtInfoLeadImage/YachtInfoLeadImage";
import YachtImagePanel from "./_features/YachtInfoImagePanel/YachtInfoImagePanel";


export function YachtInfo (props) {
    return (
        <>
            <div style={{padding: "20px"}}>

                <YachtInfoHeader name = {props.current_yacht.name}/>

                <div style={{display: "flex", textAlign:"center"}}>
                    <YachtInfoLeadImage picture = {props.current_yacht.picture[0]}/>
                    <YachtImagePanel picture = {props.current_yacht.picture}/>
                </div>

                <div>
                    {/**/}
                    <h5 style={{textAlign: "center", margin: "10px"}}>
                        Statystyki
                    </h5>
                    {/**/}
                    <div>
                        {props.current_yacht.description}
                    </div>
                </div>

            </div>
        </>
    )
}export default YachtInfo