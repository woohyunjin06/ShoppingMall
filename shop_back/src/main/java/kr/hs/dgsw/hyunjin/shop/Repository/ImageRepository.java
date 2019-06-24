package kr.hs.dgsw.hyunjin.shop.Repository;


import kr.hs.dgsw.hyunjin.shop.Domain.Category;
import kr.hs.dgsw.hyunjin.shop.Domain.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {

}
