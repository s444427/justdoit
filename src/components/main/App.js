// General React imports
import { connect } from "react-redux";

// Project files
import {mapDispatchToProps, mapStateToProps} from "../shared/Store/functions/storeFunctions";
import YachtInfo from "./_features/DetailMenu/YachtInfo/YachtInfo";
import Sidebar from "./_features/Sidebar/Sidebar";

// CSS files
import './App.css';

export const App = (props) => {

    return (
        <div className="App">
            <div className="content_box">
                <div className="sidebar_menu">
                    <Sidebar {...props}/>
                </div>
                <div className="highlight_box">
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
