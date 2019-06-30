package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.CartItem;
import kr.hs.dgsw.hyunjin.shop.Protocol.CartProductProtocol;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;
import kr.hs.dgsw.hyunjin.shop.Repository.CartRepository;
import kr.hs.dgsw.hyunjin.shop.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public ResponseType addCartItem(CartItem item) {
        boolean cartItemExist = this.cartRepository.findCartItem(item.getUserId(), item.getProductId()).isPresent();
        if(cartItemExist)
            return ResponseType.CART_ADD_DUPLICATE;

        cartRepository.save(item);
        return ResponseType.CART_ADD_OK;
    }

    @Override
    public List<CartProductProtocol> getCartItems(Long userId) {
        List<CartItem> found = cartRepository.findAllByUserId(userId);
        return found.stream()
                .map(f ->
                        new CartProductProtocol(productRepository.findById(f.getProductId()).orElse(null), f.getId())
                ).collect(Collectors.toList());
    }

    @Override
    public boolean deleteCartItem(Long id) {
        CartItem found = cartRepository.findById(id).orElse(null);
        if(found == null) {
            return false;
        }
        cartRepository.delete(found);
        return true;
    }
}
