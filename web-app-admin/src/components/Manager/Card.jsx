import React from "react";
import { Link } from "react-router-dom";

function Card({ title, action, description, customs }) {
  return (
    <div style={{ maxWidth: "63ch" }}>
      <h2 className="text-5xl xl:text-4xl font-mono font-semibold">{title}</h2>
      <h3 className="text-3xl xl:text-2xl font-light">{description}</h3>
      <div
        className="my-2"
        style={{ width: "100%", height: 1, background: "black" }}
      ></div>
      <ul className="gap-x-5 gap-y-3 flex flex-row flex-wrap text-3xl xl:text-2xl font-normal">
        <li className="action-manager-link">
          <Link to={`/${action}/instructor`}>Instructor</Link>
        </li>
        <li className="action-manager-link">
          <Link to={`/${action}/pm`}>PM</Link>
        </li>
        <li className="action-manager-link">
          <Link to={`/${action}/student`}>Estudiante</Link>
        </li>
        <li className="action-manager-link">
          <Link to={`/${action}/cohort`}>Cohorte</Link>
        </li>
        <li className="action-manager-link">
          <Link to={`/${action}/group`}>Grupo</Link>
        </li>
        <li className="action-manager-link">
          <Link to={`/${action}/event`}>Evento</Link>
        </li>
        {customs &&
          Array.isArray(customs) &&
          customs.length > 0 &&
          customs.map((custom) => {
            <li className="action-manager-link">
              <Link to={`/${action}/${custom.link}`}>{custom.text}</Link>
            </li>;
          })}
      </ul>
    </div>
  );
}

export default Card;
