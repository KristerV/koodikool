admin = function(){
	if (Session.equals('admin', true))
		Session.set('admin', false)
	else
		Session.set('admin', true)
}