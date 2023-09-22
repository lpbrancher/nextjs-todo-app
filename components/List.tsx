import Todo from "./Todo";

export default function List(props: any){

    return (
        <div className="todo_list">
            {props.data.map(function(todo:any){
                return (
                    <Todo key={todo.id} done={todo.done} text={todo.text}/>
                )
            })}
            <div className="list_footer">
            <p>{props.data.length} items left</p>
            <div className="actions">
                <button onClick={props.filterAll}>All</button>
                <button onClick={props.filterActive}>Active</button>
                <button onClick={props.filterCompleted}>Completed</button>
            </div>
            <button className="clear_completed">Clear Completed</button>
        </div>
        </div>
    )
}