package kr.hs.dgsw.hyunjin.shop.Controller;

import kr.hs.dgsw.hyunjin.shop.Domain.Image;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseFormat;
import kr.hs.dgsw.hyunjin.shop.Protocol.ResponseType;
import kr.hs.dgsw.hyunjin.shop.Repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLConnection;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;
import java.util.UUID;

@RestController
public class AttachmentController {


    @Autowired
    private ImageRepository imageRepository;

    @PostMapping("/api/attachment")
    public ResponseFormat upload(@RequestPart MultipartFile srcFile) {
        String destFilename = "/Users/hyunjin/Project/WebProgramming/Shopping/shop_back/src/upload/"
                            + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd/"))
                            + UUID.randomUUID().toString() + "_"
                            + srcFile.getOriginalFilename();

        try {
            File destFile = new File(destFilename);
            destFile.getParentFile().mkdirs();
            srcFile.transferTo(destFile);

            Image image = new Image();
            image.setOriginalName(srcFile.getOriginalFilename());
            image.setStoredPath(destFilename);

            Image saved = imageRepository.save(image);

            return new ResponseFormat(ResponseType.OK, saved.getId());
        } catch (IOException e) {
            return new ResponseFormat(ResponseType.FAIL);
        }
    }

    @GetMapping("/api/attachment/{id}")
    public void download(@PathVariable Long id,
            HttpServletRequest req, HttpServletResponse resp){

        try {
            String filePath;
            String fileName;

            Optional<Image> found = imageRepository.findById(id);

            filePath = found.map(Image::getStoredPath).orElse("");
            fileName = found.map(Image::getOriginalName).orElse("");

            File file = new File(filePath);
            if (!file.exists()) return;

            String mimeType = URLConnection.guessContentTypeFromName(file.getName());
            if (mimeType == null) mimeType = "application/octet-stream";

            resp.setContentType(mimeType);
            resp.setHeader("Content-Disposition", "inline; filename=\"" + fileName + "\"");
            resp.setContentLength((int) file.length());

            InputStream is = new BufferedInputStream(new FileInputStream(file));
            FileCopyUtils.copy(is, resp.getOutputStream());
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}
