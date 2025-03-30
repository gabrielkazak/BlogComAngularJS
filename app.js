angular.module('blog', []);

angular.module('blog').controller('Rest', function ($scope, $http) {
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) { 
      $scope.publicacoes = response.data;
      $scope.index = function (index) {
        window["num"] = index;
        localStorage.setItem("index", num);
    }
    })
    .catch(function(error) { 
      console.error("Erro ao buscar as postagens:", error);
    });
});




angular.module('blogPost', []);

angular.module('blogPost').controller('RestPost', function ($scope, $http) {
    var index = localStorage.getItem("index"); // Recupera o índice salvo
    if (index !== null) {
      $http.get(`https://api-fake-blog.onrender.com/postagem/${index}`)
        .then(function(response) {
          console.log(response.data); // Agora, o console.log está dentro do .then
          $scope.publicacao = response.data; // Define a publicação corretamente
        })
        .catch(function(error) {
          console.error("Erro ao buscar a postagem:", error);
        });
    }
});
