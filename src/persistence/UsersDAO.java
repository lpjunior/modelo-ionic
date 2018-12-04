package persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import entity.User;

public class UsersDAO extends BDConnect {

	private Connection conn;
	
	public UsersDAO() {
		try {
			conn = getConnection();
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("Erro ao abrir a conexao: " + e.getMessage());
		}
	}
	
	public void createUser(User u) throws SQLException {
		PreparedStatement stmt = null;
		
		try {
			stmt = conn.prepareStatement("insert into users values(null, ?, ?, ?)");
			stmt.setString(1, u.getNome());
			stmt.setString(2, u.getEmail());
			stmt.setString(3, u.getTelefone());
			
			int flag = stmt.executeUpdate();
			
			if(flag == 0)
				throw new SQLException("Erro ao gravar no banco");
		} finally {
			if(conn != null)
				conn.close();
			if(stmt != null)
				stmt.close();
		}
	}
	
	public User getUser(int id) throws SQLException {
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try {
			stmt = conn.prepareStatement("select * from users where id = ?");
			stmt.setInt(1, id);
			
			rs = stmt.executeQuery();
			User user = null;
			
			if(rs.next()) {
				user = createOUser(rs);
			}
			
			return user;
		} finally {
			if(conn != null)
				conn.close();
			if(stmt != null)
				stmt.close();
			if(rs != null)
				rs.close();
		}
	}
	
	public List<User> getUser() throws SQLException {
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try {
			stmt = conn.prepareStatement("select * from users");
			
			rs = stmt.executeQuery();
			List<User> users = new ArrayList<User>();
			
			while(rs.next()) {
				users.add(createOUser(rs));
			}
			
			return users;
		} finally {
			if(conn != null)
				conn.close();
			if(stmt != null)
				stmt.close();
			if(rs != null)
				rs.close();
		}
	}
	
	public List<User> getUser(String nome) throws SQLException {
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try {
			stmt = conn.prepareStatement("select * from users where nome like ?");
			stmt.setString(1, '%' + nome + '%');
			
			rs = stmt.executeQuery();
			List<User> users = new ArrayList<User>();
			
			while(rs.next()) {
				users.add(createOUser(rs));
			}
			
			return users;
		} finally {
			if(conn != null)
				conn.close();
			if(stmt != null)
				stmt.close();
			if(rs != null)
				rs.close();
		}
	}
	
	private User createOUser(ResultSet rs) throws SQLException {
		User u = new User();
		u.setId(rs.getInt("id"));
		u.setNome(rs.getString("nome"));
		u.setEmail(rs.getString("email"));
		u.setTelfone(rs.getString("telefone"));
		
		return u;
	}
}
