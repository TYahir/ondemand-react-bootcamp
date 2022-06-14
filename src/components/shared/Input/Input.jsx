
import styled from 'styled-components';

const StyledTextInput = styled.input`
    border: 0 none;
    border-radius: 25px;
    padding: .5em 1em;
    border: 2px solid black;
    width: 100%;
    transition: 200ms;

    &:focus, &:active {
        outline: 2px solid black;
    }

    ::placeholder {
        color: black;
    }
`;

function Input({ type = 'text', placeholder = '', value = '', onChange = () => {}}) {
    return (
        <StyledTextInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;