package kr.hs.dgsw.hyunjin.shop.Controller;

import kr.hs.dgsw.hyunjin.shop.Domain.CartItem;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseFormat;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;
import kr.hs.dgsw.hyunjin.shop.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/api/cart")
    public ResponseFormat addCartItem(@RequestBody CartItem item) {
        return new ResponseFormat(cartService.addCartItem(item));
    }

    @GetMapping("/api/cart/{userId}")
    public ResponseFormat getCartItems(@PathVariable Long userId) {
        return new ResponseFormat(ResponseType.OK, cartService.getCartItems(userId));
    }

    @DeleteMapping("/api/cart/{id}")
    public ResponseFormat deleteCartItem(@PathVariable Long id) {
        cartService.deleteCartItem(id);
        return new ResponseFormat(ResponseType.OK);
    }

}
