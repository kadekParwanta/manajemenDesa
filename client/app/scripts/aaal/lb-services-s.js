// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#replaceOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/Users/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsertWithWhere
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/Users/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#replaceById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/Users/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#patchOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#patchOrCreateWithWhere
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#patchAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Desa
 * @header lbServices.Desa
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Desa` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Desa",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Desa/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Desa.OrganisasiDesa.findById() instead.
        "prototype$__findById__OrganisasiDesa": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiDesa/:fk",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.destroyById() instead.
        "prototype$__destroyById__OrganisasiDesa": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiDesa/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.updateById() instead.
        "prototype$__updateById__OrganisasiDesa": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiDesa/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.findById() instead.
        "prototype$__findById__OrganisasiMasyarakat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.destroyById() instead.
        "prototype$__destroyById__OrganisasiMasyarakat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.updateById() instead.
        "prototype$__updateById__OrganisasiMasyarakat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Desa.OrganisasiDesa() instead.
        "prototype$__get__OrganisasiDesa": {
          isArray: true,
          url: urlBase + "/Desa/:id/OrganisasiDesa",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.create() instead.
        "prototype$__create__OrganisasiDesa": {
          url: urlBase + "/Desa/:id/OrganisasiDesa",
          method: "POST"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.destroyAll() instead.
        "prototype$__delete__OrganisasiDesa": {
          url: urlBase + "/Desa/:id/OrganisasiDesa",
          method: "DELETE"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.count() instead.
        "prototype$__count__OrganisasiDesa": {
          url: urlBase + "/Desa/:id/OrganisasiDesa/count",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat() instead.
        "prototype$__get__OrganisasiMasyarakat": {
          isArray: true,
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.create() instead.
        "prototype$__create__OrganisasiMasyarakat": {
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat",
          method: "POST"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.destroyAll() instead.
        "prototype$__delete__OrganisasiMasyarakat": {
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat",
          method: "DELETE"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.count() instead.
        "prototype$__count__OrganisasiMasyarakat": {
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#create
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Desa",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#createMany
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Desa",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#upsert
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Desa",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#replaceOrCreate
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/Desa/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#upsertWithWhere
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/Desa/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#exists
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Desa/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#findById
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Desa/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#replaceById
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/Desa/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#find
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Desa",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#findOne
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Desa/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#updateAll
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/Desa/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#deleteById
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Desa/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#count
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Desa/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#prototype$updateAttributes
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Desa/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Desa#createChangeStream
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Desa/change-stream",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.Desa() instead.
        "::get::RPJMDes::Desa": {
          url: urlBase + "/RPJMDes/:id/Desa",
          method: "GET"
        },

        // INTERNAL. Use APBDes.desa() instead.
        "::get::APBDes::desa": {
          url: urlBase + "/APBDes/:id/desa",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Desa#patchOrCreate
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Desa#updateOrCreate
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Desa#patchOrCreateWithWhere
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.Desa#update
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Desa#destroyById
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Desa#removeById
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Desa#patchAttributes
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.Desa#modelName
    * @propertyOf lbServices.Desa
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Desa`.
    */
    R.modelName = "Desa";

    /**
     * @ngdoc object
     * @name lbServices.Desa.OrganisasiDesa
     * @header lbServices.Desa.OrganisasiDesa
     * @object
     * @description
     *
     * The object `Desa.OrganisasiDesa` groups methods
     * manipulating `Organisasi` instances related to `Desa`.
     *
     * Call {@link lbServices.Desa#OrganisasiDesa Desa.OrganisasiDesa()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Desa#OrganisasiDesa
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Queries OrganisasiDesa of Desa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiDesa = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::get::Desa::OrganisasiDesa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiDesa#count
         * @methodOf lbServices.Desa.OrganisasiDesa
         *
         * @description
         *
         * Counts OrganisasiDesa of Desa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.OrganisasiDesa.count = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::count::Desa::OrganisasiDesa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiDesa#create
         * @methodOf lbServices.Desa.OrganisasiDesa
         *
         * @description
         *
         * Creates a new instance in OrganisasiDesa of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiDesa.create = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::create::Desa::OrganisasiDesa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiDesa#createMany
         * @methodOf lbServices.Desa.OrganisasiDesa
         *
         * @description
         *
         * Creates a new instance in OrganisasiDesa of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiDesa.createMany = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::createMany::Desa::OrganisasiDesa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiDesa#destroyAll
         * @methodOf lbServices.Desa.OrganisasiDesa
         *
         * @description
         *
         * Deletes all OrganisasiDesa of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.OrganisasiDesa.destroyAll = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::delete::Desa::OrganisasiDesa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiDesa#destroyById
         * @methodOf lbServices.Desa.OrganisasiDesa
         *
         * @description
         *
         * Delete a related item by id for OrganisasiDesa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for OrganisasiDesa
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.OrganisasiDesa.destroyById = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::destroyById::Desa::OrganisasiDesa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiDesa#findById
         * @methodOf lbServices.Desa.OrganisasiDesa
         *
         * @description
         *
         * Find a related item by id for OrganisasiDesa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for OrganisasiDesa
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiDesa.findById = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::findById::Desa::OrganisasiDesa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiDesa#updateById
         * @methodOf lbServices.Desa.OrganisasiDesa
         *
         * @description
         *
         * Update a related item by id for OrganisasiDesa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for OrganisasiDesa
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiDesa.updateById = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::updateById::Desa::OrganisasiDesa"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Desa.OrganisasiMasyarakat
     * @header lbServices.Desa.OrganisasiMasyarakat
     * @object
     * @description
     *
     * The object `Desa.OrganisasiMasyarakat` groups methods
     * manipulating `Organisasi` instances related to `Desa`.
     *
     * Call {@link lbServices.Desa#OrganisasiMasyarakat Desa.OrganisasiMasyarakat()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Desa#OrganisasiMasyarakat
         * @methodOf lbServices.Desa
         *
         * @description
         *
         * Queries OrganisasiMasyarakat of Desa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiMasyarakat = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::get::Desa::OrganisasiMasyarakat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiMasyarakat#count
         * @methodOf lbServices.Desa.OrganisasiMasyarakat
         *
         * @description
         *
         * Counts OrganisasiMasyarakat of Desa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.OrganisasiMasyarakat.count = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::count::Desa::OrganisasiMasyarakat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiMasyarakat#create
         * @methodOf lbServices.Desa.OrganisasiMasyarakat
         *
         * @description
         *
         * Creates a new instance in OrganisasiMasyarakat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiMasyarakat.create = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::create::Desa::OrganisasiMasyarakat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiMasyarakat#createMany
         * @methodOf lbServices.Desa.OrganisasiMasyarakat
         *
         * @description
         *
         * Creates a new instance in OrganisasiMasyarakat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiMasyarakat.createMany = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::createMany::Desa::OrganisasiMasyarakat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiMasyarakat#destroyAll
         * @methodOf lbServices.Desa.OrganisasiMasyarakat
         *
         * @description
         *
         * Deletes all OrganisasiMasyarakat of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.OrganisasiMasyarakat.destroyAll = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::delete::Desa::OrganisasiMasyarakat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiMasyarakat#destroyById
         * @methodOf lbServices.Desa.OrganisasiMasyarakat
         *
         * @description
         *
         * Delete a related item by id for OrganisasiMasyarakat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for OrganisasiMasyarakat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.OrganisasiMasyarakat.destroyById = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::destroyById::Desa::OrganisasiMasyarakat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiMasyarakat#findById
         * @methodOf lbServices.Desa.OrganisasiMasyarakat
         *
         * @description
         *
         * Find a related item by id for OrganisasiMasyarakat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for OrganisasiMasyarakat
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiMasyarakat.findById = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::findById::Desa::OrganisasiMasyarakat"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Desa.OrganisasiMasyarakat#updateById
         * @methodOf lbServices.Desa.OrganisasiMasyarakat
         *
         * @description
         *
         * Update a related item by id for OrganisasiMasyarakat.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for OrganisasiMasyarakat
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R.OrganisasiMasyarakat.updateById = function() {
          var TargetResource = $injector.get("Organisasi");
          var action = TargetResource["::updateById::Desa::OrganisasiMasyarakat"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Organisasi
 * @header lbServices.Organisasi
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Organisasi` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Organisasi",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Organisasi/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Organisasi.Jabatan.findById() instead.
        "prototype$__findById__Jabatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Organisasi/:id/Jabatan/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organisasi.Jabatan.destroyById() instead.
        "prototype$__destroyById__Jabatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Organisasi/:id/Jabatan/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organisasi.Jabatan.updateById() instead.
        "prototype$__updateById__Jabatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Organisasi/:id/Jabatan/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organisasi.Jabatan() instead.
        "prototype$__get__Jabatan": {
          isArray: true,
          url: urlBase + "/Organisasi/:id/Jabatan",
          method: "GET"
        },

        // INTERNAL. Use Organisasi.Jabatan.create() instead.
        "prototype$__create__Jabatan": {
          url: urlBase + "/Organisasi/:id/Jabatan",
          method: "POST"
        },

        // INTERNAL. Use Organisasi.Jabatan.destroyAll() instead.
        "prototype$__delete__Jabatan": {
          url: urlBase + "/Organisasi/:id/Jabatan",
          method: "DELETE"
        },

        // INTERNAL. Use Organisasi.Jabatan.count() instead.
        "prototype$__count__Jabatan": {
          url: urlBase + "/Organisasi/:id/Jabatan/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#create
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Organisasi",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#createMany
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Organisasi",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#upsert
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Organisasi",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#replaceOrCreate
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/Organisasi/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#upsertWithWhere
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/Organisasi/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#exists
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Organisasi/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#findById
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Organisasi/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#replaceById
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/Organisasi/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#find
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Organisasi",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#findOne
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Organisasi/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#updateAll
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/Organisasi/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#deleteById
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Organisasi/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#count
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Organisasi/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#prototype$updateAttributes
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Organisasi/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#createChangeStream
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Organisasi/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.findById() instead.
        "::findById::Desa::OrganisasiDesa": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiDesa/:fk",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.destroyById() instead.
        "::destroyById::Desa::OrganisasiDesa": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiDesa/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.updateById() instead.
        "::updateById::Desa::OrganisasiDesa": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiDesa/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.findById() instead.
        "::findById::Desa::OrganisasiMasyarakat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat/:fk",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.destroyById() instead.
        "::destroyById::Desa::OrganisasiMasyarakat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.updateById() instead.
        "::updateById::Desa::OrganisasiMasyarakat": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Desa.OrganisasiDesa() instead.
        "::get::Desa::OrganisasiDesa": {
          isArray: true,
          url: urlBase + "/Desa/:id/OrganisasiDesa",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.create() instead.
        "::create::Desa::OrganisasiDesa": {
          url: urlBase + "/Desa/:id/OrganisasiDesa",
          method: "POST"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.createMany() instead.
        "::createMany::Desa::OrganisasiDesa": {
          isArray: true,
          url: urlBase + "/Desa/:id/OrganisasiDesa",
          method: "POST"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.destroyAll() instead.
        "::delete::Desa::OrganisasiDesa": {
          url: urlBase + "/Desa/:id/OrganisasiDesa",
          method: "DELETE"
        },

        // INTERNAL. Use Desa.OrganisasiDesa.count() instead.
        "::count::Desa::OrganisasiDesa": {
          url: urlBase + "/Desa/:id/OrganisasiDesa/count",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat() instead.
        "::get::Desa::OrganisasiMasyarakat": {
          isArray: true,
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat",
          method: "GET"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.create() instead.
        "::create::Desa::OrganisasiMasyarakat": {
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat",
          method: "POST"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.createMany() instead.
        "::createMany::Desa::OrganisasiMasyarakat": {
          isArray: true,
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat",
          method: "POST"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.destroyAll() instead.
        "::delete::Desa::OrganisasiMasyarakat": {
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat",
          method: "DELETE"
        },

        // INTERNAL. Use Desa.OrganisasiMasyarakat.count() instead.
        "::count::Desa::OrganisasiMasyarakat": {
          url: urlBase + "/Desa/:id/OrganisasiMasyarakat/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Organisasi#patchOrCreate
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#updateOrCreate
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#patchOrCreateWithWhere
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#update
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#destroyById
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#removeById
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Organisasi#patchAttributes
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organisasi` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.Organisasi#modelName
    * @propertyOf lbServices.Organisasi
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Organisasi`.
    */
    R.modelName = "Organisasi";

    /**
     * @ngdoc object
     * @name lbServices.Organisasi.Jabatan
     * @header lbServices.Organisasi.Jabatan
     * @object
     * @description
     *
     * The object `Organisasi.Jabatan` groups methods
     * manipulating `Jabatan` instances related to `Organisasi`.
     *
     * Call {@link lbServices.Organisasi#Jabatan Organisasi.Jabatan()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organisasi#Jabatan
         * @methodOf lbServices.Organisasi
         *
         * @description
         *
         * Queries Jabatan of Organisasi.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R.Jabatan = function() {
          var TargetResource = $injector.get("Jabatan");
          var action = TargetResource["::get::Organisasi::Jabatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organisasi.Jabatan#count
         * @methodOf lbServices.Organisasi.Jabatan
         *
         * @description
         *
         * Counts Jabatan of Organisasi.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.Jabatan.count = function() {
          var TargetResource = $injector.get("Jabatan");
          var action = TargetResource["::count::Organisasi::Jabatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organisasi.Jabatan#create
         * @methodOf lbServices.Organisasi.Jabatan
         *
         * @description
         *
         * Creates a new instance in Jabatan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R.Jabatan.create = function() {
          var TargetResource = $injector.get("Jabatan");
          var action = TargetResource["::create::Organisasi::Jabatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organisasi.Jabatan#createMany
         * @methodOf lbServices.Organisasi.Jabatan
         *
         * @description
         *
         * Creates a new instance in Jabatan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R.Jabatan.createMany = function() {
          var TargetResource = $injector.get("Jabatan");
          var action = TargetResource["::createMany::Organisasi::Jabatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organisasi.Jabatan#destroyAll
         * @methodOf lbServices.Organisasi.Jabatan
         *
         * @description
         *
         * Deletes all Jabatan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Jabatan.destroyAll = function() {
          var TargetResource = $injector.get("Jabatan");
          var action = TargetResource["::delete::Organisasi::Jabatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organisasi.Jabatan#destroyById
         * @methodOf lbServices.Organisasi.Jabatan
         *
         * @description
         *
         * Delete a related item by id for Jabatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Jabatan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.Jabatan.destroyById = function() {
          var TargetResource = $injector.get("Jabatan");
          var action = TargetResource["::destroyById::Organisasi::Jabatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organisasi.Jabatan#findById
         * @methodOf lbServices.Organisasi.Jabatan
         *
         * @description
         *
         * Find a related item by id for Jabatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Jabatan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R.Jabatan.findById = function() {
          var TargetResource = $injector.get("Jabatan");
          var action = TargetResource["::findById::Organisasi::Jabatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organisasi.Jabatan#updateById
         * @methodOf lbServices.Organisasi.Jabatan
         *
         * @description
         *
         * Update a related item by id for Jabatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for Jabatan
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R.Jabatan.updateById = function() {
          var TargetResource = $injector.get("Jabatan");
          var action = TargetResource["::updateById::Organisasi::Jabatan"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Jabatan
 * @header lbServices.Jabatan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Jabatan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Jabatan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Jabatan/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#create
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Jabatan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#createMany
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Jabatan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#upsert
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Jabatan",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#replaceOrCreate
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/Jabatan/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#upsertWithWhere
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/Jabatan/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#exists
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Jabatan/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#findById
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Jabatan/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#replaceById
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/Jabatan/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#find
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Jabatan",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#findOne
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Jabatan/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#updateAll
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/Jabatan/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#deleteById
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Jabatan/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#count
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Jabatan/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#prototype$updateAttributes
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Jabatan/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#createChangeStream
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Jabatan/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Organisasi.Jabatan.findById() instead.
        "::findById::Organisasi::Jabatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Organisasi/:id/Jabatan/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organisasi.Jabatan.destroyById() instead.
        "::destroyById::Organisasi::Jabatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Organisasi/:id/Jabatan/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organisasi.Jabatan.updateById() instead.
        "::updateById::Organisasi::Jabatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Organisasi/:id/Jabatan/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organisasi.Jabatan() instead.
        "::get::Organisasi::Jabatan": {
          isArray: true,
          url: urlBase + "/Organisasi/:id/Jabatan",
          method: "GET"
        },

        // INTERNAL. Use Organisasi.Jabatan.create() instead.
        "::create::Organisasi::Jabatan": {
          url: urlBase + "/Organisasi/:id/Jabatan",
          method: "POST"
        },

        // INTERNAL. Use Organisasi.Jabatan.createMany() instead.
        "::createMany::Organisasi::Jabatan": {
          isArray: true,
          url: urlBase + "/Organisasi/:id/Jabatan",
          method: "POST"
        },

        // INTERNAL. Use Organisasi.Jabatan.destroyAll() instead.
        "::delete::Organisasi::Jabatan": {
          url: urlBase + "/Organisasi/:id/Jabatan",
          method: "DELETE"
        },

        // INTERNAL. Use Organisasi.Jabatan.count() instead.
        "::count::Organisasi::Jabatan": {
          url: urlBase + "/Organisasi/:id/Jabatan/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Jabatan#patchOrCreate
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#updateOrCreate
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#patchOrCreateWithWhere
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#update
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#destroyById
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#removeById
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Jabatan#patchAttributes
         * @methodOf lbServices.Jabatan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jabatan` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.Jabatan#modelName
    * @propertyOf lbServices.Jabatan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Jabatan`.
    */
    R.modelName = "Jabatan";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.APBDesItem
 * @header lbServices.APBDesItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `APBDesItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "APBDesItem",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/APBDesItem/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#create
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/APBDesItem",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#createMany
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/APBDesItem",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#upsert
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/APBDesItem",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#replaceOrCreate
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/APBDesItem/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#upsertWithWhere
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/APBDesItem/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#exists
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/APBDesItem/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#findById
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/APBDesItem/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#replaceById
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/APBDesItem/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#find
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/APBDesItem",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#findOne
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/APBDesItem/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#updateAll
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/APBDesItem/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#deleteById
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/APBDesItem/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#count
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/APBDesItem/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#prototype$updateAttributes
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/APBDesItem/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#createChangeStream
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/APBDesItem/change-stream",
          method: "POST"
        },

        // INTERNAL. Use APBDes.items.findById() instead.
        "::findById::APBDes::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/APBDes/:id/items/:fk",
          method: "GET"
        },

        // INTERNAL. Use APBDes.items.destroyById() instead.
        "::destroyById::APBDes::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/APBDes/:id/items/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use APBDes.items.updateById() instead.
        "::updateById::APBDes::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/APBDes/:id/items/:fk",
          method: "PUT"
        },

        // INTERNAL. Use APBDes.items() instead.
        "::get::APBDes::items": {
          isArray: true,
          url: urlBase + "/APBDes/:id/items",
          method: "GET"
        },

        // INTERNAL. Use APBDes.items.create() instead.
        "::create::APBDes::items": {
          url: urlBase + "/APBDes/:id/items",
          method: "POST"
        },

        // INTERNAL. Use APBDes.items.createMany() instead.
        "::createMany::APBDes::items": {
          isArray: true,
          url: urlBase + "/APBDes/:id/items",
          method: "POST"
        },

        // INTERNAL. Use APBDes.items.destroyAll() instead.
        "::delete::APBDes::items": {
          url: urlBase + "/APBDes/:id/items",
          method: "DELETE"
        },

        // INTERNAL. Use APBDes.items.count() instead.
        "::count::APBDes::items": {
          url: urlBase + "/APBDes/:id/items/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#patchOrCreate
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#updateOrCreate
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#patchOrCreateWithWhere
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#update
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#destroyById
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#removeById
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.APBDesItem#patchAttributes
         * @methodOf lbServices.APBDesItem
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.APBDesItem#modelName
    * @propertyOf lbServices.APBDesItem
    * @description
    * The name of the model represented by this $resource,
    * i.e. `APBDesItem`.
    */
    R.modelName = "APBDesItem";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.JadwalKegiatan
 * @header lbServices.JadwalKegiatan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `JadwalKegiatan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "JadwalKegiatan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/JadwalKegiatan/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use JadwalKegiatan.pendapatan.findById() instead.
        "prototype$__findById__pendapatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/pendapatan/:fk",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.destroyById() instead.
        "prototype$__destroyById__pendapatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/pendapatan/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.updateById() instead.
        "prototype$__updateById__pendapatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/pendapatan/:fk",
          method: "PUT"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.findById() instead.
        "prototype$__findById__biaya": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/biaya/:fk",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.destroyById() instead.
        "prototype$__destroyById__biaya": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/biaya/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.updateById() instead.
        "prototype$__updateById__biaya": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/biaya/:fk",
          method: "PUT"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan() instead.
        "prototype$__get__pendapatan": {
          isArray: true,
          url: urlBase + "/JadwalKegiatan/:id/pendapatan",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.create() instead.
        "prototype$__create__pendapatan": {
          url: urlBase + "/JadwalKegiatan/:id/pendapatan",
          method: "POST"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.destroyAll() instead.
        "prototype$__delete__pendapatan": {
          url: urlBase + "/JadwalKegiatan/:id/pendapatan",
          method: "DELETE"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.count() instead.
        "prototype$__count__pendapatan": {
          url: urlBase + "/JadwalKegiatan/:id/pendapatan/count",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.biaya() instead.
        "prototype$__get__biaya": {
          isArray: true,
          url: urlBase + "/JadwalKegiatan/:id/biaya",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.create() instead.
        "prototype$__create__biaya": {
          url: urlBase + "/JadwalKegiatan/:id/biaya",
          method: "POST"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.destroyAll() instead.
        "prototype$__delete__biaya": {
          url: urlBase + "/JadwalKegiatan/:id/biaya",
          method: "DELETE"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.count() instead.
        "prototype$__count__biaya": {
          url: urlBase + "/JadwalKegiatan/:id/biaya/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#create
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/JadwalKegiatan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#createMany
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/JadwalKegiatan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#upsert
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/JadwalKegiatan",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#replaceOrCreate
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/JadwalKegiatan/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#upsertWithWhere
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/JadwalKegiatan/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#exists
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/JadwalKegiatan/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#findById
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/JadwalKegiatan/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#replaceById
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/JadwalKegiatan/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#find
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/JadwalKegiatan",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#findOne
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/JadwalKegiatan/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#updateAll
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/JadwalKegiatan/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#deleteById
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/JadwalKegiatan/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#count
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/JadwalKegiatan/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#prototype$updateAttributes
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/JadwalKegiatan/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#createChangeStream
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/JadwalKegiatan/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#patchOrCreate
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#updateOrCreate
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#patchOrCreateWithWhere
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#update
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#destroyById
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#removeById
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#patchAttributes
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `JadwalKegiatan` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.JadwalKegiatan#modelName
    * @propertyOf lbServices.JadwalKegiatan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `JadwalKegiatan`.
    */
    R.modelName = "JadwalKegiatan";

    /**
     * @ngdoc object
     * @name lbServices.JadwalKegiatan.pendapatan
     * @header lbServices.JadwalKegiatan.pendapatan
     * @object
     * @description
     *
     * The object `JadwalKegiatan.pendapatan` groups methods
     * manipulating `Pendapatan` instances related to `JadwalKegiatan`.
     *
     * Call {@link lbServices.JadwalKegiatan#pendapatan JadwalKegiatan.pendapatan()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#pendapatan
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Queries pendapatan of JadwalKegiatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.pendapatan = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::get::JadwalKegiatan::pendapatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.pendapatan#count
         * @methodOf lbServices.JadwalKegiatan.pendapatan
         *
         * @description
         *
         * Counts pendapatan of JadwalKegiatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.pendapatan.count = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::count::JadwalKegiatan::pendapatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.pendapatan#create
         * @methodOf lbServices.JadwalKegiatan.pendapatan
         *
         * @description
         *
         * Creates a new instance in pendapatan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.pendapatan.create = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::create::JadwalKegiatan::pendapatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.pendapatan#createMany
         * @methodOf lbServices.JadwalKegiatan.pendapatan
         *
         * @description
         *
         * Creates a new instance in pendapatan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.pendapatan.createMany = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::createMany::JadwalKegiatan::pendapatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.pendapatan#destroyAll
         * @methodOf lbServices.JadwalKegiatan.pendapatan
         *
         * @description
         *
         * Deletes all pendapatan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendapatan.destroyAll = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::delete::JadwalKegiatan::pendapatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.pendapatan#destroyById
         * @methodOf lbServices.JadwalKegiatan.pendapatan
         *
         * @description
         *
         * Delete a related item by id for pendapatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendapatan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pendapatan.destroyById = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::destroyById::JadwalKegiatan::pendapatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.pendapatan#findById
         * @methodOf lbServices.JadwalKegiatan.pendapatan
         *
         * @description
         *
         * Find a related item by id for pendapatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendapatan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.pendapatan.findById = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::findById::JadwalKegiatan::pendapatan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.pendapatan#updateById
         * @methodOf lbServices.JadwalKegiatan.pendapatan
         *
         * @description
         *
         * Update a related item by id for pendapatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for pendapatan
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.pendapatan.updateById = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::updateById::JadwalKegiatan::pendapatan"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.JadwalKegiatan.biaya
     * @header lbServices.JadwalKegiatan.biaya
     * @object
     * @description
     *
     * The object `JadwalKegiatan.biaya` groups methods
     * manipulating `Biaya` instances related to `JadwalKegiatan`.
     *
     * Call {@link lbServices.JadwalKegiatan#biaya JadwalKegiatan.biaya()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan#biaya
         * @methodOf lbServices.JadwalKegiatan
         *
         * @description
         *
         * Queries biaya of JadwalKegiatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.biaya = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::get::JadwalKegiatan::biaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.biaya#count
         * @methodOf lbServices.JadwalKegiatan.biaya
         *
         * @description
         *
         * Counts biaya of JadwalKegiatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.biaya.count = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::count::JadwalKegiatan::biaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.biaya#create
         * @methodOf lbServices.JadwalKegiatan.biaya
         *
         * @description
         *
         * Creates a new instance in biaya of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.biaya.create = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::create::JadwalKegiatan::biaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.biaya#createMany
         * @methodOf lbServices.JadwalKegiatan.biaya
         *
         * @description
         *
         * Creates a new instance in biaya of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.biaya.createMany = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::createMany::JadwalKegiatan::biaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.biaya#destroyAll
         * @methodOf lbServices.JadwalKegiatan.biaya
         *
         * @description
         *
         * Deletes all biaya of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.biaya.destroyAll = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::delete::JadwalKegiatan::biaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.biaya#destroyById
         * @methodOf lbServices.JadwalKegiatan.biaya
         *
         * @description
         *
         * Delete a related item by id for biaya.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for biaya
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.biaya.destroyById = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::destroyById::JadwalKegiatan::biaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.biaya#findById
         * @methodOf lbServices.JadwalKegiatan.biaya
         *
         * @description
         *
         * Find a related item by id for biaya.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for biaya
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.biaya.findById = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::findById::JadwalKegiatan::biaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.JadwalKegiatan.biaya#updateById
         * @methodOf lbServices.JadwalKegiatan.biaya
         *
         * @description
         *
         * Update a related item by id for biaya.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for biaya
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.biaya.updateById = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::updateById::JadwalKegiatan::biaya"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.RPJMDes
 * @header lbServices.RPJMDes
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `RPJMDes` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "RPJMDes",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/RPJMDes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use RPJMDes.Desa() instead.
        "prototype$__get__Desa": {
          url: urlBase + "/RPJMDes/:id/Desa",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.Bidang() instead.
        "prototype$__get__Bidang": {
          url: urlBase + "/RPJMDes/:id/Bidang",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.findById() instead.
        "prototype$__findById__WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/:fk",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.destroyById() instead.
        "prototype$__destroyById__WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.updateById() instead.
        "prototype$__updateById__WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.link() instead.
        "prototype$__link__WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.unlink() instead.
        "prototype$__unlink__WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.exists() instead.
        "prototype$__exists__WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya() instead.
        "prototype$__get__SumberBiaya": {
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya.create() instead.
        "prototype$__create__SumberBiaya": {
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya.update() instead.
        "prototype$__update__SumberBiaya": {
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya.destroy() instead.
        "prototype$__destroy__SumberBiaya": {
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.findById() instead.
        "prototype$__findById__PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/:fk",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.destroyById() instead.
        "prototype$__destroyById__PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.updateById() instead.
        "prototype$__updateById__PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.link() instead.
        "prototype$__link__PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.unlink() instead.
        "prototype$__unlink__PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.exists() instead.
        "prototype$__exists__PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan() instead.
        "prototype$__get__WaktuPelaksanaan": {
          isArray: true,
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.create() instead.
        "prototype$__create__WaktuPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.destroyAll() instead.
        "prototype$__delete__WaktuPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.count() instead.
        "prototype$__count__WaktuPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/count",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan() instead.
        "prototype$__get__PolaPelaksanaan": {
          isArray: true,
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.create() instead.
        "prototype$__create__PolaPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.destroyAll() instead.
        "prototype$__delete__PolaPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.count() instead.
        "prototype$__count__PolaPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#create
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/RPJMDes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#createMany
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/RPJMDes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#upsert
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/RPJMDes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#replaceOrCreate
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/RPJMDes/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#upsertWithWhere
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/RPJMDes/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#exists
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/RPJMDes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#findById
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/RPJMDes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#replaceById
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/RPJMDes/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#find
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/RPJMDes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#findOne
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/RPJMDes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#updateAll
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/RPJMDes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#deleteById
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/RPJMDes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#count
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/RPJMDes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#prototype$updateAttributes
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/RPJMDes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#createChangeStream
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/RPJMDes/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#patchOrCreate
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#updateOrCreate
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#patchOrCreateWithWhere
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#update
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#destroyById
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#removeById
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#patchAttributes
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `RPJMDes` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.RPJMDes#modelName
    * @propertyOf lbServices.RPJMDes
    * @description
    * The name of the model represented by this $resource,
    * i.e. `RPJMDes`.
    */
    R.modelName = "RPJMDes";


        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#Desa
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Fetches belongsTo relation Desa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        R.Desa = function() {
          var TargetResource = $injector.get("Desa");
          var action = TargetResource["::get::RPJMDes::Desa"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#Bidang
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Fetches belongsTo relation Bidang.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        R.Bidang = function() {
          var TargetResource = $injector.get("Bidang");
          var action = TargetResource["::get::RPJMDes::Bidang"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RPJMDes.WaktuPelaksanaan
     * @header lbServices.RPJMDes.WaktuPelaksanaan
     * @object
     * @description
     *
     * The object `RPJMDes.WaktuPelaksanaan` groups methods
     * manipulating `WaktuPelaksanaan` instances related to `RPJMDes`.
     *
     * Call {@link lbServices.RPJMDes#WaktuPelaksanaan RPJMDes.WaktuPelaksanaan()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#WaktuPelaksanaan
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Queries WaktuPelaksanaan of RPJMDes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R.WaktuPelaksanaan = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::get::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#count
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Counts WaktuPelaksanaan of RPJMDes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.WaktuPelaksanaan.count = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::count::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#create
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Creates a new instance in WaktuPelaksanaan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R.WaktuPelaksanaan.create = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::create::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#createMany
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Creates a new instance in WaktuPelaksanaan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R.WaktuPelaksanaan.createMany = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::createMany::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#destroyAll
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Deletes all WaktuPelaksanaan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WaktuPelaksanaan.destroyAll = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::delete::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#destroyById
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Delete a related item by id for WaktuPelaksanaan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WaktuPelaksanaan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WaktuPelaksanaan.destroyById = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::destroyById::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#exists
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Check the existence of WaktuPelaksanaan relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WaktuPelaksanaan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R.WaktuPelaksanaan.exists = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::exists::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#findById
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Find a related item by id for WaktuPelaksanaan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WaktuPelaksanaan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R.WaktuPelaksanaan.findById = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::findById::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#link
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Add a related item by id for WaktuPelaksanaan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WaktuPelaksanaan
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R.WaktuPelaksanaan.link = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::link::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#unlink
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Remove the WaktuPelaksanaan relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WaktuPelaksanaan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.WaktuPelaksanaan.unlink = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::unlink::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.WaktuPelaksanaan#updateById
         * @methodOf lbServices.RPJMDes.WaktuPelaksanaan
         *
         * @description
         *
         * Update a related item by id for WaktuPelaksanaan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for WaktuPelaksanaan
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R.WaktuPelaksanaan.updateById = function() {
          var TargetResource = $injector.get("WaktuPelaksanaan");
          var action = TargetResource["::updateById::RPJMDes::WaktuPelaksanaan"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RPJMDes.SumberBiaya
     * @header lbServices.RPJMDes.SumberBiaya
     * @object
     * @description
     *
     * The object `RPJMDes.SumberBiaya` groups methods
     * manipulating `SumberBiaya` instances related to `RPJMDes`.
     *
     * Call {@link lbServices.RPJMDes#SumberBiaya RPJMDes.SumberBiaya()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#SumberBiaya
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Fetches hasOne relation SumberBiaya.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R.SumberBiaya = function() {
          var TargetResource = $injector.get("SumberBiaya");
          var action = TargetResource["::get::RPJMDes::SumberBiaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.SumberBiaya#create
         * @methodOf lbServices.RPJMDes.SumberBiaya
         *
         * @description
         *
         * Creates a new instance in SumberBiaya of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R.SumberBiaya.create = function() {
          var TargetResource = $injector.get("SumberBiaya");
          var action = TargetResource["::create::RPJMDes::SumberBiaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.SumberBiaya#createMany
         * @methodOf lbServices.RPJMDes.SumberBiaya
         *
         * @description
         *
         * Creates a new instance in SumberBiaya of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R.SumberBiaya.createMany = function() {
          var TargetResource = $injector.get("SumberBiaya");
          var action = TargetResource["::createMany::RPJMDes::SumberBiaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.SumberBiaya#destroy
         * @methodOf lbServices.RPJMDes.SumberBiaya
         *
         * @description
         *
         * Deletes SumberBiaya of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.SumberBiaya.destroy = function() {
          var TargetResource = $injector.get("SumberBiaya");
          var action = TargetResource["::destroy::RPJMDes::SumberBiaya"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.SumberBiaya#update
         * @methodOf lbServices.RPJMDes.SumberBiaya
         *
         * @description
         *
         * Update SumberBiaya of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R.SumberBiaya.update = function() {
          var TargetResource = $injector.get("SumberBiaya");
          var action = TargetResource["::update::RPJMDes::SumberBiaya"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.RPJMDes.PolaPelaksanaan
     * @header lbServices.RPJMDes.PolaPelaksanaan
     * @object
     * @description
     *
     * The object `RPJMDes.PolaPelaksanaan` groups methods
     * manipulating `PolaPelaksanaan` instances related to `RPJMDes`.
     *
     * Call {@link lbServices.RPJMDes#PolaPelaksanaan RPJMDes.PolaPelaksanaan()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.RPJMDes#PolaPelaksanaan
         * @methodOf lbServices.RPJMDes
         *
         * @description
         *
         * Queries PolaPelaksanaan of RPJMDes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R.PolaPelaksanaan = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::get::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#count
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Counts PolaPelaksanaan of RPJMDes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.PolaPelaksanaan.count = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::count::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#create
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Creates a new instance in PolaPelaksanaan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R.PolaPelaksanaan.create = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::create::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#createMany
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Creates a new instance in PolaPelaksanaan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R.PolaPelaksanaan.createMany = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::createMany::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#destroyAll
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Deletes all PolaPelaksanaan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.PolaPelaksanaan.destroyAll = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::delete::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#destroyById
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Delete a related item by id for PolaPelaksanaan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for PolaPelaksanaan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.PolaPelaksanaan.destroyById = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::destroyById::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#exists
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Check the existence of PolaPelaksanaan relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for PolaPelaksanaan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R.PolaPelaksanaan.exists = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::exists::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#findById
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Find a related item by id for PolaPelaksanaan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for PolaPelaksanaan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R.PolaPelaksanaan.findById = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::findById::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#link
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Add a related item by id for PolaPelaksanaan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for PolaPelaksanaan
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R.PolaPelaksanaan.link = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::link::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#unlink
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Remove the PolaPelaksanaan relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for PolaPelaksanaan
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.PolaPelaksanaan.unlink = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::unlink::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.RPJMDes.PolaPelaksanaan#updateById
         * @methodOf lbServices.RPJMDes.PolaPelaksanaan
         *
         * @description
         *
         * Update a related item by id for PolaPelaksanaan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for PolaPelaksanaan
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R.PolaPelaksanaan.updateById = function() {
          var TargetResource = $injector.get("PolaPelaksanaan");
          var action = TargetResource["::updateById::RPJMDes::PolaPelaksanaan"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.APBDes
 * @header lbServices.APBDes
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `APBDes` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "APBDes",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/APBDes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use APBDes.items.findById() instead.
        "prototype$__findById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/APBDes/:id/items/:fk",
          method: "GET"
        },

        // INTERNAL. Use APBDes.items.destroyById() instead.
        "prototype$__destroyById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/APBDes/:id/items/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use APBDes.items.updateById() instead.
        "prototype$__updateById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/APBDes/:id/items/:fk",
          method: "PUT"
        },

        // INTERNAL. Use APBDes.desa() instead.
        "prototype$__get__desa": {
          url: urlBase + "/APBDes/:id/desa",
          method: "GET"
        },

        // INTERNAL. Use APBDes.items() instead.
        "prototype$__get__items": {
          isArray: true,
          url: urlBase + "/APBDes/:id/items",
          method: "GET"
        },

        // INTERNAL. Use APBDes.items.create() instead.
        "prototype$__create__items": {
          url: urlBase + "/APBDes/:id/items",
          method: "POST"
        },

        // INTERNAL. Use APBDes.items.destroyAll() instead.
        "prototype$__delete__items": {
          url: urlBase + "/APBDes/:id/items",
          method: "DELETE"
        },

        // INTERNAL. Use APBDes.items.count() instead.
        "prototype$__count__items": {
          url: urlBase + "/APBDes/:id/items/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#create
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/APBDes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#createMany
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/APBDes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#upsert
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/APBDes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#replaceOrCreate
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/APBDes/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#upsertWithWhere
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/APBDes/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#exists
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/APBDes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#findById
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/APBDes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#replaceById
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/APBDes/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#find
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/APBDes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#findOne
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/APBDes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#updateAll
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/APBDes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#deleteById
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/APBDes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#count
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/APBDes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#prototype$updateAttributes
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/APBDes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.APBDes#createChangeStream
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/APBDes/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.APBDes#patchOrCreate
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.APBDes#updateOrCreate
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.APBDes#patchOrCreateWithWhere
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.APBDes#update
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.APBDes#destroyById
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.APBDes#removeById
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.APBDes#patchAttributes
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDes` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.APBDes#modelName
    * @propertyOf lbServices.APBDes
    * @description
    * The name of the model represented by this $resource,
    * i.e. `APBDes`.
    */
    R.modelName = "APBDes";

    /**
     * @ngdoc object
     * @name lbServices.APBDes.items
     * @header lbServices.APBDes.items
     * @object
     * @description
     *
     * The object `APBDes.items` groups methods
     * manipulating `APBDesItem` instances related to `APBDes`.
     *
     * Call {@link lbServices.APBDes#items APBDes.items()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.APBDes#items
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Queries items of APBDes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R.items = function() {
          var TargetResource = $injector.get("APBDesItem");
          var action = TargetResource["::get::APBDes::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.APBDes.items#count
         * @methodOf lbServices.APBDes.items
         *
         * @description
         *
         * Counts items of APBDes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.items.count = function() {
          var TargetResource = $injector.get("APBDesItem");
          var action = TargetResource["::count::APBDes::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.APBDes.items#create
         * @methodOf lbServices.APBDes.items
         *
         * @description
         *
         * Creates a new instance in items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R.items.create = function() {
          var TargetResource = $injector.get("APBDesItem");
          var action = TargetResource["::create::APBDes::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.APBDes.items#createMany
         * @methodOf lbServices.APBDes.items
         *
         * @description
         *
         * Creates a new instance in items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R.items.createMany = function() {
          var TargetResource = $injector.get("APBDesItem");
          var action = TargetResource["::createMany::APBDes::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.APBDes.items#destroyAll
         * @methodOf lbServices.APBDes.items
         *
         * @description
         *
         * Deletes all items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.items.destroyAll = function() {
          var TargetResource = $injector.get("APBDesItem");
          var action = TargetResource["::delete::APBDes::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.APBDes.items#destroyById
         * @methodOf lbServices.APBDes.items
         *
         * @description
         *
         * Delete a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.items.destroyById = function() {
          var TargetResource = $injector.get("APBDesItem");
          var action = TargetResource["::destroyById::APBDes::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.APBDes.items#findById
         * @methodOf lbServices.APBDes.items
         *
         * @description
         *
         * Find a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R.items.findById = function() {
          var TargetResource = $injector.get("APBDesItem");
          var action = TargetResource["::findById::APBDes::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.APBDes.items#updateById
         * @methodOf lbServices.APBDes.items
         *
         * @description
         *
         * Update a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `APBDesItem` object.)
         * </em>
         */
        R.items.updateById = function() {
          var TargetResource = $injector.get("APBDesItem");
          var action = TargetResource["::updateById::APBDes::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.APBDes#desa
         * @methodOf lbServices.APBDes
         *
         * @description
         *
         * Fetches belongsTo relation desa.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Desa` object.)
         * </em>
         */
        R.desa = function() {
          var TargetResource = $injector.get("Desa");
          var action = TargetResource["::get::APBDes::desa"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Pendapatan
 * @header lbServices.Pendapatan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pendapatan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Pendapatan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Pendapatan/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Pendapatan.details.findById() instead.
        "prototype$__findById__details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Pendapatan/:id/details/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pendapatan.details.destroyById() instead.
        "prototype$__destroyById__details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Pendapatan/:id/details/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pendapatan.details.updateById() instead.
        "prototype$__updateById__details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Pendapatan/:id/details/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pendapatan.details() instead.
        "prototype$__get__details": {
          isArray: true,
          url: urlBase + "/Pendapatan/:id/details",
          method: "GET"
        },

        // INTERNAL. Use Pendapatan.details.create() instead.
        "prototype$__create__details": {
          url: urlBase + "/Pendapatan/:id/details",
          method: "POST"
        },

        // INTERNAL. Use Pendapatan.details.destroyAll() instead.
        "prototype$__delete__details": {
          url: urlBase + "/Pendapatan/:id/details",
          method: "DELETE"
        },

        // INTERNAL. Use Pendapatan.details.count() instead.
        "prototype$__count__details": {
          url: urlBase + "/Pendapatan/:id/details/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#create
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Pendapatan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#createMany
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Pendapatan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#upsert
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Pendapatan",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#replaceOrCreate
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/Pendapatan/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#upsertWithWhere
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/Pendapatan/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#exists
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Pendapatan/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#findById
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Pendapatan/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#replaceById
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/Pendapatan/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#find
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Pendapatan",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#findOne
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Pendapatan/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#updateAll
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/Pendapatan/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#deleteById
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Pendapatan/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#count
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Pendapatan/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#prototype$updateAttributes
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Pendapatan/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#createChangeStream
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Pendapatan/change-stream",
          method: "POST"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.findById() instead.
        "::findById::JadwalKegiatan::pendapatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/pendapatan/:fk",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.destroyById() instead.
        "::destroyById::JadwalKegiatan::pendapatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/pendapatan/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.updateById() instead.
        "::updateById::JadwalKegiatan::pendapatan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/pendapatan/:fk",
          method: "PUT"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan() instead.
        "::get::JadwalKegiatan::pendapatan": {
          isArray: true,
          url: urlBase + "/JadwalKegiatan/:id/pendapatan",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.create() instead.
        "::create::JadwalKegiatan::pendapatan": {
          url: urlBase + "/JadwalKegiatan/:id/pendapatan",
          method: "POST"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.createMany() instead.
        "::createMany::JadwalKegiatan::pendapatan": {
          isArray: true,
          url: urlBase + "/JadwalKegiatan/:id/pendapatan",
          method: "POST"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.destroyAll() instead.
        "::delete::JadwalKegiatan::pendapatan": {
          url: urlBase + "/JadwalKegiatan/:id/pendapatan",
          method: "DELETE"
        },

        // INTERNAL. Use JadwalKegiatan.pendapatan.count() instead.
        "::count::JadwalKegiatan::pendapatan": {
          url: urlBase + "/JadwalKegiatan/:id/pendapatan/count",
          method: "GET"
        },

        // INTERNAL. Use Pendapatan.details.findById() instead.
        "::findById::Pendapatan::details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Pendapatan/:id/details/:fk",
          method: "GET"
        },

        // INTERNAL. Use Pendapatan.details.destroyById() instead.
        "::destroyById::Pendapatan::details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Pendapatan/:id/details/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Pendapatan.details.updateById() instead.
        "::updateById::Pendapatan::details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Pendapatan/:id/details/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Pendapatan.details() instead.
        "::get::Pendapatan::details": {
          isArray: true,
          url: urlBase + "/Pendapatan/:id/details",
          method: "GET"
        },

        // INTERNAL. Use Pendapatan.details.create() instead.
        "::create::Pendapatan::details": {
          url: urlBase + "/Pendapatan/:id/details",
          method: "POST"
        },

        // INTERNAL. Use Pendapatan.details.createMany() instead.
        "::createMany::Pendapatan::details": {
          isArray: true,
          url: urlBase + "/Pendapatan/:id/details",
          method: "POST"
        },

        // INTERNAL. Use Pendapatan.details.destroyAll() instead.
        "::delete::Pendapatan::details": {
          url: urlBase + "/Pendapatan/:id/details",
          method: "DELETE"
        },

        // INTERNAL. Use Pendapatan.details.count() instead.
        "::count::Pendapatan::details": {
          url: urlBase + "/Pendapatan/:id/details/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#patchOrCreate
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#updateOrCreate
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#patchOrCreateWithWhere
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#update
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#destroyById
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#removeById
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#patchAttributes
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.Pendapatan#modelName
    * @propertyOf lbServices.Pendapatan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Pendapatan`.
    */
    R.modelName = "Pendapatan";

    /**
     * @ngdoc object
     * @name lbServices.Pendapatan.details
     * @header lbServices.Pendapatan.details
     * @object
     * @description
     *
     * The object `Pendapatan.details` groups methods
     * manipulating `Pendapatan` instances related to `Pendapatan`.
     *
     * Call {@link lbServices.Pendapatan#details Pendapatan.details()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Pendapatan#details
         * @methodOf lbServices.Pendapatan
         *
         * @description
         *
         * Queries details of Pendapatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.details = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::get::Pendapatan::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan.details#count
         * @methodOf lbServices.Pendapatan.details
         *
         * @description
         *
         * Counts details of Pendapatan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.details.count = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::count::Pendapatan::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan.details#create
         * @methodOf lbServices.Pendapatan.details
         *
         * @description
         *
         * Creates a new instance in details of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.details.create = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::create::Pendapatan::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan.details#createMany
         * @methodOf lbServices.Pendapatan.details
         *
         * @description
         *
         * Creates a new instance in details of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.details.createMany = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::createMany::Pendapatan::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan.details#destroyAll
         * @methodOf lbServices.Pendapatan.details
         *
         * @description
         *
         * Deletes all details of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.details.destroyAll = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::delete::Pendapatan::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan.details#destroyById
         * @methodOf lbServices.Pendapatan.details
         *
         * @description
         *
         * Delete a related item by id for details.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for details
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.details.destroyById = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::destroyById::Pendapatan::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan.details#findById
         * @methodOf lbServices.Pendapatan.details
         *
         * @description
         *
         * Find a related item by id for details.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for details
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.details.findById = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::findById::Pendapatan::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Pendapatan.details#updateById
         * @methodOf lbServices.Pendapatan.details
         *
         * @description
         *
         * Update a related item by id for details.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for details
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pendapatan` object.)
         * </em>
         */
        R.details.updateById = function() {
          var TargetResource = $injector.get("Pendapatan");
          var action = TargetResource["::updateById::Pendapatan::details"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Biaya
 * @header lbServices.Biaya
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Biaya` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Biaya",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Biaya/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Biaya.details.findById() instead.
        "prototype$__findById__details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Biaya/:id/details/:fk",
          method: "GET"
        },

        // INTERNAL. Use Biaya.details.destroyById() instead.
        "prototype$__destroyById__details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Biaya/:id/details/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Biaya.details.updateById() instead.
        "prototype$__updateById__details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Biaya/:id/details/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Biaya.details() instead.
        "prototype$__get__details": {
          isArray: true,
          url: urlBase + "/Biaya/:id/details",
          method: "GET"
        },

        // INTERNAL. Use Biaya.details.create() instead.
        "prototype$__create__details": {
          url: urlBase + "/Biaya/:id/details",
          method: "POST"
        },

        // INTERNAL. Use Biaya.details.destroyAll() instead.
        "prototype$__delete__details": {
          url: urlBase + "/Biaya/:id/details",
          method: "DELETE"
        },

        // INTERNAL. Use Biaya.details.count() instead.
        "prototype$__count__details": {
          url: urlBase + "/Biaya/:id/details/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#create
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Biaya",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#createMany
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Biaya",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#upsert
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Biaya",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#replaceOrCreate
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/Biaya/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#upsertWithWhere
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/Biaya/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#exists
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Biaya/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#findById
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Biaya/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#replaceById
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/Biaya/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#find
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Biaya",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#findOne
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Biaya/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#updateAll
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/Biaya/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#deleteById
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Biaya/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#count
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Biaya/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#prototype$updateAttributes
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Biaya/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Biaya#createChangeStream
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Biaya/change-stream",
          method: "POST"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.findById() instead.
        "::findById::JadwalKegiatan::biaya": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/biaya/:fk",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.destroyById() instead.
        "::destroyById::JadwalKegiatan::biaya": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/biaya/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.updateById() instead.
        "::updateById::JadwalKegiatan::biaya": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/JadwalKegiatan/:id/biaya/:fk",
          method: "PUT"
        },

        // INTERNAL. Use JadwalKegiatan.biaya() instead.
        "::get::JadwalKegiatan::biaya": {
          isArray: true,
          url: urlBase + "/JadwalKegiatan/:id/biaya",
          method: "GET"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.create() instead.
        "::create::JadwalKegiatan::biaya": {
          url: urlBase + "/JadwalKegiatan/:id/biaya",
          method: "POST"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.createMany() instead.
        "::createMany::JadwalKegiatan::biaya": {
          isArray: true,
          url: urlBase + "/JadwalKegiatan/:id/biaya",
          method: "POST"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.destroyAll() instead.
        "::delete::JadwalKegiatan::biaya": {
          url: urlBase + "/JadwalKegiatan/:id/biaya",
          method: "DELETE"
        },

        // INTERNAL. Use JadwalKegiatan.biaya.count() instead.
        "::count::JadwalKegiatan::biaya": {
          url: urlBase + "/JadwalKegiatan/:id/biaya/count",
          method: "GET"
        },

        // INTERNAL. Use Biaya.details.findById() instead.
        "::findById::Biaya::details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Biaya/:id/details/:fk",
          method: "GET"
        },

        // INTERNAL. Use Biaya.details.destroyById() instead.
        "::destroyById::Biaya::details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Biaya/:id/details/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Biaya.details.updateById() instead.
        "::updateById::Biaya::details": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Biaya/:id/details/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Biaya.details() instead.
        "::get::Biaya::details": {
          isArray: true,
          url: urlBase + "/Biaya/:id/details",
          method: "GET"
        },

        // INTERNAL. Use Biaya.details.create() instead.
        "::create::Biaya::details": {
          url: urlBase + "/Biaya/:id/details",
          method: "POST"
        },

        // INTERNAL. Use Biaya.details.createMany() instead.
        "::createMany::Biaya::details": {
          isArray: true,
          url: urlBase + "/Biaya/:id/details",
          method: "POST"
        },

        // INTERNAL. Use Biaya.details.destroyAll() instead.
        "::delete::Biaya::details": {
          url: urlBase + "/Biaya/:id/details",
          method: "DELETE"
        },

        // INTERNAL. Use Biaya.details.count() instead.
        "::count::Biaya::details": {
          url: urlBase + "/Biaya/:id/details/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Biaya#patchOrCreate
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Biaya#updateOrCreate
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Biaya#patchOrCreateWithWhere
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.Biaya#update
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Biaya#destroyById
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Biaya#removeById
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Biaya#patchAttributes
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.Biaya#modelName
    * @propertyOf lbServices.Biaya
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Biaya`.
    */
    R.modelName = "Biaya";

    /**
     * @ngdoc object
     * @name lbServices.Biaya.details
     * @header lbServices.Biaya.details
     * @object
     * @description
     *
     * The object `Biaya.details` groups methods
     * manipulating `Biaya` instances related to `Biaya`.
     *
     * Call {@link lbServices.Biaya#details Biaya.details()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Biaya#details
         * @methodOf lbServices.Biaya
         *
         * @description
         *
         * Queries details of Biaya.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.details = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::get::Biaya::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Biaya.details#count
         * @methodOf lbServices.Biaya.details
         *
         * @description
         *
         * Counts details of Biaya.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.details.count = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::count::Biaya::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Biaya.details#create
         * @methodOf lbServices.Biaya.details
         *
         * @description
         *
         * Creates a new instance in details of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.details.create = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::create::Biaya::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Biaya.details#createMany
         * @methodOf lbServices.Biaya.details
         *
         * @description
         *
         * Creates a new instance in details of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.details.createMany = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::createMany::Biaya::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Biaya.details#destroyAll
         * @methodOf lbServices.Biaya.details
         *
         * @description
         *
         * Deletes all details of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.details.destroyAll = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::delete::Biaya::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Biaya.details#destroyById
         * @methodOf lbServices.Biaya.details
         *
         * @description
         *
         * Delete a related item by id for details.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         *  - `fk` – `{*}` - Foreign key for details
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.details.destroyById = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::destroyById::Biaya::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Biaya.details#findById
         * @methodOf lbServices.Biaya.details
         *
         * @description
         *
         * Find a related item by id for details.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         *  - `fk` – `{*}` - Foreign key for details
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.details.findById = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::findById::Biaya::details"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Biaya.details#updateById
         * @methodOf lbServices.Biaya.details
         *
         * @description
         *
         * Update a related item by id for details.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Pendapatan id
         *
         *  - `fk` – `{*}` - Foreign key for details
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Biaya` object.)
         * </em>
         */
        R.details.updateById = function() {
          var TargetResource = $injector.get("Biaya");
          var action = TargetResource["::updateById::Biaya::details"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Bidang
 * @header lbServices.Bidang
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Bidang` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Bidang",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Bidang/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Bidang#create
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Bidang",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#createMany
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Bidang",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#upsert
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Bidang",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#replaceOrCreate
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/Bidang/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#upsertWithWhere
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/Bidang/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#exists
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Bidang/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#findById
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Bidang/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#replaceById
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/Bidang/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#find
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Bidang",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#findOne
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Bidang/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#updateAll
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/Bidang/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#deleteById
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Bidang/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#count
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Bidang/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#prototype$updateAttributes
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Bidang/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Bidang#createChangeStream
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Bidang/change-stream",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.Bidang() instead.
        "::get::RPJMDes::Bidang": {
          url: urlBase + "/RPJMDes/:id/Bidang",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Bidang#patchOrCreate
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Bidang#updateOrCreate
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Bidang#patchOrCreateWithWhere
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.Bidang#update
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Bidang#destroyById
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Bidang#removeById
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Bidang#patchAttributes
         * @methodOf lbServices.Bidang
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Bidang` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.Bidang#modelName
    * @propertyOf lbServices.Bidang
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Bidang`.
    */
    R.modelName = "Bidang";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.WaktuPelaksanaan
 * @header lbServices.WaktuPelaksanaan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `WaktuPelaksanaan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "WaktuPelaksanaan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/WaktuPelaksanaan/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#create
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/WaktuPelaksanaan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#createMany
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/WaktuPelaksanaan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#upsert
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/WaktuPelaksanaan",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#replaceOrCreate
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/WaktuPelaksanaan/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#upsertWithWhere
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/WaktuPelaksanaan/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#exists
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/WaktuPelaksanaan/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#findById
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/WaktuPelaksanaan/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#replaceById
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/WaktuPelaksanaan/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#find
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/WaktuPelaksanaan",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#findOne
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/WaktuPelaksanaan/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#updateAll
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/WaktuPelaksanaan/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#deleteById
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/WaktuPelaksanaan/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#count
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/WaktuPelaksanaan/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#prototype$updateAttributes
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/WaktuPelaksanaan/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#createChangeStream
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/WaktuPelaksanaan/change-stream",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.findById() instead.
        "::findById::RPJMDes::WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/:fk",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.destroyById() instead.
        "::destroyById::RPJMDes::WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.updateById() instead.
        "::updateById::RPJMDes::WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.link() instead.
        "::link::RPJMDes::WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.unlink() instead.
        "::unlink::RPJMDes::WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.exists() instead.
        "::exists::RPJMDes::WaktuPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan() instead.
        "::get::RPJMDes::WaktuPelaksanaan": {
          isArray: true,
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.create() instead.
        "::create::RPJMDes::WaktuPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.createMany() instead.
        "::createMany::RPJMDes::WaktuPelaksanaan": {
          isArray: true,
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.destroyAll() instead.
        "::delete::RPJMDes::WaktuPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.WaktuPelaksanaan.count() instead.
        "::count::RPJMDes::WaktuPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/WaktuPelaksanaan/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#patchOrCreate
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#updateOrCreate
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#patchOrCreateWithWhere
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#update
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#destroyById
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#removeById
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.WaktuPelaksanaan#patchAttributes
         * @methodOf lbServices.WaktuPelaksanaan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `WaktuPelaksanaan` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.WaktuPelaksanaan#modelName
    * @propertyOf lbServices.WaktuPelaksanaan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `WaktuPelaksanaan`.
    */
    R.modelName = "WaktuPelaksanaan";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SumberBiaya
 * @header lbServices.SumberBiaya
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SumberBiaya` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SumberBiaya",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SumberBiaya/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#create
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SumberBiaya",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#createMany
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/SumberBiaya",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#upsert
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SumberBiaya",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#replaceOrCreate
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/SumberBiaya/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#upsertWithWhere
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/SumberBiaya/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#exists
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SumberBiaya/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#findById
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SumberBiaya/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#replaceById
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/SumberBiaya/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#find
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SumberBiaya",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#findOne
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SumberBiaya/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#updateAll
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/SumberBiaya/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#deleteById
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/SumberBiaya/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#count
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SumberBiaya/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#prototype$updateAttributes
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SumberBiaya/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#createChangeStream
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/SumberBiaya/change-stream",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya() instead.
        "::get::RPJMDes::SumberBiaya": {
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya.create() instead.
        "::create::RPJMDes::SumberBiaya": {
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya.createMany() instead.
        "::createMany::RPJMDes::SumberBiaya": {
          isArray: true,
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya.update() instead.
        "::update::RPJMDes::SumberBiaya": {
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.SumberBiaya.destroy() instead.
        "::destroy::RPJMDes::SumberBiaya": {
          url: urlBase + "/RPJMDes/:id/SumberBiaya",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#patchOrCreate
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#updateOrCreate
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#patchOrCreateWithWhere
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#update
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#destroyById
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#removeById
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SumberBiaya#patchAttributes
         * @methodOf lbServices.SumberBiaya
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SumberBiaya` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.SumberBiaya#modelName
    * @propertyOf lbServices.SumberBiaya
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SumberBiaya`.
    */
    R.modelName = "SumberBiaya";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.PolaPelaksanaan
 * @header lbServices.PolaPelaksanaan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PolaPelaksanaan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "PolaPelaksanaan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/PolaPelaksanaan/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#create
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/PolaPelaksanaan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#createMany
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/PolaPelaksanaan",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#upsert
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/PolaPelaksanaan",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#replaceOrCreate
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Replace an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "replaceOrCreate": {
          url: urlBase + "/PolaPelaksanaan/replaceOrCreate",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#upsertWithWhere
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "upsertWithWhere": {
          url: urlBase + "/PolaPelaksanaan/upsertWithWhere",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#exists
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/PolaPelaksanaan/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#findById
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Find a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/PolaPelaksanaan/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#replaceById
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Replace attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "replaceById": {
          url: urlBase + "/PolaPelaksanaan/:id/replace",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#find
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/PolaPelaksanaan",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#findOne
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/PolaPelaksanaan/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#updateAll
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        "updateAll": {
          url: urlBase + "/PolaPelaksanaan/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#deleteById
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/PolaPelaksanaan/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#count
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/PolaPelaksanaan/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#prototype$updateAttributes
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/PolaPelaksanaan/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#createChangeStream
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/PolaPelaksanaan/change-stream",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.findById() instead.
        "::findById::RPJMDes::PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/:fk",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.destroyById() instead.
        "::destroyById::RPJMDes::PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.updateById() instead.
        "::updateById::RPJMDes::PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.link() instead.
        "::link::RPJMDes::PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.unlink() instead.
        "::unlink::RPJMDes::PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.exists() instead.
        "::exists::RPJMDes::PolaPelaksanaan": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan() instead.
        "::get::RPJMDes::PolaPelaksanaan": {
          isArray: true,
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan",
          method: "GET"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.create() instead.
        "::create::RPJMDes::PolaPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.createMany() instead.
        "::createMany::RPJMDes::PolaPelaksanaan": {
          isArray: true,
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan",
          method: "POST"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.destroyAll() instead.
        "::delete::RPJMDes::PolaPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan",
          method: "DELETE"
        },

        // INTERNAL. Use RPJMDes.PolaPelaksanaan.count() instead.
        "::count::RPJMDes::PolaPelaksanaan": {
          url: urlBase + "/RPJMDes/:id/PolaPelaksanaan/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#patchOrCreate
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R["patchOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#updateOrCreate
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Patch an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#patchOrCreateWithWhere
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source based on the where criteria.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#update
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Update instances of the model matched by {{where}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Information related to the outcome of the operation
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#destroyById
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#removeById
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Delete a model instance by {{id}} from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.PolaPelaksanaan#patchAttributes
         * @methodOf lbServices.PolaPelaksanaan
         *
         * @description
         *
         * Patch attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `PolaPelaksanaan` object.)
         * </em>
         */
        R["patchAttributes"] = R["prototype$updateAttributes"];


    /**
    * @ngdoc property
    * @name lbServices.PolaPelaksanaan#modelName
    * @propertyOf lbServices.PolaPelaksanaan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `PolaPelaksanaan`.
    */
    R.modelName = "PolaPelaksanaan";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
