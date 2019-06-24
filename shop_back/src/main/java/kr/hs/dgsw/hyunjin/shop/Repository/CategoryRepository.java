package kr.hs.dgsw.hyunjin.shop.Repository;


import kr.hs.dgsw.hyunjin.shop.Domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
