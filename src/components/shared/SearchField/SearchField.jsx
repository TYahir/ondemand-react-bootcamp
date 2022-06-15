import styled from 'styled-components';
import TextField from '../TextField';

const StyledForm = styled.form`
    margin: 0;
    padding: 0;
    width: calc(100% - 8em);
    max-width: 400px;
`;

function SearchField() {
    return ( 
        <StyledForm>
            <TextField placeholder="Search" />
        </StyledForm>
     );
}

export default SearchField;