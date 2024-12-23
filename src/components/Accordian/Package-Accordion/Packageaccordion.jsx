import React, {useState} from "react";
import './accordian.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Packageaccordion = ({title, content}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="plus-minus">{isActive ? <CiCircleMinus fontSize={30} color="red" /> : <CiCirclePlus fontSize={30} color="green" />}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Packageaccordion;
