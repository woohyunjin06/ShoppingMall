package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.Review;
import kr.hs.dgsw.hyunjin.shop.Protocol.UsernameReviewProtocol;

import java.util.List;

public interface ReviewService {
    List<UsernameReviewProtocol> getReviewByProductId(Long productId);
    void postReview(Review review);
}
