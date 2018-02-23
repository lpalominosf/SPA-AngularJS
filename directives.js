angular.module("CustomDirective")
.directive("MyAutocomplete", function() {
  function link(scope, element, attrs) {
    $(element).autocomplete({
      source: scope.$eval(attrs.MyAutocomplete),
      select: function(ev,ui) {
        if(ui.item) {
          scope.optionSelected(ui.item.value);
        }
      },
      focus: function(ev,ui) {
        ev.preventDefault();
        $(this).val(ui.item.label);
      }
    });
  };
  return {
    link: link
  };
})
.directive('backImg', function() {
  return function(scope, element, attrs) {
    attrs.$observe('backImg', function(value) {
      element.css({
        'background-image': "url('"+value+"')",
        'background-size': 'cover',
        'background-position': 'center'
      });
    });
  };
})