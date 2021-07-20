var controllers=angular.module("controllers",[]);
controllers.controller("userCtrl",["$scope",function($scope){
   $scope.heading="Testing of Filters";
   $scope.title="Course Registration";
   $scope.requests=[{username:"Sarthak",courseselected:"AngularJs",leveloftraining:"Advanced",dateofregistration:"14/7/21",costoftraining:1000},
                    {username:"Akash",courseselected:"Java",leveloftraining:"Beginner",dateofregistration:"15/7/21",costoftraining:100}, 
                    {username:"Monika",courseselected:"Python",leveloftraining:"Intermediate",dateofregistration:"10/7/21",costoftraining:2000}, 
                    {username:"Rashmi",courseselected:"ReactJs",leveloftraining:"Advanced",dateofregistration:"12/7/21",costoftraining:1700},
                    {username:"Ram",courseselected:"HTML",leveloftraining:"Beginner",dateofregistration:"19/7/21",costoftraining:1090},
                    {username:"Shyam",courseselected:"AngularJs",leveloftraining:"Advanced",dateofregistration:"14/7/21",costoftraining:1000},
                    {username:"Radha",courseselected:"Python",leveloftraining:"Advanced",dateofregistration:"14/7/21",costoftraining:3000},
                    {username:"Sarita",courseselected:"AngularJs",leveloftraining:"Intermediate",dateofregistration:"16/7/21",costoftraining:1000},
]

}]);