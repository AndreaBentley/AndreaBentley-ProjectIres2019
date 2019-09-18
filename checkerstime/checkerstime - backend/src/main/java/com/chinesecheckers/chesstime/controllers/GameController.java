// http://localhost:8080/h2-console

package com.chinesecheckers.chesstime.controllers;

import com.chinesecheckers.chesstime.entities.Game;
import com.chinesecheckers.chesstime.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired
    private GameRepository gameRepository;

    // Get requests
    @GetMapping(value = "/all")
    public List<Game> getGame() {
        return gameRepository.findAll();
    }

    // put request
    @PutMapping
    public void updateGame(@RequestBody Game game){
        Game newCellValue = gameRepository.findById(game.getId()).orElseThrow();
        System.out.println( "cell number " + newCellValue.getId() + " had colour: " + newCellValue.getColour() );
        newCellValue.setColour(game.getColour());
        gameRepository.save(newCellValue);
        System.out.println( "The new colour of cell number " + newCellValue.getId() + " is: " + newCellValue.getColour() );
    }
}