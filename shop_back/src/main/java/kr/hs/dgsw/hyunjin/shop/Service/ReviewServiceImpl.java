package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.Review;
import kr.hs.dgsw.hyunjin.shop.Domain.User;
import kr.hs.dgsw.hyunjin.shop.Protocol.UsernameReviewProtocol;
import kr.hs.dgsw.hyunjin.shop.Repository.ReviewRepository;
import kr.hs.dgsw.hyunjin.shop.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void init() {
        Review review = new Review();
        review.setContent("좋아요");
        review.setProductId(12L);
        review.setUserId(15L);
        reviewRepository.save(review);
    }

    @Override
    public List<UsernameReviewProtocol> getReviewByProductId(Long productId) {
        List<Review> found = reviewRepository.findAllByProductId(productId);
        return found.stream()
                .map(f -> new UsernameReviewProtocol(f, getUsername(f.getUserId()))).collect(Collectors.toList());
    }

    @Override
    public void postReview(Review review) {
        reviewRepository.save(review);
    }

    private String getUsername(Long userId)  {
        return userRepository.findById(userId)
                .map(User::getUsername)
                .orElse(null);
    }

}
