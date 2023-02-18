
import "./Calendar.css";
import Accordion from "react-bootstrap/Accordion";
//import CalendarPdf from "./CalendarPdf";
import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import CalendarPoster from "./CalendarPoster";
//import kancho from "../ASSETS/IMAGES/Posters/Kancho2022.webp";
import "../i18n";

export default function Calendar(props) {
    const { t } = useTranslation();
    const [items, setItems] = useState([]);
    const handleClick = () => {
        return (CalendarPoster)
    }
    console.log(CalendarPoster);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://skifb-admin.be/api/CalendarAPI/GetCalendar");
                const data = await response.json();
                setItems(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    return (
        <main>
            <h1>{t("federal_calendar.h1")}</h1>
            <div className="calendarReact">
                <div className="calendarAccordion">
                    {items.map((item) => (
                        <Accordion defaultActiveKey="false" key={item.id} flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div>
                                        {" "}
                                        {item.startDay +
                                            "/" +
                                            item.startMonth +
                                            "/" +
                                            item.startYear}{" "}
                                        &emsp; {item.title}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="calendarBody">
                                    <div className="">
                                        <div>
                                            {t("federal_calendar.timetable")} {item.startHours}{" "}
                                            {t("federal_calendar.to")} {item.endHours + "."}
                                        </div>
                                        <div>
                                            {t("federal_calendar.location")} {item.club}
                                        </div>
                                        <div>
                                            {t("federal_calendar.adress")} {item.addressStreet}{" "}
                                            {item.addressNumber + ","} {item.addressCity}{" "}
                                            {item.addressPostalCode}{" "}
                                        </div>
                                        <div>
                                            {"Province:"} {item.addressProvince} &emsp; {item.addressCountry}
                                        </div>
                                        <br></br>
                                        <div>
                                            {" "}
                                            {t("federal_calendar.contact")}
                                            {item.contact}
                                        </div>
                                        <div>
                                            {" "}
                                            {t("federal_calendar.mail")}
                                            {item.email}
                                        </div>
                                        <div>
                                        <br></br>
                                        <div>{item.price}</div>
                                    </div>
                                        <br></br>
                                        <div>{item.description}</div>
                                    </div>
                                   
                                    <CalendarPoster  />
                                  
  
                                    
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </div>{" "}
            </div>
        </main>
    );
}

