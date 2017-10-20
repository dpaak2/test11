package com.airbnb.web.mapper;

import org.springframework.stereotype.Repository;

import com.airbnb.web.command.Command;
@Repository
public interface Mapper {
	public int count(Command cmd);
	public void insert(Command cmd);
	public void selectOne (Command cmd);
	public void update (Command cmd);
	public void delete(Command cmd);
}
