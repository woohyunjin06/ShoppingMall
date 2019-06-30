package kr.hs.dgsw.hyunjin.shop.Controller;

import kr.hs.dgsw.hyunjin.shop.Domain.Product;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseFormat;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;
import kr.hs.dgsw.hyunjin.shop.Service.ProductService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/api/product")
    public ResponseFormat getAll() {
        return new ResponseFormat(ResponseType.OK);
    }

    @GetMapping("/api/category")
    public ResponseFormat getCategory() {
        return new ResponseFormat(ResponseType.OK, productService.getCategory());
    }

    @GetMapping("/api/product/popular")
    public ResponseFormat getPopular() {
        return new ResponseFormat(ResponseType.OK, productService.getPopular());
    }

    @GetMapping("/api/product/recommended")
    public ResponseFormat getRecommended() {
        return new ResponseFormat(ResponseType.OK, productService.getRecommended());
    }

    @GetMapping("/api/product/recommended/popular")
    public ResponseFormat getPopularRecommended() {
        return new ResponseFormat(ResponseType.OK, productService.getPopularRecommended());
    }

    @GetMapping("/api/product/{id}")
    public ResponseFormat getProductById(@PathVariable Long id) {
        Product found = productService.getProductById(id);
        ResponseType result = found != null ? ResponseType.OK : ResponseType.EMPTY_DATA;
        return new ResponseFormat(result, found);
    }

    @GetMapping("/api/product/category/{id}")
    public ResponseFormat getProductByCategoryId(@PathVariable Long id) {
        return new ResponseFormat(ResponseType.OK, productService.getProductByCategoryId(id));
    }
}
