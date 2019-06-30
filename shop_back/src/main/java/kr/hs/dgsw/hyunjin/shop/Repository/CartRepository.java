package kr.hs.dgsw.hyunjin.shop.Repository;

import kr.hs.dgsw.hyunjin.shop.Domain.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<CartItem, Long> {


    @Query("select t from CartItem t where t.userId = :userId and t.productId = :productId")
    Optional<CartItem> findCartItem(@Param("userId") Long userId, @Param("productId") Long productId);

    List<CartItem> findAllByUserId(Long userId);

}
