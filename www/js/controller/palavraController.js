app.controller('palavraCtrl', function($scope, $rootScope, $state, $stateParams, $http, $ionicPopup, $ionicLoading, palavraService){

    palavraService.getPartidaPaciente($stateParams.id)
        .then(function (success) {
            $scope.palavras = success.data;
        })
        .catch(function (error) {
        })
    //
    $scope.palavra = {}
    $scope.adicionarPalavras = function () {

        for (item in $scope.palavra.palavra) {
            var palavra = {
                "nivel": $scope.palavra.nivel,
                "palavra": $scope.palavra.palavra[item],
                "paciente": {
                    "id": $scope.idPaciente
                },
                "fono": {
                    "id": $scope.fono.id
                }
            }

            console.log(palavra);
            palavraService.adicionarPalavra(palavra)
                .then(function (success) {
                    $state.go('/palavra/' + $scope.idPaciente);
                })
                .catch(function (error) {
                })
        }
    }
    //
    $scope.removerPalavra = function (id) {
        palavraService.removerPalavra(id)
        .then(function (success) {
            location.reload();
        })
        .catch(function (error) {
        })
    }
    //
    var i = 1;
    $scope.exibirOpcao = function () {
        $("#opcao" + i).css("display", "block");
        i++;
    }
    //
})