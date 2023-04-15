import { Trash } from "phosphor-react"

import styles from "./Todo.module.css"
import { useState } from "react";

interface TodoProps {
    data: {
        id: string;
        content: string;
        isCompleted: boolean;
    }
} 

export function Todo({ data }: TodoProps) {
    const [todoIsComplete,setTodoIsComplete] = useState<boolean>(data.isCompleted)

    const handleFineshedTodo = () => {
        setTodoIsComplete(!todoIsComplete)
    }

    return (
        <div className={styles.todo}>
            <button onClick={handleFineshedTodo} className={styles.checkBox}>
                <div className={!todoIsComplete ? styles.simulaRadio : styles.simulaRadioCompleted}></div>
            </button>
            <span className={!todoIsComplete ? styles.todoContent : styles.todoContentCompleted }>{data.content}</span>
            <button className={styles.deleteTask} title="Deletar comentário">
                <Trash size={20} />
            </button>
        </div>
    );
}