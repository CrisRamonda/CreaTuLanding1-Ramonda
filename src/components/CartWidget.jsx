import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

function CartWidget() {
    return(
        <div className="cart-logo">
            <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon />
            </StyledBadge>
        </div>
    )
}

export default CartWidget