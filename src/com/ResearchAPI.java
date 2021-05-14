package com;

import java.io.IOException;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Research;

/**
 * Servlet implementation class PaymentAPI
 */
@WebServlet("/ResearchAPI")
public class ResearchAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	Research ResearchObj = new Research();
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ResearchAPI() {
        //super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		System.out.println("suc insert");
		String output = ResearchObj.insertResearch(
				request.getParameter("Res_ID"), 
				request.getParameter("Res_type"),
				request.getParameter("Res_note"), 
				request.getParameter("Res_price"), 
				request.getParameter("Ruser_ID"));
	
				
		response.getWriter().write(output);
		
		
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		System.out.println("ok");
		Map paras = getParasMap(request); 
		 String output = ResearchObj.updateResearch(
		paras.get("ResID").toString(), 
	
		paras.get("Res_type").toString(), 
		paras.get("Res_note").toString(), 
		paras.get("Res_price").toString(),
		paras.get("Ruser_ID").toString()); 
		response.getWriter().write(output); 
	}

	private Map getParasMap(HttpServletRequest request) {
		// TODO Auto-generated method stub
		 Map<String, String> map = new HashMap<String, String>(); 
			try
			 { 
			 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
			 String queryString = scanner.hasNext() ? 
			 scanner.useDelimiter("\\A").next() : ""; 
			 scanner.close(); 
			 String[] params = queryString.split("&"); 
			 for (String param : params) 
			 { 
			String[] p = param.split("=");
			 map.put(p[0], p[1]); 
			 } 
			 } 
			catch (Exception e) 
			 { 
			 } 
			return map; 
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		String output = ResearchObj.deleteResearch(paras.get("Res_ID").toString());
		response.getWriter().write(output);
	}

}
