import styled from 'styled-components';
import Input from '../Input';

const Form = styled.form`
    margin: 0;
    padding: 0;
    width: calc(100% - 8em);
    max-width: 400px;
`;

function SearchInput() {
    return ( 
        <Form>
            <Input placeholder="Search" />
        </Form>
     );
}

export default SearchInput;