package com.chinesecheckers.chesstime.repositories;

import com.chinesecheckers.chesstime.entities.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findByPlayernumber(String playernumber);
}
