import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { createClient } from "@liveblocks/client";
import {LiveblocksYjsProvider} from "@liveblocks/yjs";
import * as Y from "yjs";
 
// Sets up Liveblocks client.
const client = createClient({
  publicApiKey:
    "pk_prod_fAxHJojd9L1CSsl-bTxSuSkJ-REmKxV5DOe2KfgNCCHgTpQxBQZ82dLQzP5qdzOJ",
});
// Enters a multiplayer room.
// Use a unique name as a "room" for your application.
const { room } = client.enterRoom("your-project-name", {
  initialPresence: {},
});
 
// Sets up Yjs document and Liveblocks Yjs provider.
const doc = new Y.Doc();
const provider = new LiveblocksYjsProvider(room, doc);
 
export default function App() {
  const editor = useCreateBlockNote({
    collaboration: {
      // The Yjs Provider responsible for transporting updates:
      provider,
      // Where to store BlockNote data in the Y.Doc:
      fragment: doc.getXmlFragment("document-store"),
      // Information (name and color) for this user:
      user: {
        name: "My Username",
        color: "#ff0000",
      },
    },
  });
 
  // Renders the editor instance.
  return <BlockNoteView editor={editor} />;
}
 