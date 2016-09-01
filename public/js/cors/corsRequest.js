//lifted entirely from http://www.html5rocks.com/en/tutorials/cors/


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  if (!xhr) {
    throw new Error('CORS not supported');
  }

  xhr.onload = function() {
   var responseText = xhr.responseText;
   console.log(responseText);
   // process the response.
  };

  xhr.onerror = function() {
    console.log('There was an error!');
  };
  console.log(xhr, 'was xhr');
  return xhr;
}

// var xhr = createCORSRequest('GET', url);
// if (!xhr) {
//   throw new Error('CORS not supported');
// }
//
// xhr.onload = function() {
//  var responseText = xhr.responseText;
//  console.log(responseText);
//  // process the response.
// };
//
// xhr.onerror = function() {
//   console.log('There was an error!');
// };

//below is optional things i may need, also lifted from http://www.html5rocks.com/en/tutorials/cors/

// withCredentials
//
// Standard CORS requests do not send or set any cookies by default. In order to include cookies as part of the request, you need to set the XMLHttpRequest’s .withCredentials property to true:
//
// xhr.withCredentials = true;
// In order for this to work, the server must also enable credentials by setting the Access-Control-Allow-Credentials response header to “true”. See the server section for details.
//
// Access-Control-Allow-Credentials: true
// The .withCredentials property will include any cookies from the remote domain in the request, and it will also set any cookies from the remote domain. Note that these cookies still honor same-origin policies, so your JavaScript code can’t access the cookies from document.cookie or the response headers. They can only be controlled by the remote domain.
//
// Making the request
//
// Now that your CORS request is configured, you are ready to make the request. This is done by calling the send() method:
//
// xhr.send();
// If the request has a body, it can be specified as an argument to send().
//
// And thats it! Assuming the server is properly configured to respond to CORS requests, your onload handler will fire with the response, just like the standard same-domain XHR you are so familiar with.

export default createCORSRequest;
