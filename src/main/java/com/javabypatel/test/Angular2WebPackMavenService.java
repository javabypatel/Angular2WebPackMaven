package com.javabypatel.test;
 
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
 
@Path("/test")
public class Angular2WebPackMavenService {
 
	@GET
	@Path("/init")
	public Response getLoggedInUser() {
		return Response.status(200).entity("JavaByPatel").build(); 
	}
 
}