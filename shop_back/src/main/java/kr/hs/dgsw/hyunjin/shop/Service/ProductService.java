package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.Category;
import kr.hs.dgsw.hyunjin.shop.Domain.Product;

import java.util.List;

public interface ProductService {
    List<Category> getCategory();

    List<Product> getPopular();

    List<Product> getRecommended();
    List<Product> getPopularRecommended();
}
