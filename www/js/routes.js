angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    

    .state('menu.inicio', {
    url: '/inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'fonoCtrl'
      }
    }
  })

  .state('menu.meusPacientes', {
    url: '/pacientes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusPacientes.html',
        controller: 'fonoCtrl'
      }
    }
  })

  .state('menu.sobre', {
    url: '/sobre',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobre.html'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastro', {
    url: '/cadastroFono',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('menu.atualizar', {
    url: '/atualizar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/atualizar.html',
      }
    }
  })

  .state('menu.cadastroPaciente', {
    url: '/cadastroPaciente',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastroPaciente.html',
        controller: 'cadastroCtrl'
      }
    }
  })

  .state('menu.paciente', {
    url: '/paciente',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paciente.html',
        controller: 'fonoCtrl'
      }
    }
  })

  .state('menu.partidas', {
    url: '/partidas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/partidas.html',
        controller: 'partidasCtrl'
      }
    }
  })

  .state('menu.partida', {
    url: '/partida',
    views: {
      'side-menu21': {
        templateUrl: 'templates/partida.html',
        controller: 'partidaCtrl'
      }
    }
  })

  .state('menu.cadastroPalavras', {
    url: '/cadastroPalavras',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastroPalavras.html',
        controller: 'cadastroPalavrasCtrl'
      }
    }
  })

  .state('menu.palavras', {
    url: '/palavras',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palavras.html',
        controller: 'palavrasCtrl'
      }
    }
  })

  .state('menu.meusDados', {
    url: '/meusDados',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusDados.html',
        controller: 'fonoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')


});