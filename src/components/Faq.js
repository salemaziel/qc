import React from "react";
import FaqItem from "./FaqItem";

function Faq(props) {

  return (
    <>
      {props.items.map((item, index) => (
        <FaqItem 
        question={item.question} 
        answer={item.answer} 
        key={index}
        listItem1={item.listItem1}
        listItem2={item.listItem2}

        link={item.link}
        />
      ))}
    </>
  );
}

export default Faq;
