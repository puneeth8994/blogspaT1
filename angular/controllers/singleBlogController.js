myApp.controller('singleBlogController',['$http','$routeParams',Blog1,function($http,$routeParams,Blog1) {

  //create a context
  var main = this;


  this.pageHeading = '';
  this.pageSubHeading = ''
 

  /*this.getParameterByName = function(name){

      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


  }// end get parameter by name*/

  this.blogId = $routeParams.blogId;

  console.log(this.blogId);


  

  this.loadSingeBlog = function(){
   
    Blog1.singleBlog(blogId)
    
    .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
          main.blog = response.data.data;
          console.log(main.blog);

          main.pageHeading = main.blog.heading;
          main.pageSubHeading = main.blog.subHeading;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs

  
   


}]); // end controller
