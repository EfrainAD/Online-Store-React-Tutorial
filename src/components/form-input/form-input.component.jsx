import { Group, FormInputLabel, Input } from './form-input.styles'

const FormInput = ({label, ...otherProps}) => {
     return (
          <Group>
               <Input {...otherProps} />
               {label && (
                    <FormInputLabel
                         Shrink={`${otherProps.value.length}`}>{label}</FormInputLabel>
               )}
          </Group>
     )
}

export default FormInput