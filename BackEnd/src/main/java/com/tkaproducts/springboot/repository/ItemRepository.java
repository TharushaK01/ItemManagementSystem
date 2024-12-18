package com.tkaproducts.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tkaproducts.springboot.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{

}
