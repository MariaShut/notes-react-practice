import { useState } from "react";

function CreateArea({onAdd}) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    event.preventDefault();
    
    onAdd(note);
    setNote({
      title: "",
      content: "" 
    });
  }


  return (
    <div className="container create-area-container">
      <form className="create-note-form">
        <input 
          className="form-input note-caption" 
          type="text" 
          name="title" 
          onChange={handleChange}
          value={note.title} 
          placeholder="Title" 
        />
        <textarea 
          className="form-input textarea note-content" 
          name="content" 
          onChange={handleChange}
          value={note.content} 
          placeholder="Take a note..." 
          rows={3}></textarea>
        <button 
          className="btn create-note-form__btn" 
          onClick={submitNote}>ADD</button>
      </form>
    </div>
  )
}

export default CreateArea;