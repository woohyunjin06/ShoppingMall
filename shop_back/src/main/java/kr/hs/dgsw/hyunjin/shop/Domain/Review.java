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
public class Review {

    @Id
    @GeneratedValue
    private Long id;

    private Long productId;
    private Long userId;

    private String content;

    @CreationTimestamp
    private LocalDateTime created;

    @UpdateTimestamp
    private LocalDateTime updated;

    public Review(Review review) {
        this.id = review.getId();
        this.productId = review.getProductId();
        this.userId = review.getUserId();
        this.content = review.getContent();
        this.created = review.getCreated();
        this.updated = review.getUpdated();
    }
}
