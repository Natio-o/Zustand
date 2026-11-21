import { useEffect } from 'react'
import { useNotes, useNoteActions } from './store'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import VisibilityFilter from './components/VisibilityFilter'
import noteService from './services/notes'

const App = () => {
  const { initialize } = useNoteActions()
  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <NoteList />
    </div>
  )
}

export default App