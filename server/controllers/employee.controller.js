const employeeCtrl = {};

employeeCtrl.getEmployees = (req, res) => {
		res.json({
				status: 'Employees goes here'
		});
	}

employeeCtrl.createEmployee = function() {

}

module.exports = employeeCtrl;