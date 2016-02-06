var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Timestamp' });
});

router.get('/:id', function(req, res, next) {
	var id=decodeURI(req.params.id);
	var result={unix:"",natural:""};
	var number=Number(id);
	if(!number){
		var date=new Date(id);
		if(!isNaN(date)){
			result.unix=date.getTime()/1000;
			result.natural=id;
		}else{
			result.unix=null;
			result.natural=null;
		}
	}else{
		var date=new Date(number*1000);
		var natural=date.toLocaleDateString();
if(natural!=="Invalid Date"){
	result.unix=id;
	result.natural=convertDate(date);
}else{
	result.unix=null;
	result.natural=null;
}
	}
	res.end(JSON.stringify(result));
  //res.render('index', { title: 'Express' });
});

function convertDate(date){
	var day=date.getUTCDate();
	var month=date.getUTCMonth()+1;
	var year=date.getUTCFullYear();
	var str="";
	switch(month){
		case 1:
		str+="January ";
		break;
		case 2:
		str+="February ";
		break;
		case 3:
		str+="March ";
		break;
		case 4:
		str+="April ";
		break;
		case 5:
		str+="May ";
		break;
		case 6:
		str+="June ";
		break;
		case 7:
		str+="July ";
		break;
		case 8:
		str+="August ";
		break;
		case 9:
		str+="September ";
		break;
		case 10:
		str+="October ";
		break;
		case 11:
		str+="November ";
		break;
		case 12:
		str+="December ";
		break;
	}
	str+=day+", "+year;
	return str;

}



module.exports = router;
