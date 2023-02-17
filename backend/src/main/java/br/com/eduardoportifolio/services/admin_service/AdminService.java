package br.com.eduardoportifolio.services.admin_service;

import br.com.eduardoportifolio.models.AdminModel;
import br.com.eduardoportifolio.models.ProjectModel;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.Map;

public interface AdminService  {

    AdminModel createAdmin(AdminModel admin);

    void refreshToken(HttpServletRequest request, HttpServletResponse response);

}
