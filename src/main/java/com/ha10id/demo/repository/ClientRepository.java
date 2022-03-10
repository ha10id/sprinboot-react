/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ha10id.demo.repository;

import com.ha10id.demo.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 *
 * @author ha10id
 */
public interface ClientRepository extends JpaRepository<Client, Integer> {
    
}
