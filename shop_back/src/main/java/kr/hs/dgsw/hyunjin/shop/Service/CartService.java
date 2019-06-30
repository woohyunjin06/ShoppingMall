package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.CartItem;
import kr.hs.dgsw.hyunjin.shop.Protocol.CartProductProtocol;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;

import java.util.List;

public interface CartService {
    ResponseType addCartItem(CartItem item);
    List<CartProductProtocol> getCartItems(Long userId);
    boolean deleteCartItem(Long id);
}
