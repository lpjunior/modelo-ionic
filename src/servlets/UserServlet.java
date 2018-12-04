package servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entity.User;

@WebServlet({"/users", "/users/id", "/users/add"})
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UserServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(request.getServletPath().equals("/users/id")) {
			mostraInfo(request, response);
		}
	}

	private void mostraInfo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		User u = new User();
		
		u.setId(1);
		u.setNome("Luis");
		u.setEmail("prof.lpjunior@gmail.com");
		u.setTelfone("(21) 96487-5646");
		
		response.getWriter().append(u.toJSON());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(request.getServletPath().equals("/users/add")) {
			registraUser(request, response);
		}
	}

	private void registraUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		User u = new User();
		
		u.setId(1);
		u.setNome(request.getParameter("nome"));
		u.setEmail(request.getParameter("email"));
		u.setTelfone(request.getParameter("telefone"));
		
		response.getWriter().append(u.toJSON());
		System.out.println(u.toJSON());
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Requisição via PUT");
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Requisição via DELETE");
	}
}
