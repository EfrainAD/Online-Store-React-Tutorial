import {BaseButton, InvertedButton, GogleSignInButton} from './button.styles.jsx'

export const BTN_TYPE_CLASSES = {
     base: 'base',
     google: 'google-sign-in',
     inverted: 'inverted',
}

export const getButton = (buttonType = BTN_TYPE_CLASSES.base) => (
     {
          [BTN_TYPE_CLASSES.base]: BaseButton, 
          [BTN_TYPE_CLASSES.google]: GogleSignInButton, 
          [BTN_TYPE_CLASSES.inverted]: InvertedButton,
     }[buttonType]
)

const Button = ({children, btnType, ...otherProps}) => {
     const CustomButton = getButton(btnType)
     return (
          <CustomButton {...otherProps}>
               {children}
          </CustomButton>
     )
}

export default Button