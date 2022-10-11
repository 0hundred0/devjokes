import { useReducer } from 'react';
import AppContext from './AppContext';
import AppReducer from './AppReducer';
import { SET_LOADING, SET_JOKE } from './_actions';

const AppState = props => {
    const initStates = {
        loading: false,
        question: '',
        punchline: ''
    }
    const [state, dispatch] = useReducer(AppReducer, initStates);

    // Sets Load State
    const setLoading = bool => {
        dispatch({
            type: SET_LOADING,
            payload: bool
        })
    }

    const setJoke = joke => {
        dispatch({
            type: SET_JOKE,
            payload: joke
        })
    }

    async function getJoke() {
        // Sets loading state to true
        setLoading(true);
        // Get request to Dev Joke App
        fetch('https://backend-omega-seven.vercel.app/api/getjoke')
            .then(response => {
                if(!response.ok) {
                    throw new Error(`${response.status} Error`)
                }
                return response.json()
            })
            .then(data => {
                // Joke data sent to reducer
                setJoke(data[0]);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }

    return(
        <AppContext.Provider value={{
            loading: state.loading,
            question: state.question,
            punchline: state.punchline,
            setLoading: setLoading,
            getJoke: getJoke
        }}>
            { props.children }
        </AppContext.Provider>
    )
}

export default AppState;