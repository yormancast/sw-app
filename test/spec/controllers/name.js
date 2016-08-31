'use strict';

describe('Controller: NameCtrl', function() {

  // load the controller's module
  beforeEach(module('swApp'));

  var NameCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    NameCtrl = $controller('NameCtrl', {
      $scope: scope
    });
  }));

  it('should set name to NameCtrl', function() {
    expect(scope.name).toBe('NameCtrl');
  });
});
