import { StyledTextField } from "./TextField.styled";

function TextField({ type = 'text', placeholder = '', value = '', onChange = () => {}}) {
    return (
        <StyledTextField
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default TextField;