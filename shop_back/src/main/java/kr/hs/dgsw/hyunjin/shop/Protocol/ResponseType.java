package kr.hs.dgsw.hyunjin.shop.Protocol;

public enum ResponseType {
    OK                                      (200, "성공"),
    FAIL                                    (500, "알수없는 오류가 발생했습니다."),
    EMPTY_DATA                              (500, "비어있는 칸이 있습니다."),
    USER_DUPLICATE_USERNAME                 (500, "중복되는 아이디가 존재합니다."),
    USER_DUPLICATE_EMAIL                    (500, "중복되는 이메일이 존재합니다."),
    USER_DUPLICATE_PHONE                    (500, "중복되는 전화번호가 존재합니다."),



    ;

    final private int status;
    final private String message;

    ResponseType(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public static ResponseType fromBoolean(Boolean data) {
        if(data) {
            return OK;
        } else {
            return FAIL;
        }
    }

    public int status() {
        return status;
    }

    public String message() {
        return message;
    }
}
