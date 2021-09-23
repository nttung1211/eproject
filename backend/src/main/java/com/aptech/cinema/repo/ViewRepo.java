package com.aptech.cinema.repo;

import com.aptech.cinema.model.View;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ViewRepo extends JpaRepository<View, Long> {
}
