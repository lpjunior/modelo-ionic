package service;

import java.sql.SQLException;

import entity.User;
import persistence.UsersDAO;

public class UserDAOService {

	private UsersDAO usersDAO;
	
	public UserDAOService() {
		usersDAO = new UsersDAO();
	}
	
	public boolean gravarUser(User u) {
		try {
			usersDAO.createUser(u);
			return Boolean.TRUE;
		} catch (SQLException e) {
			e.printStackTrace();
			return Boolean.FALSE;
		}
	}

	public User buscaUser(int id) {
		try {
			return usersDAO.getUser(id);
		} catch (SQLException e) {
			e.printStackTrace();
			return new User();
		}
	}
}
