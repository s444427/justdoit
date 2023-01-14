// General React imports
import { connect } from "react-redux";

// Project files
import YachtCard from "./_features/sidebar/YachtCard/YachtCard";
import DetailMenu from "./_features/DetailMenu/DetailMenu";
import {mapDispatchToProps, mapStateToProps} from "../shared/Store/functions/storeFunctions";

// CSS files
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import {Button, Container} from "react-bootstrap";


export const App = (props) => {

    return (
        <div className="App">
            <Container style={{paddingTop: "70px"}}>
                <Row className="justify-content-md-center">
                    <Col sm={4} style={{background: "#304D6D", paddingTop: "20px", paddingBottom: "20px", height: "800px"}}>

                        <Button variant="success" onClick={() => {console.log("Button pressed")}}>Dodaj kartę</Button>

                        <nav style={{height: "700px", overflow: "hidden", overflowY: "scroll"}}>

                            {props.yachts_content.length !== 0?
                                props.yachts_content.map(card =>
                                    <YachtCard key = {card.id} {...props} {...card}/>
                                ): null
                            }

                        </nav>

                    </Col>
                    <Col sm={8} style={{background: "#82A0BC", padding: "20px"}}>
                        <DetailMenu {...props}/>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
