import { memo} from "react";

const Todos = ({todos, addTodo}) => {
    console.log("child render");
    return (
        <>
        <h1 className="text-center my-20 font-bold text-3xl text-lime-700">My Todo List</h1>
        <div className="text-center my-10 text-xl border-2 border-solid border-black bg-slate-200 text-black font-semibold">
            {todos.map((todo, index) => {
                return <p key = {index}>{todo} </p>
            })}
            <button onClick={addTodo} className="my-5 border-2 border-solid bg-slate-500 rounded-md hover:bg-stone-500 ">Add Todo</button>

        </div>
        </>
    )
}
export default memo(Todos);