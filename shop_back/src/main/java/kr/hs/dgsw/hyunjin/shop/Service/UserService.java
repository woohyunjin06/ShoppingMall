package kr.hs.dgsw.hyunjin.shop.Service;

import kr.hs.dgsw.hyunjin.shop.Domain.User;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;

public interface UserService {
    ResponseType register(User u);
    User login(User u);
}
