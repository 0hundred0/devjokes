/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import AppContext from "../../context/AppContext"
import styles from './joke.module.scss'

const Joke = () => {
    const { getJoke, question, punchline } = useContext(AppContext);

    useEffect(() => {
        getJoke();
    }, []);

  return (
    <div className={`txt-center`}>
        {(question && punchline) && 
            <div className={`${styles.box}`}>
                <h3 className={`txt-25 ${styles.question}`}>
                    {question}
                </h3>
                
                <h2 className={`txt-20 txt-mono ${styles.punchline}`}>
                    {punchline}
                </h2>
            </div>
        }

        {question && 
            <button className={`txt-20 button-default`}
                onClick={() => getJoke()}>
                New Joke
            </button>
        }
        
    </div>
  )
}

export default Joke