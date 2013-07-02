/**
 * Expose 'Lazy'
 */

module.exports = Lazy;


/**
 * Initialize Lazy
 *
 */

function Lazy() {
  //cache
  this.head = document.getElementsByTagName("head")[0];
}


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
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */


function resolve(path) {
  //do something
  //if(!require.resolve(path)){
  //}
}


/**
 * Normalize `path` relative to the host name.
 *
 * @param {String} path
 * @param {String} host optional
 * @return {String}
 * @api private
 */

function normalize(path, host) {
  //do something
}


/**
 * Load a script without its dependencies
 * 
 * @param  {String} url 
 * @param {Function} callback function
 */

Lazy.prototype.load = function(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  ready(script, callback);
  script.src = url;
  this.head.appendChild(script);
};



