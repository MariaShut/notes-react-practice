function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h2 className="note-caption">{props.title}</h2>
      <p className="note-content">{props.content}</p>
      <button className="btn note__btn" onClick={handleClick}>DELETE</button>
    </div>
  )
}

export default Note;