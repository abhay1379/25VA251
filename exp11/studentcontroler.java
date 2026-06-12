package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/")
    public String home() {
        return "Welcome to Spring Boot REST API";
    }

    @GetMapping("/student")
    public Student getStudent() {
        return new Student(1, "Rahul", "BCA");
    }

    @PostMapping("/student")
    public String addStudent(@RequestBody Student student) {
        return "Student Added: " + student.getName();
    }
}