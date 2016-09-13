// using factory method

// Factory method uses the returned value of the function, it returns the values
//of the function returned after the execution
// 

myApp.factory('Blog1',function($http){

	// this method first 
	var blogAPIS  =  {};
	var baseUrl = 'https://blog.theguywithideas.com/api/blogs';


	blogAPIS.getAllBlogs = function(){

		return $http.get(baseUrl+'/all');


	}// end get All Blogs

	blogAPIS.createABlog = function(blogData){

		return $http.post(baseUrl+'/create',blogData)

	}// end create blog 
	
	blogAPIS.singleBlog = function(blogId){

		return $http.get(baseUrl+'/'+blogId,blogId)

	}// end create blog 

	blogAPIS.editABlog = function(blogId,blogData){

		return $http.put(baseUrl+'/'+blogId+'/edit',blogData)

	}// end edit blog 

	blogAPIS.deleteBlog = function(blogId){

		return $http.post(baseUrl+'/'+blogId+'/remove',null);

	}// end delete blog

	return blogAPIS;



});//end blog service 
