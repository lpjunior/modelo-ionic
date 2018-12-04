package test.json;

import entity.User;

public class TestJson {

	public static void main(String[] args) {
		User u = new User();
		
		u.setId(1);
		u.setNome("Luis");
		u.setEmail("prof.lpjunior@gmail.com");
		u.setTelfone("(21) 96487-5646");
		
		System.out.println(u);
		
		System.out.println(u.toJSON());
	}
}
