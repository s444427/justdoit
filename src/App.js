import './styles/App.css';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import YachtListCard from "./components/YachtListCard/YachtListCard";
import DetailMenu from "./components/DetailMenu/DetailMenu";


function App() {
    return (
        <div className="App">
            <Container style={{paddingTop: "100px"}}>
                <Row className="justify-content-md-center">
                    <Col sm={4} style={{background: "#95b8d1", paddingTop: "20px", paddingBottom: "20px", height: "800px"}}>
                        <nav style={{height: "750px", overflow: "hidden", overflowY: "scroll"}}>
                            <YachtListCard/>
                            <YachtListCard/>
                            <YachtListCard/>
                            <YachtListCard/>
                            <YachtListCard/>
                            <YachtListCard/>
                        </nav>
                    </Col>
                    <Col sm={8} style={{background: "#E8DDB5", padding: "20px"}}>
                        <DetailMenu/>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default App;
