package org.team283.frcscoutingwebapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.team283.frcscoutingwebapp.services.StorageService;

import java.io.File;

@RestController
@RequestMapping("/api/v1/files")
public class FileUploaderController
{
    private final StorageService storageService;

    @Autowired
    public FileUploaderController(StorageService storageService)
    {
        this.storageService = storageService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String handleFileUpload(@RequestParam("file") MultipartFile file, RedirectAttributes attributes)
    {

        storageService.store(file);
        attributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        return "redirect:/";
    }
}
