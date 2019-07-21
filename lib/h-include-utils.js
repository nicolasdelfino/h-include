(function(){
  this.HInclude = this.HInclude  || { utils: {}};
  this.HInclude.utils = {
    test: function() {
      return 'test function';
    },
    getConditionalUrl: function(element, whenCondition, mediaCondition, altSrcInclude) {
      var url = element.getAttribute('src');
      var whenFalseUrl = element.getAttribute('when-false-src');
      var altUrl = element.getAttribute('alt');
    
      if(altSrcInclude) {
        url = altUrl;
      }
      else {
        if(whenCondition) {
          url = whenFalseUrl;
        }
        if(mediaCondition) {
          url = null;
        }
      }
      return url;
    }
  }
}).call(this);