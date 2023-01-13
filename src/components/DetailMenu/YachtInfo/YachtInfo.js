import logo from "../../../assets/logo.svg"

export function YachtInfo (props) {

    return (
        <>
            <div style={{padding: "20px"}}>
                <h5 style={{textAlign: "center"}}>
                    Antila 27
                </h5>
                <div style={{display: "flex", textAlign:"center"}}>
                    <div>
                        <img src={logo} style={{width: "400px", background: "pink"}}/>
                    </div>
                    <div>
                        <img src={logo} style={{width: "200px", background: "pink"}} alt=""/>
                        <img src={logo} style={{width: "200px", background: "pink"}} alt=""/>
                        <img src={logo} style={{width: "200px", background: "pink"}} alt=""/>
                        <img src={logo} style={{width: "200px", background: "pink"}} alt=""/>
                    </div>
                </div>
                <div>
                    <h5 style={{textAlign: "center", margin: "10px"}}>
                        Tytuł podrozdziału
                    </h5>
                    <div>
                        hello
                    </div>
                </div>
            </div>
        </>
    )
}export default YachtInfo