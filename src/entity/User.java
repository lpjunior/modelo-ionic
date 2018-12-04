package entity;

import com.google.gson.Gson;

public class User {

	private long id;
	private String nome;
	private String email;
	private String telefone;

	public User() {
	}

	public User(String nome, String email, String telefone) {
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
	}

	public User(long id, String nome, String email, String telefone) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelfone(String telefone) {
		this.telefone = telefone;
	}
	
	@Override
	public String toString() {
		return "ID: " + id + ", Nome: " + nome + ", Email: " + email + ", Telefone: " + telefone;
	}

	public String toJSON() {
		return new Gson().toJson(this);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id != other.id)
			return false;
		return true;
	}
}
