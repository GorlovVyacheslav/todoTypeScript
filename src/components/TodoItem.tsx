import { ITodo } from "../types/data"
interface ITodoItem extends ITodo {
  toggleTodo:(id: number)=> void;
  removeTodo:(id: number)=> void;
}



const TodoItem: React.FC<ITodoItem> = (props) => {
  const {id,title,complete,removeTodo,toggleTodo} = props
  return <div>
    <input type="checkbox" checked={complete} onChange={()=>toggleTodo(id)} />
    {title}
    <button onClick={()=>removeTodo(id)}>x</button>
    </div>
};
export { TodoItem };
