import { useNoteActions } from "../store"

const NoteForm = () => {
  const { add } = useNoteActions()

  const generateId = () => Number((Math.random() * 1000000).toFixed(0))

  const addNote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value
    await add(content)
    e.target.reset()
  }

  return (
    <>
      <form onSubmit={addNote}>
        <input name= "note" />
        <button type='submit'>add</button>
      </form>
    </>
  )
}

export default NoteForm