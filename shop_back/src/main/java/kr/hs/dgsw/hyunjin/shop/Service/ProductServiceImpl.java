package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.Category;
import kr.hs.dgsw.hyunjin.shop.Domain.Product;
import kr.hs.dgsw.hyunjin.shop.Repository.CategoryRepository;
import kr.hs.dgsw.hyunjin.shop.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductRepository productRepository;

    @PostConstruct
    public void init() {
        categoryRepository.save(new Category("상의(남)"));
        categoryRepository.save(new Category("하의(남)"));
        categoryRepository.save(new Category("상의(여)"));
        categoryRepository.save(new Category("하의(여)"));
        categoryRepository.save(new Category("구두"));
        categoryRepository.save(new Category("가방"));
        categoryRepository.save(new Category("소품"));

        productRepository.save(new Product(1L, "테스트아이템 1", "요기", null, "테스트아이템 입니다.","구매정보 입니다.", 60000L,5000L,0, true));
        productRepository.save(new Product(1L, "테스트아이템 2", "요기", null, "테스트아이템 입니다.","구매정보 입니다.", 60000L,5000L,4,true));
        productRepository.save(new Product(1L, "테스트아이템 3", "요기", null, "테스트아이템 입니다.","구매정보 입니다.", 60000L,5000L,2, true));
        productRepository.save(new Product(1L, "테스트아이템 4", "요기", null, "테스트아이템 입니다.","구매정보 입니다.", 60000L,5000L,0,true));
        productRepository.save(new Product(1L, "테스트아이템 5", "요기", null, "테스트아이템 입니다.","구매정보 입니다.", 60000L,5000L,7,true));
        productRepository.save(new Product(1L, "테스트아이템 6", "요기", null, "테스트아이템 입니다.","구매정보 입니다.", 60000L,5000L,1, false));
    }

    @Override
    public List<Category> getCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public List<Product> getPopular() {
        return productRepository.findTop4ByOrderBySaleCountDesc();
    }

    @Override
    public List<Product> getRecommended() {
        return productRepository.findTop4ByRecommendedIsTrue();
    }

    @Override
    public List<Product> getPopularRecommended() {
        return productRepository.findTop3ByRecommendedIsTrueOrderBySaleCountDesc();
    }
}
