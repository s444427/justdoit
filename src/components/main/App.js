// General React imports
import { connect } from "react-redux";

// Project files
import YachtCard from "./_features/sidebar/YachtCard/YachtCard";
import {mapDispatchToProps, mapStateToProps} from "../shared/Store/functions/storeFunctions";

// CSS files
import './App.css';
import YachtInfo from "./_features/DetailMenu/YachtInfo/YachtInfo";


export const App = (props) => {

    return (
        <div className="App" style={{height: "100vh"}}>
            <div style={{paddingTop: "70px", maxWidth: "1500px", margin: "auto", display: "flex"}}>
                    <div style={{background: "#304D6D", paddingTop: "20px", paddingBottom: "20px", height: "800px", width: "30%"}}>

                        <nav style={{height: "750px", overflow: "hidden", overflowY: "scroll"}}>
                            {props.yachts_content.length !== 0?
                                props.yachts_content.map(card =>
                                    <YachtCard key = {card.id} {...props} {...card}/>
                                ): null
                            }

                        </nav>
                    </div>
                    <div style={{background: "#82A0BC", padding: "20px", width: "70%"}}>
                        <YachtInfo {...props}/>
                    </div>
            </div>
        </div>
  );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
