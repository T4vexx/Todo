import { InvalidEvent, useState, ChangeEvent, FormEvent } from 'react'
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';

import clipboard from "../assets/clipboard.svg"
import plus from "../assets/plus.svg"
import styles from "./Input.module.css"


interface TodoTask {
    id: string;
    content: string;
    isCompleted: boolean;
}

export function Input() {
    const [newTodo,setNewTodo] = useState<TodoTask[]>([])
    const [newTodoContent,setNewTodoContent] = useState<string>('')

    const handleCreateNewTodo = (event: FormEvent) => {
        event.preventDefault()
        setNewTodo([...newTodo,{id: uuidv4(), content: newTodoContent, isCompleted: false}])
        setNewTodoContent('')
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    const handleNewToDoChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('')
        setNewTodoContent(event.target.value)
    }

    const isNewToDoEmpty = newTodoContent.length === 0

    return (
        <>
            <form onSubmit={handleCreateNewTodo} className={styles.inputMake}>
                <input 
                name="newTodo"
                placeholder='Adicione uma nova tarefa'
                onInvalid={handleNewCommentInvalid}
                onChange={handleNewToDoChange}
                value={newTodoContent}
                required
                />
                <button type="submit" disabled={isNewToDoEmpty}>
                    Criar
                    <img src={plus} />
                </button>
            </form>
            <div className={styles.tasks}>
                <header>
                    <div className={styles.todos}>
                        <strong>Tarefas criadas</strong>
                        <div className={styles.pagination}><span>0</span></div>
                    </div>

                    <div className={styles.concludedTodos}>
                        <strong>Concluidas</strong>
                        <div className={styles.pagination}><span>2 de 5</span></div>
                    </div>
                </header>
            </div>

            {newTodo.length > 0 ? (
                <div className={styles.tasksTodos}>
                    {newTodo.map(t => {
                        return <Todo key={t.id} data={t} />
                    })}
                </div>
            ) :
            (
                <div className={styles.withoutTodo}>
                    <img src={clipboard} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                </div> 
            )}
        </>
    );
}