var Backend = require('../controllers/backend.js');
module.exports = function(app) {
	app.get('/errorReport', Backend.errorReportHandler);
}