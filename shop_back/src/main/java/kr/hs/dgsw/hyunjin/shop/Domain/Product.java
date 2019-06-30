package kr.hs.dgsw.hyunjin.shop.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Data
public class Product {

    @Id
    @GeneratedValue
    private Long id;

    private Long categoryId;

    private String title;
    private String company;

    private Long imageId;

    private String detailInfo; // 상세 정보
    private String purchaseInfo; // 구매 정보

    private Long originalPrice; // 시중 가격
    private Long price; // 판매 가격

    private int saleCount = 0;
    private boolean recommended = false;

    @CreationTimestamp
    private LocalDateTime created;

    @UpdateTimestamp
    private LocalDateTime modified;

    public Product(Long categoryId, String title, String company, Long imageId, String detailInfo, String purchaseInfo, Long originalPrice, Long price, int saleCount, boolean recommended) {
        this.categoryId = categoryId;
        this.title = title;
        this.company = company;
        this.imageId = imageId;
        this.detailInfo = detailInfo;
        this.purchaseInfo = purchaseInfo;
        this.originalPrice = originalPrice;
        this.price = price;
        this.saleCount = saleCount;
        this.recommended = recommended;
    }

    public Product(Product p) {
        this.id = p.getId();
        this.categoryId = p.getCategoryId();
        this.title = p.getTitle();
        this.company = p.getCompany();
        this.imageId = p.getImageId();
        this.detailInfo = p.getDetailInfo();
        this.purchaseInfo = p.getPurchaseInfo();
        this.originalPrice = p.getOriginalPrice();
        this.price = p.getPrice();
        this.saleCount = p.getSaleCount();
        this.recommended = p.isRecommended();
        this.created = p.getCreated();
        this.modified = p.getModified();
    }
}
