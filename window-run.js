(function(w) {
  'use strict';
  if (!w.run) {
    w.run = function(fn) {
      
      var handler = {
        handle : function(fn) {
          if (this.errCode) {
            fn(this.errCode);
          }
        }
      };
      
      try {
        fn();
      } catch (e) {
        handler.error = e;
      } finally {
        return handler;
      }
    };
  }
}(window));
