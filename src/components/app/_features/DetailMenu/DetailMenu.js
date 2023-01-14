// General React imports
import {useState} from "react";

// Project files
import YachtInfo from "./YachtInfo/YachtInfo";
import YachtCalendar from "./YachtCalendar/YachtCalendar";

// CSS files
import {Button, ButtonGroup} from "react-bootstrap";

export function DetailMenu (props) {

    const [chosen_tab, set_chosen_tab] = useState(() => {
        return "INFO";
    });

    return (
        <>
            <div >
                <ButtonGroup style={{ width: "100%", marginBottom: "20px"}}>
                    <Button variant={"light"} onClick={() => set_chosen_tab("INFO")}>Informacje o Jachcie</Button>
                    <Button variant={"light"} onClick={() => set_chosen_tab("CALENDAR")}>Kalendarz dostępności</Button>
                </ButtonGroup>
            </div>

            {chosen_tab === "INFO"?
                <YachtInfo {...props}/>:
                chosen_tab === "CALENDAR"?
                    <YachtCalendar/>:
                    <div>Nie można wyświetlić informacji</div>
            }
        </>
    )
}export default DetailMenu