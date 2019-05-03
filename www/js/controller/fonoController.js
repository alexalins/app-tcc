app.controller('fonoCtrl', function($scope, $state, $stateParams, $http, $ionicPopup, $ionicLoading, fonoService, pacienteService){
    dados = localStorage.getItem("dados");
    $scope.fono = angular.fromJson(dados);
    //
    fonoService.getFono($scope.fono.id)
        .then(function (success) {
            $scope.fono = success.data;
            var dados = angular.toJson(success.data);
            localStorage.setItem("dados", dados);
        })
        .catch(function (error) {
            alert("Não foi possível listar os dados");
        })
    //
    $scope.atualizarFono = function (fono) {
        fonoService.atualizarFono(fono, $scope.fono.id)
            .then(function (success) {
                localStorage.clear();
                $scope.fono = success.data;
                var dados = angular.toJson(success.data);
                localStorage.setItem("dados", dados);
                //$state.go("menu.meusDados");
                location.reload();
                alert("Atualizado com sucesso!");
            })
            .catch(function (error) {
                alert("Não foi possível atualizar os dados");
            })
    }
    //
    $scope.removerFono = function () {
        var resposta = confirm("Deseja remover sua conta?");
        if (resposta == true) {
            fonoService.removerFono($scope.fono.id)
                .then(function (success) {
                    $state.go('login');
                    localStorage.clear();
                })
                .catch(function (error) {
                    alert("Não foi possível remover os dados");
                })
        }
    }
    //
    $scope.removerPaciente = function (id) {
        var resposta = confirm("Deseja remover está conta?");
        if (resposta == true) {
            pacienteService.removerPaciente(id)
                .then(function (success) {
                    location.reload();
                    //$location.path('/login');
                })
                .catch(function (error) {
                    alert("Não foi possível atualizar os dados");
                })
        }
    }
})