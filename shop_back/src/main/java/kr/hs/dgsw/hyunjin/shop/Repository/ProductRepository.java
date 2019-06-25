package kr.hs.dgsw.hyunjin.shop.Repository;

import kr.hs.dgsw.hyunjin.shop.Domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findTop4ByOrderBySaleCountDesc(); // 인기 상품

    List<Product> findTop4ByRecommendedIsTrue(); // 추천 상품
    List<Product> findTop3ByRecommendedIsTrueOrderBySaleCountDesc(); //인기 추천 상품

    List<Product> findTop3ByOrderByPriceDesc(); // 가격 낮ㄴ은 순
}
