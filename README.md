# _Ping Pong_

#### _A simple ping pong game, 10.28.16_

#### By _**Anne Belka**_

## Description

_This is a webpage that plays ping-ping with the user based on a number provided by the user. It will count up to the given number replacing numbers divisible by three with "ping," numbers divisible by 5 with "pong," and numbers divisible by 15 with "ping-pong." The user is able to enter a new number over and over again. If the user guesses a number over 15 they "win" a ping pong ball._

## BDD Specifications

* _It can count up to the provided number._
    * _Example Input: 2_
    * _Example Output: [1,2]_
* _It can detect numbers divisible by 3._
    * _Example Input: 6_
    * _Example Output: [true]_
* _iIt can can replace numbers divisible by 3 with the word "ping"._
    * _Example Input: 6_
    * _Example Output: ["ping"]_
* _It can detect numbers divisible by 5._
    _Example Input: 10_
    _Example Output: [true]_
* _It can replace numbers divisible by 5 with the word "pong"._
    * _Example Input: 10_
    * _Example Output: ["pong"]_
* _It can detect numbers divisible by 15._
    * _Example Input: 30_
    * _Example Output: [true]_
* _It can replace numbers divisible by 15 with the word "ping-pong"._
    * _Example Input: 30_
    * _Example Output: ["ping-pong"]_
* _The user should be able to enter a new number and see the results    over and over again_
    * _Example Input: click refresh button_
    * _Example Output: "Let's play:"_
* _If the user enters a number over 15 the user should "win" a ball._
    * _Example Input: 15_
    * _Example Output: "You won a ping-pong ball"_
## Setup/Installation Requirements

* _Try this game at albelka.github.io/pingpong_
* _Enter a number_
* _Play!_

## Known Bugs

_If the list of numbers pings and pongs is too long the background image becomes distorted._

## Support and contact details

_Please contact me at antastic461@gmail.com with questions or comments. Contributions are always welcome._

## Technologies Used

_Created with JavaScript using jQuery_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2016 **_Anne Belka_**
