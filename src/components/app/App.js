import './App.css';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import {Button, Container} from "react-bootstrap";
import YachtCard from "./_features/YachtCardList/YachtCard";
import DetailMenu from "./_features/DetailMenu/DetailMenu";
import axios from "axios";


export function downloadAPI(options) {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

function App() {


    const options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/stock/v2/get-summary',
        params: {symbol: 'AMRN', region: 'US'},
        headers: {
            'X-RapidAPI-Key': '6763036c79msh8681f52b051f4cap1820f0jsn288cd3be66a0',
            'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        }
    };




    return (
        <div className="App">
            <Container style={{paddingTop: "100px"}}>
                <Row className="justify-content-md-center">
                    <Col sm={4} style={{background: "#95b8d1", paddingTop: "20px", paddingBottom: "20px", height: "800px"}}>
                        <Button variant="success" onClick={() => {downloadAPI(options)}}>Dodaj kartę</Button>
                        <nav style={{height: "750px", overflow: "hidden", overflowY: "scroll"}}>
                            <YachtCard/>
                            <YachtCard/>
                            <YachtCard/>
                            <YachtCard/>
                            <YachtCard/>
                            <YachtCard/>
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
