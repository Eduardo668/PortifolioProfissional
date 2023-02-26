package br.com.eduardoportifolio.util;

import java.util.ArrayList;
import java.util.List;

public final class AuthorizedPathsUtil {
    
    private static List<String> authorizedPaths = new ArrayList<String>();

    private Boolean isAuthorizedPath;

    public void defineAuthorizedPaths(){

        authorizedPaths.add("/login");
        authorizedPaths.add("/api/project/findAllProjects");
        authorizedPaths.add("/api/admin/createAdmin");
        authorizedPaths.add("/api/admin/token/refresh");
        authorizedPaths.add("/api/admin/findCurriculum");
        
    }

    public Boolean verifyPath(String route){
        isAuthorizedPath = false;
        authorizedPaths.forEach(path ->{
            if(path.compareTo(route) == 0){
                isAuthorizedPath = true;
            }
        });

        return isAuthorizedPath;

    }

}
