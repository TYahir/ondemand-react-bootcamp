import { StyledTextField } from "./TextField.styled";
import PropTypes from 'prop-types';

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

TextField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default TextField;