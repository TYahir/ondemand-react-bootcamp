import { IoCartOutline } from "react-icons/io5";
import { StyledCart } from "./Cart.styled";

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