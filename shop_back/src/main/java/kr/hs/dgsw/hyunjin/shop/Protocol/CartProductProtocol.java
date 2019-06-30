package kr.hs.dgsw.hyunjin.shop.Protocol;

import kr.hs.dgsw.hyunjin.shop.Domain.Product;
import kr.hs.dgsw.hyunjin.shop.Domain.Review;
import lombok.Data;

@Data
public class CartProductProtocol extends Product {

    Long cartId;
    int count;

    public CartProductProtocol(Product product, Long cartId) {
        super(product);
        this.cartId = cartId;
        this.count = 1;
    }
}
