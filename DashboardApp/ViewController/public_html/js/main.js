/** 
* Example of Require.js bootstrap javascript 
*/  
requirejs.config({  
  // Path mappings for the logical module names  
  paths: {  
    'knockout': 'libs/knockout/knockout-3.3.0',  
    'jquery': 'libs/jquery/jquery-2.1.3.min',  
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.11.4.min',  
    'ojs': 'libs/oj/v1.1.2/min',  
    'ojL10n': 'libs/oj/v1.1.2/ojL10n',  
    'ojtranslations': 'libs/oj/v1.1.2/resources',  
    'signals': 'libs/js-signals/signals.min',  
    'crossroads': 'libs/crossroads/crossroads.min',  
    'text': 'libs/require/text',  
    'promise': 'libs/es6-promise/promise-1.0.0.min',  
    'hammerjs': 'libs/hammer/hammer-2.0.4.min'  
  },  
  // Shim configurations for modules that do not expose AMD  
  shim: {  
    'jquery': {  
      exports: ['jQuery', '$']  
    },  
    'crossroads': {  
      deps: ['signals'],  
      exports: 'crossroads'  
    }  
  },  
  
  // This section configures the i18n plugin. It is merging the Oracle JET built-in translation  
  // resources with a custom translation file.  
  // Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define  
  // a path that is relative to the location of this main.js file.  
  config: {  
    ojL10n: {  
      merge: {  
        //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'  
      }  
    }  
  }  
});  
  
/** 
* A top-level require call executed by the Application. 
* Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies 
* by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko' 
* objects in the callback. 
* 
* For a listing of which JET component modules are required for each component, see the specific component 
* demo pages in the JET cookbook. 
*/  
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',  
         'ojs/ojinputtext', 'ojs/ojchart'], // add additional JET components to the end of this list as needed  
  function(oj, ko, $) // this callback gets executed when all required modules are loaded  
  {  
    function ViewModel() {  
      var self = this;  
  
      // init of inputText sample
          // Observable for user's name that will be specified via the ojInputText  
          self.name = ko.observable();  
          // Observable for welcome message, updated on any name change.  
          self.welcomeText = ko.pureComputed(function() {  
            var name = self.name();  
            return name ? "Hello " + name + ". Welcome to JET!" : "Enter Name Above";  
          });  
          
      // init of chart sample
         /* toggle button variables */
          self.stackValue = ko.observable('off');
          self.orientationValue = ko.observable('vertical');
            
          /* chart data */
          var barSeries = [{name : "Series 1", items : [74, 42, 70, 46]},
                         {name : "Series 2", items : [50, 58, 46, 54]},
                         {name : "Series 3", items : [34, 22, 30, 32]},
                         {name : "Series 4", items : [18, 6, 14, 22]}];
    
          var barGroups = ["Group A", "Group B", "Group C", "Group D"];
       
          self.barSeriesValue = ko.observableArray(barSeries);
          self.barGroupsValue = ko.observableArray(barGroups);      
      
    }  
  
    // Create a view model and apply it to the document body. This causes any  
    // ojComponents specified in the HTML data-bind to be initialized and their  
    // attributes evaluated using the view model.  
    ko.applyBindings(new ViewModel(), document.body);  
  }  
); 