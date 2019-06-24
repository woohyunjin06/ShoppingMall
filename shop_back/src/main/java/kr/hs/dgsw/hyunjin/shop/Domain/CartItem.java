package kr.hs.dgsw.hyunjin.shop.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@Data
public class CartItem {

    @Id
    @GeneratedValue
    private Long id;

    private Long userId;
    private Long productId;
}
