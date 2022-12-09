import './button.styles.scss'

const BTN_TYPE_CLASSES = {
     google: 'google-sign-in',
     inverted: 'inverted',
}

const Button = ({children, btnType}) => {
     return (
          <button className={`button-container ${ BTN_TYPE_CLASSES[btnType]}`}>
               {children}
          </button>
     )
}

export default Button