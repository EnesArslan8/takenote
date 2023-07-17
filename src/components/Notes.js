import React from "react";

function Notes(note) {
    const {not} =note;
  return (
    <div>
        {not && not.map((no, index) => (
        <div key={index}>{not}</div>
      ))}
    </div>
  );
}

export default Notes;
