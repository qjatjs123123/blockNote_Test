
import './App.css'
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
function App() {
  const editor = useCreateBlockNote();

  return <BlockNoteView editor={editor} />;
}

export default App
