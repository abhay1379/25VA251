package com.example.crud.controller;

import com.example.crud.entity.Employee;
import com.example.crud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable int id) {
        return repository.findById(id);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable int id,
                                   @RequestBody Employee employee) {

        Employee emp = repository.findById(id).orElse(null);

        if (emp != null) {
            emp.setName(employee.getName());
            emp.setDepartment(employee.getDepartment());
            return repository.save(emp);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {
        repository.deleteById(id);
        return "Employee Deleted Successfully";
    }
}