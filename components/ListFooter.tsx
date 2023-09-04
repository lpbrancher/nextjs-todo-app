export default function ListFooter(props:any) {
    return (
        <div className="list_footer">
            <p>{props.total_todos.length} items left</p>
            <div className="actions">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <button className="clear_completed">Clear Completed</button>
        </div>
    )
}