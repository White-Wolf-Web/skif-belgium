import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
//import Nav from 'react-bootstrap/Nav';
//import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function NavTabThree() {
    const { t } = useTranslation();
    return (
        <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>SKIF-B</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/calendar">{t("nav.calendar")}</Dropdown.Item>
                <Dropdown.Item>{t("nav.board")}</Dropdown.Item>
                <Dropdown.Item>{t("nav.rules")}</Dropdown.Item>
                <Dropdown.Item href="/referees" >{t("nav.referee")}</Dropdown.Item>
                <Dropdown.Item href="/dojoslist">Dojos</Dropdown.Item>
                <Dropdown.Item>YŪDANSHA KAI</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
