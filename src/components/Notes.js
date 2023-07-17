import { useState } from "react";
import { AiOutlineEllipsis, AiFillCloseSquare } from "react-icons/ai";
// import { useLocalStorage } from "../useLocalStorage";
import Modal from "react-modal";

function Notes(props) {
  const { note } = props;
  const { setNote } = props;

  const customStyles = {
    content: {
      display: "flex",
      flexDirection: "column",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "rgba(0,0,0,.6)",
      maxWidth: "35%",
      maxHeight: "70%",
      
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null); // Track the index of the note to be deleted
  const [updatedNoteText, setUpdatedNoteText] = useState(""); // New state to hold the updated note text

  function openModal(index) {
    setSelectedNoteIndex(index); // Set the index of the note to be deleted
    setUpdatedNoteText(note[index]); // Set the initial value of the updated note text
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const deleteNote = () => {
    if (selectedNoteIndex !== null) {
      const updatedNotes = [...note];
      updatedNotes.splice(selectedNoteIndex, 1); // Remove the note at the specified index
      setNote(updatedNotes); // Update the state with the modified notes array
      closeModal(); // Close the modal after deleting the note
    }
  };
  const update = () => {
    if (selectedNoteIndex !== null && updatedNoteText.trim() !== "") {
      const updatedNotes = [...note];
      updatedNotes[selectedNoteIndex] = updatedNoteText; // Update the note at the selected index
      setNote(updatedNotes);
      closeModal();
    }
  };
  return (
    <div className="noteMain">
      {note &&
        note.map((not, index) => (
          <div className="not" key={index}>
            <span>{not}</span>
            <div>
              <AiOutlineEllipsis
                onClick={() => openModal(index)}
                className="dots"
              ></AiOutlineEllipsis>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName="Overlay"
              >
                <button
                  style={{
                    fontSize: 40,
                    width: 0,
                    color: "#d00",
                    marginLeft: "auto",
                    marginRight: 40,
                    cursor:"pointer"
                  }}
                  onClick={closeModal}
                >
                  <AiFillCloseSquare></AiFillCloseSquare>
                </button>
                <textarea
                  cols={50}
                  rows={40}
                  style={{
                    color: "black",
                    resize: "none",
                    borderRadius: 4,
                    padding: 10,
                    textIndent: 20,
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: "system-ui",
                    lineHeight: 2,
                    background:
                      'url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2451714.jpg")',
                  }}
                  value={updatedNoteText}
                  onChange={(e) => setUpdatedNoteText(e.target.value)}
                ></textarea>
                <>
                  <div style={{display:"flex",justifyContent:"space-between",padding:"5px,10px",margin:"10px 5px"}}>
                    <button style={{padding:"5px 10px",backgroundColor:"rgba(230,230,0,1)",borderRadius:4,cursor:"pointer",fontSize:15,fontWeight:500}} onClick={update}>Güncelle</button>
                    <button style={{padding:"5px 10px",backgroundColor:"rgba(230,0,0,1)",borderRadius:4,cursor:"pointer",fontSize:15,fontWeight:500}}  onClick={deleteNote}>Sil</button>
                  </div>
                </>
              </Modal>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Notes;
