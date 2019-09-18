package com.chinesecheckers.chesstime.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@Entity
@Table(name = "winners")
@AllArgsConstructor
@NoArgsConstructor
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    public void setId(long id){ this.id = id; }
    public long getId(){
        return this.id;
    }

    @Column(name = "playernumber", nullable = false)
    private String playernumber;

    public Player(String playernumber) {
        this.playernumber = playernumber;
    }
}