package com.aptech.cinema.util;

import com.aptech.cinema.enums.Role;
import com.aptech.cinema.exception.UnauthorizedException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthUtils {

    public boolean isAdmin() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(Role.ADMIN.getValue()));
    }

    public void checkIsAdmin() {
        if (!isAdmin()) {
            throw new UnauthorizedException("You don't have enough permisson");
        }
    }
}
