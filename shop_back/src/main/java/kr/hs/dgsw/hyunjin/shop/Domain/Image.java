package kr.hs.dgsw.hyunjin.shop.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@Data
public class Image {

    @Id
    @GeneratedValue
    private Long id;

    private String storedPath;
    private String originalName;

}
