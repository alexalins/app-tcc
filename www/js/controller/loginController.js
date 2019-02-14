app.controller('loginCtrl', function($scope, $rootScope, $state, $http, $ionicPopup, $ionicLoading, loginService){
    localStorage.clear();
    $scope.login = {};
    $scope.loginFono = function(login){
        login.usuario = "fono";
        loginService.loginFono(login)
        .then(function(success) {
            var dados = angular.toJson(success.data);
            localStorage.setItem("dados", dados);
            $state.go('menu.inicio');
        })
        .catch(function(error) {
            alert("Não foi possível realizar o login.");
        })
    }
})