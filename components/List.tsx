import Todo from "./Todo";
import ListFooter from "./ListFooter";

export default function List(props: any){
    return (
        <div className="todo_list">
            {props.data.map(function(todo:any){
                return (
                    <Todo key={todo.id} text={todo.text}/>
                )
            })}
            <ListFooter total_todos={props.data} />
        </div>
    )
}