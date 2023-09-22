import { useState } from "react"

export default function TodoInput({onSubmit}: {onSubmit: any}){
    const [text, setText] = useState('');
 
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text) return;
    onSubmit(text);
    setText('');
  };

    return (
        <form onSubmit={handleSubmit}>
      <input
      className="todo_input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo..."
      />
    </form>
    )
}