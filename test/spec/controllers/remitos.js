'use strict';

describe('Controller: RemitosCtrl', function () {

  // load the controller's module
  beforeEach(module('meroarbolwebApp'));

  var RemitosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RemitosCtrl = $controller('RemitosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RemitosCtrl.awesomeThings.length).toBe(3);
  });
});
