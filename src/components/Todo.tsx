import { Trash, Check } from "phosphor-react"

import styles from "./Todo.module.css"
import { useState } from "react";

interface TodoProps {
    data: {
        id: string;
        content: string;
        isCompleted: boolean;
    }
    handleStateChange: (id: string) => void;
    deleteTodo: (id: string) => void;
} 

export function Todo({ data, handleStateChange, deleteTodo }: TodoProps) {
    const [todoIsComplete,setTodoIsComplete] = useState<boolean>(data.isCompleted)

    const handleFineshedTodo = () => {
        handleStateChange(data.id)
        setTodoIsComplete(!todoIsComplete)
    }

    const handleDeletTodo = () => { 
        deleteTodo(data.id)
    }

    return (
        <div className={styles.todo}>
            <button onClick={handleFineshedTodo} className={styles.checkBox}>
                <div className={!todoIsComplete ? styles.simulaRadio : styles.simulaRadioCompleted}>
                    {todoIsComplete && <Check size={16} color="white" />}
                </div>
            </button>
            <span className={!todoIsComplete ? styles.todoContent : styles.todoContentCompleted }>{data.content}</span>
            <button onClick={handleDeletTodo} className={styles.deleteTask} title="Deletar comentário">
                <Trash size={20} />
            </button>
        </div>
    );
}