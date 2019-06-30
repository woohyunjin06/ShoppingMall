package kr.hs.dgsw.hyunjin.shop.Protocol;

import kr.hs.dgsw.hyunjin.shop.Domain.Review;
import lombok.Data;

@Data
public class UsernameReviewProtocol extends Review {

    String name;

    public UsernameReviewProtocol(Review review, String name) {
        super(review);
        this.name = name;
    }
}
