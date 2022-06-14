import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";

const StyledCart = styled.div`
    margin: 0;
    padding: 0;

    button {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        cursor: pointer;

        svg {
           font-size: 2em;
        }
    }
`;

function Cart() {
    return ( 
        <StyledCart>
            <button>
                <IoCartOutline />
            </button>
        </StyledCart>
    );
}

export default Cart;