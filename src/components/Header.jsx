import classes from './Header.module.css'

function Header(){
    return(
        <header className = {classes.header}>
            <h1 className={classes.title}>React + Js</h1>
            <nav className={classes.navegacao}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Produtos</a></li>
                    <li> <a href='#'>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header