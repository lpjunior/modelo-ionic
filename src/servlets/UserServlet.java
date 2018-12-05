package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import entity.User;
import service.UserDAOService;

@WebServlet({"/users/", "/users/add"})
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UserServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(request.getServletPath().equals("/users/")) {
			mostraInfo(request, response);
		}
	}

	private void mostraInfo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id = new Integer(request.getParameter("id"));

		User u = new UserDAOService().buscaUser(id);
		response.getWriter().append(u.toJSON());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(request.getServletPath().equals("/users/add")) {
			registraUser(request, response);
		}
	}

	private void registraUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		User u = new Gson().fromJson(request.getReader(), User.class);
		
		if(new UserDAOService().gravarUser(u)) {
			response.getWriter().append("200");	
		} else {
			response.getWriter().append("500");
		}
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Requisição via PUT");
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Requisição via DELETE");
	}
}
