package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.User;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;
import kr.hs.dgsw.hyunjin.shop.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

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
