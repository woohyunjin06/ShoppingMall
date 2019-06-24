package kr.hs.dgsw.hyunjin.shop.Protocol;

import lombok.Data;

@Data
public class ResponseFormat {
    private int status;
    private String message;
    private Object data;

    public ResponseFormat(ResponseType rt) {
        this(rt, null);
    }

    public ResponseFormat(ResponseType rt, Object data) {
        this.status = rt.status();
        this.message = rt.message();
        this.data = data;
    }
}
