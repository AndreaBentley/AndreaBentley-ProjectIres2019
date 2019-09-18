package com.chinesecheckers.chesstime.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "game")
@AllArgsConstructor
@NoArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    public void setId(long id){ this.id = id; }
    public long getId(){
        return this.id;
    }

    @Column(name = "colour", nullable = false)
    private String colour;

    public Game(String colour) {
        this.colour = colour;
    }
}