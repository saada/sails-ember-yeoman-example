/*---------------------
	:: Home 
	-> controller
---------------------*/
var HomeController = {

	// To trigger this action locally, visit: `http://localhost:port/home/index`
	index(req, res) {

		// This will render the view: C:\Users\SAADA\Documents\Github\Node\jadeapp/views/home/index.ejs
		res.view();

	}

};
module.exports = HomeController;