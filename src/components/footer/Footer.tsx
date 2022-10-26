import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footer} txt-15`}>
        <p className='button-default'>
            <a href="https://documenter.getpostman.com/view/16443297/TzkyLee7" 
            target="_blank" rel="noopener noreferrer">
              DevJoke.app
            </a>
        </p>

        <p className='button-default'>
            <a href="http://github.com/0hundred0/devjokes" 
            target="_blank" rel="noopener noreferrer">
              Repo
            </a>
        </p>

        <p className='button-default'>
            <a href="https://www.devjoke.app/submit-dev-joke" 
            target="_blank" rel="noopener noreferrer">
                Submit a Joke
            </a>
        </p>
    </footer>
  )
}

export default Footer