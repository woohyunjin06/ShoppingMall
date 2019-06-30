package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.User;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;
import kr.hs.dgsw.hyunjin.shop.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void init() {
        userRepository.save(new User("woohyunjin06", "1234", "우현진" , null, "010-9466-5318", "12345","어디징","woohyunjin06@naver.com"));
    }

    @Override
    public ResponseType register(User u) {
        boolean usernameExist = this.userRepository.findByUsername(u.getUsername()).isPresent();
        boolean emailExist = this.userRepository.findByEmail(u.getEmail()).isPresent();
        boolean phoneNumberExist = this.userRepository.findByPhoneNumber(u.getPhoneNumber()).isPresent();

        if(u.hasEmpty())
            return ResponseType.EMPTY_DATA;
        if(usernameExist)
            return ResponseType.USER_DUPLICATE_USERNAME;
        if(emailExist)
            return ResponseType.USER_DUPLICATE_EMAIL;
        if(phoneNumberExist)
            return ResponseType.USER_DUPLICATE_PHONE;

        userRepository.save(u);
        return ResponseType.OK;
    }

    @Override
    public User login(User u) {
        return this.userRepository.findByUsername(u.getUsername())
                .map(found -> {
                    if (found.getPassword().equals(u.getPassword())) {
                        return found;
                    }
                    return null;
                }).orElse(null);
    }

}
