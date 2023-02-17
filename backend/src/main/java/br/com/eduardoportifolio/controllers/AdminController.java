package br.com.eduardoportifolio.controllers;

import br.com.eduardoportifolio.models.AdminModel;
import br.com.eduardoportifolio.services.admin_service.AdminServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminServiceImpl adminService;

    @PostMapping("/createAdmin")
    public void createAdmin(@RequestBody AdminModel newAdmin){
        adminService.createAdmin(newAdmin);
    }

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws Exception{
        adminService.refreshToken(request, response);
    }


}
