package kr.hs.dgsw.hyunjin.shop.Domain;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    private String name;
    private String homeNumber;
    private String phoneNumber;

    private String zipCode;
    private String address;

    private String email;

    @CreationTimestamp
    private LocalDateTime joined;

    @UpdateTimestamp
    private LocalDateTime modified;

    public boolean hasEmpty() {
        return username.isEmpty() || password.isEmpty() || name.isEmpty() || phoneNumber.isEmpty() || zipCode.isEmpty() || address.isEmpty() || email.isEmpty();
    }

    public User(String username, String password, String name, String homeNumber, String phoneNumber, String zipCode, String address, String email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.homeNumber = homeNumber;
        this.phoneNumber = phoneNumber;
        this.zipCode = zipCode;
        this.address = address;
        this.email = email;
    }
}
