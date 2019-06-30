package kr.hs.dgsw.hyunjin.shop.Controller;

import kr.hs.dgsw.hyunjin.shop.Domain.Review;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseFormat;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;
import kr.hs.dgsw.hyunjin.shop.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/api/review/{id}")
    public ResponseFormat getReviewByProductId(@PathVariable Long id) {
        return new ResponseFormat(ResponseType.OK, reviewService.getReviewByProductId(id));
    }

    @PostMapping("/api/review")
    public ResponseFormat postReview(@RequestBody Review review) {
        reviewService.postReview(review);

        return new ResponseFormat(ResponseType.OK);
    }

}
