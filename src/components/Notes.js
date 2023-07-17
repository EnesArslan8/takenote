import { React } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

function Notes(props) {
  const { note } = props;
 


  return (
    <div className="noteMain">
      {note &&
        note.map((not, index) => (
          <div className="not" key={index}>
            <span>{not}</span>
            <div>
              <AiOutlineEllipsis className="dots"></AiOutlineEllipsis>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Notes;
