import Note from "./Note";

function NoteList({newNotesArr, onDelete}) {
  return (
    <div className="noteList-container container">
      {newNotesArr.map( (noteItem, index) => (
        <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default NoteList;