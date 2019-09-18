// http://localhost:8080/h2-console

package com.chinesecheckers.chesstime.controllers;

import com.chinesecheckers.chesstime.entities.Player;
import com.chinesecheckers.chesstime.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.List;
import java.util.Optional;

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
    public Player getPlayerById(@PathVariable("id") long playerId) {
        return playerRepository.findById(playerId).orElseThrow();
    }

    @GetMapping(value = "/playernumber/{playernumber}")
    public List<Player> getPlayersByPlayernumber(@PathVariable("playernumber") String playernumber) {
        return playerRepository.findByPlayernumber(playernumber);
    }

    // Post request
    @PostMapping
    public void createPlayer(@RequestBody Player player){
        Player newPlayer = new Player(player.getPlayernumber());
        playerRepository.save(newPlayer);
        System.out.println("player added");
    }

    // Delete request
    @DeleteMapping(value = "playernumber/{id}")
    public ResponseEntity deletePost(
            @PathVariable("id") long id) {
        Optional<Player> optPlayer = playerRepository.findById(id);

        if (optPlayer.isEmpty())
            return new ResponseEntity(HttpStatus.NOT_FOUND);

        playerRepository.delete(optPlayer.get());
        System.out.println("THE TRUTH HAS BEEN DESTROYED!!!");
        return new ResponseEntity(HttpStatus.OK);
    }

}