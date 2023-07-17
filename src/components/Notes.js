import { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
// import { useLocalStorage } from "../useLocalStorage";
import Modal from "react-modal";

function Notes(props) {
  const { note } = props;
  const { setNote } = props;

  const customStyles = {
    content: {
      display: "flex",
      flexDirection:"column",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "rgba(0,0,0,.6)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null); // Track the index of the note to be deleted
  const [updatedNoteText,setUpdatedNoteText]=useState("");// New state to hold the updated note text

  function openModal(index) {
    setSelectedNoteIndex(index); // Set the index of the note to be deleted
    setUpdatedNoteText(note[index]);// Set the initial value of the updated note text
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
                contentLabel="Example Modal"
              >
                <button onClick={closeModal}>close</button>
                <textarea
                  cols={50}
                  rows={40}
                  style={{ color: "black", resize: "none" }}
                  value={updatedNoteText}
                  onChange={(e)=>setUpdatedNoteText(e.target.value)}
                ></textarea>
                <form>
                  <input />
                  <button onClick={update}>Güncelle</button>
                  <button onClick={deleteNote}>Sil</button>
                </form>
              </Modal>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Notes;
