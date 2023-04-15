import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from "./App.module.css"
import "./global.css"



function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Input />
        </main>
      </div>
    </>
  )
}

export default App
