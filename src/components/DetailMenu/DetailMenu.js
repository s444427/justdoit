import logo from "../../assets/logo.svg"
import {Button, ButtonGroup} from "react-bootstrap";
import {useState} from "react";
import YachtInfo from "./YachtInfo/YachtInfo";

export function DetailMenu (props) {

    const [chosen_tab, set_chosen_tab] = useState(() => {
        return "INFO";
    });

    return (
        <>
            <div >
                <ButtonGroup style={{ width: "100%"}}>
                    <Button variant={"light"} onClick={() => set_chosen_tab("INFO")}>Informacje o Jachcie</Button>
                    <Button variant={"light"} onClick={() => set_chosen_tab("CALENDAR")}>Kalendarz dostępności</Button>
                    <Button variant={"light"} onClick={() => set_chosen_tab("OTHER")}>Button 3</Button>
                </ButtonGroup>
            </div>
            {chosen_tab === "INFO"?
                <YachtInfo/>:
                chosen_tab === "CALENDAR"?
                    <div>Bonjour</div>:<div>Nie można wyświetlić informacji</div>
            }
        </>
    )
}export default DetailMenu