'use strict';

/**
 * @ngdoc directive
 * @name meroarbolwebApp.directive:modeloDirective
 * @description
 * # modeloDirective
 */
angular.module('meroarbolwebApp')
  .directive('csSelect', function () {
      return {
          require: '^stTable',
          template: '<input type="checkbox" checklist-model="{{row.estado}}"/>',
          scope: {
              row: '=csSelect'
          },
          link: function (scope, element, attr, ctrl) {

              element.bind('change', function (evt) {
                  scope.$apply(function () {
                      ctrl.select(scope.row, 'multiple');
                  });
              });

              scope.$watch('row.isSelected', function (newValue, oldValue) {
                  if (newValue === true) {
                      element.parent().addClass('st-selected');
                  } else {
                      element.parent().removeClass('st-selected');
                  }
              });
          }
      };
  });

