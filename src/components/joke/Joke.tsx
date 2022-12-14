/* eslint-disable react-hooks/exhaustive-deps */
import {useQuery} from '@tanstack/react-query';
import styles from './joke.module.scss'

interface JokeI {
	question: string;
	punchline: string;
}

const Joke = () => {
	const fetchData = async (): Promise<JokeI> => {
		return	await fetch(
			'https://backend-omega-seven.vercel.app/api/getjoke')
			.then(res => {
				if(!res.ok) {
					throw new Error(`${res.status} Error`)
				}
					return res.json()
			})
			.then(data => data[0]);
	}
  const {data: joke, isLoading, refetch } = useQuery(['joke'], fetchData);

	if(isLoading) {
		return <h3 className={`txt-25 txt-mono ${styles.loading}`}>Loading...</h3>
	}
  return (
    <div className={`txt-center`}>
			{joke 
			? <>
					<div className={`${styles.box}`}>
							<h3 className={`txt-25 ${styles.question}`}>
									{joke.question}
							</h3>
							
							<h2 className={`txt-20 txt-mono ${styles.punchline}`}>
									{joke.punchline}
							</h2>
					</div>
					<div className={`${styles.box_border}`}></div>

					<button className={`txt-20 button-default`}
						onClick={() => refetch()}>
							New Joke
					</button>
				</>
			: ''}
    </div>
  )
}

export default Joke;