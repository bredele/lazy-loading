

/**
 * Execute callback when script loaded.
 * 
 * @param  {Element}   script  
 * @param  {Function} callback
 * @api private
 */

function ready(script, callback){
  //IE
  if(script.readyState) {
    script.onreadystatechange = function(){
      if(script.readyState == "loaded" || script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.async = false;
    script.onload = function(){
      callback();
    };
  }
}


/**
 * Load a script without its dependencies
 * 
 * @param  {String} url 
 * @param {Function} callback function
 */

module.exports.load = function(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  ready(script, callback);
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};



