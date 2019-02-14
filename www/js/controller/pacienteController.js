app.controller('pacienteCtrl', function($scope, $rootScope, $stateParams, $http, $ionicPopup, $ionicLoading, pacienteService){
    //console.log($stateParams.id);
    pacienteService.getPaciente($stateParams.id)
        .then(function (success) {
            $scope.paciente = success.data;
        })
        .catch(function (error) {
            alert("Não foi possível listar os dados");
        })
    //
    $scope.atualizarPaciente = function (paciente) {
        pacienteService.atualizarPaciente(paciente, $scope.paciente.id, $scope.fono.id)
            .then(function (success) {
                $scope.paciente = success.data;
                var dados = angular.toJson(success.data);
                localStorage.setItem("dados", dados);
                $location.path('/dadosPaciente');
            })
            .catch(function (error) {
                alert("Não foi possível atualizar os dados");
            })
    }
    //
    $scope.removerPaciente = function () {
        var resposta = confirm("Deseja remover sua conta?");
        if (resposta == true) {
            pacienteService.removerPaciente($scope.paciente.id)
                .then(function (success) {
                    $scope.paciente = success.data;
                    var dados = angular.toJson(success.data);
                    localStorage.setItem("dados", dados);
                    //
                    $location.path('/login');
                })
                .catch(function (error) {
                    alert("Não foi possível atualizar os dados");
                })
        }
    }
})