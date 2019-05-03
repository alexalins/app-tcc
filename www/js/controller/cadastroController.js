app.controller('cadastroCtrl', function($scope, $rootScope, $state, $http, $ionicPopup, $ionicLoading, cadastroService){
    //
    dados = localStorage.getItem("dados");
    $scope.fono = angular.fromJson(dados);
    //
    $scope.cadastroFono = function (fono) {
        cadastroService.cadastroFono(fono)
            .then(function (success) {
                alert("Cadatro realizado com sucesso!");
                $state.go('login');
            })
            .catch(function (error) {
                alert("Não foi possível realizar o cadastro");
            })
    }
    //
    $scope.cadastroPaciente = function(paciente, id){
        cadastroService .cadastroPaciente(paciente, $scope.fono.id)
        .then(function (success){
            alert("Cadatro realizado com sucesso!");
            $state.go('menu.meusPacientes');
        })
        .catch(function(error){
            alert("Não foi possível realizar o cadastro");
        })
    }
})