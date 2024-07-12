import classes from './Header.module.css'

function Footer({footer}){
    return(
      <footer>
        <div  className={classes.footer}>
        <p><a href='#'>{footer.autor}</a>
        {footer.direitos}</p>
        </div>
      </footer>  
    )
}

export default Footer