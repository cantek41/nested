/**
 * The controller doesn't do much more than setting the initial data model
 */
var app = angular.module("finaly", ["dndLists"]);
app.controller("finalyCtrl", ["$scope", "$http", function ($scope, $http) {

    $scope.deneme = "Deneme �al���yor...";
    $scope.FormType=[];
    $http.post("/api/myData/Forms").then(function (data) {
        $scope.FormType = data.data;
        console.log($scope.FormType);
    });
    $scope.buttons=["CALL","SMS","TTT"]

    $scope.models = {
        selected: null,
        buttons:["Save","Cancel","Attach"],
        tempWidgetButtons: ["CALL", "SMS", "TTT"],
        tempEntity: ["Stok", "Personel", "Yonetici"],
        tempShowActionButton: ["true", "false"],
        tempActionButtonLink: ["Form1", "From2", "From3"],

        templates: [
            
            { type: "button", id: 1, name: "Button", icon: "fa fa-sign-in",buttons:[] },
            { type: "checkbox", id: 2, name: "Checkbox", icon: "fa fa-check-square-o", buttons: [] },
            { type: "dateTimePicker", id: 3, name: "DateTimePicker", icon: "fa fa-calendar", buttons: [] },
            { type: "label", id: 4, name: "Label", icon: "fa fa-font", buttons: [] },
            { type: "parentId", id: 5, name: "ParentId", icon: "fa fa-id-badge", buttons: [] },
            { type: "pictureBox", id: 6, name: "PictureBox", icon: "fa fa-picture-o", buttons: [] },
            { type: "radio", id: 7, name: "RadioButton", icon: "fa fa-dot-circle-o", buttons: [] },
            { type: "subForm", id: 8, name: "SubFrom", icon: "fa fa-window-maximize", buttons: [] },
            { type: "text", id: 9, name: "TextBox", icon: "fa fa-align-justify", buttons: [] },
            { type: "timePicker", id: 10, name: "TimePicker", icon: "fa fa-calendar", buttons: [] },

        ],

        dropzones: {
            "Form":{},
            "Buttons":[],
            "Widget":{"Widgets": [
               
                {
                    "type": "text",
                    "id": "9",
                    "name": "TextBox",
                    "buttons":[]
                   

                }

        ]},

           
       }
    };

 /*Dropzone i�indeki Buttons Dizisinin i�indeki   buttons'lar� se�ereken kullan�l�yor  */
    $scope.buttonsSelection = function buttonsSelection(item) {

        var idx = $scope.models.dropzones.Buttons.indexOf(item);

        // is currently selected
        if (idx > -1) {
            $scope.models.dropzones.Buttons.splice(idx, 1);
        }

            // is newly selected
        else {
            $scope.models.dropzones.Buttons.push(item);
        }
    };

    /**********************************************************************/

/*Dropzone i�indeki Widget Dizisinin i�indeki   buttons'lar� se�ereken kullan�l�yor  */
    $scope.widgetButtonsSelection = function widgetButtonsSelection(item) {

        var idx = $scope.models.selected.buttons.indexOf(item);

        // is currently selected
        if (idx > -1) {
            $scope.models.selected.buttons.splice(idx, 1);
        }

            // is newly selected
        else {
            $scope.models.selected.buttons.push(item);
        }
    };

/**********************************************************************/
    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);



}]);
