import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={`txt-center ${styles.header}`}> 
        <h1 className={`txt-30`}>A few Dev-Jokes 🤓</h1>
        <h3 className={`txt-20`}>Some jokes definitely warrant a google search...</h3>
    </header>
  )
}

export default Header;