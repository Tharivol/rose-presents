angular.module('module.form', [])
    .controller('FormController', Form);

Form.$inject=["$http"]

function Form($http) {
    console.info('form.initialized');
    var fCtl=this
    fCtl.submit= function() {
    	$http.post("/intakeform", fCtl.form)
    	.then(function success(data){
    		console.log("succeeded")//success back to main page.
    	},function failure(err){
    		//failure pops up alert that information didnt save and stays on form.
    		console.log("failure....:(")
    	})

    }





}
