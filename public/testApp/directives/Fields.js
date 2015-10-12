// directive name of 'fields' must be lower case!!!
app.directive('ddl', function(){
  

  
  return{
      restrict: 'E',
      scope: {
          items: "="
      },
      templateUrl: 'app/Directives/Fields.html'
    };	
});