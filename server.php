<?php

$data = array(
    array(
        "question"  =>  "What is the capital of Iran?",
        "answers"   =>  array("Tehran", "Paris"),
        "correct"   =>  0,
        "selected"  => -1
    ), array(
        "question"  =>  "What is the capital of England?",
        "answers"   =>  array("Manhatan", "Tokyo", "London"),
        "correct"   =>  2,
        "selected"  => -1
    ), array(
        "question"  =>  "What is the capital of Japan?",
        "answers"   =>  array("Manhatan", "London", "Tokyo", "Tehran"),
        "correct"   =>  2,
        "selected"  => -1
    ), array(
        "question"  =>  "What is the capital of France?",
        "answers"   =>  array("Seoul", "London", "Tokyo", "Paris"),
        "correct"   =>  3,
        "selected"  => -1
    ), array(
        "question"  =>  "What is the capital of Turkey?",
        "answers"   =>  array("Seoul", "Ankara", "Tokyo", "Paris"),
        "correct"   =>  1,
        "selected"  => -1
    )
);

if(stripos($_SERVER['REQUEST_URI'], '/data' )!==false){
    echo json_encode($data);
}else{
    echo "<h1>Hello from PHP server </h1>";
}