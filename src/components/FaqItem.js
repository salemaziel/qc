import React, { useState } from "react";
import "./FaqItem.scss";

function FaqItem(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="FaqItem py-4" onClick={() => setExpanded(!expanded)}>
      <h4>
        <span className="text-primary mr-3">
          <i
            className={
              "fas" +
              (expanded ? " fa-minus" : "") +
              (!expanded ? " fa-plus" : "")
            }
          />
        </span>
        {props.question}
      </h4>

      {/*{expanded && <div className="mt-3">{props.answer}</div>}*/}
      {expanded && <div className="mt-3">
        <ul>
          <li>{props.listItem1}</li>
          <li>{props.listItem2}</li>

        </ul>
        <div className="m-3">
          <a href={props.link} rel="nofollow">{props.link}</a>
        </div>
        
        
        {props.answer}</div>}
    </article>
  );
}

export default FaqItem;
