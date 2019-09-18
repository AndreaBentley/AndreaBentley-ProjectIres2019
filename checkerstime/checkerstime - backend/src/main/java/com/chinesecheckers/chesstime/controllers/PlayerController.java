// http://localhost:8080/h2-console

package com.chinesecheckers.chesstime.controllers;

import com.chinesecheckers.chesstime.entities.Player;
import com.chinesecheckers.chesstime.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/players")
public class PlayerController {
    @Autowired
    private PlayerRepository playerRepository;

    // Get requests
    @GetMapping(value = "/all")
    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    @GetMapping(value = "/id/{id}")
    public Player getPlayerById(
            @PathVariable("id") long playerId) {
        return playerRepository.findById(playerId).orElseThrow();
    }

    @GetMapping(value = "/playernumber/{playernumber}")
    public List<Player> getPlayersByPlayernumber(
            @PathVariable("playernumber") String playernumber) {
        return playerRepository.findByPlayernumber(playernumber);
    }

    // Post request
    @PostMapping
    public void createPlayer(@RequestBody Player player){
        Player newPlayer = new Player(player.getPlayernumber());
        playerRepository.save(newPlayer);
        System.out.println("player added");
    }
}