var test;

Ntut = (function(){
	var subjects;

	function calculate(){
		var semesters = $("table");

		mark(semesters);
		subjects = getSubjects(semesters);
		
		test = subjects;
	}

	function mark(semesters){
		for(var i = 0; i < semesters.length; i++){
			var semester = $(semesters[i]);
			var cell = semester.find("th[align]");

			for(var j = 0; j < cell.length; j += 6){
				$(cell[j]).parent().attr("object", "subject");
			}
		}
	}

	function getSubjects(semesters){
		var result = [];

		for(var i = 0; i < semesters.length; i++){
			var semester = $(semesters[i]);
			var rows = semester.find("tr[object=subject]");

			for(var j = 0; j < rows.length; j++)
			{
				result.push(toSubject(rows[i]));
			}
		}
		return result;
	}

	function toSubject(row){
		var result = {};
		var cells = $(row).find("th");

		result.courseId = $(cells[0]).html().replace(/\n/g, "").replace(/ /g, "");
		result.category = $(cells[1]).html().replace(/\n/g, "").replace(/ /g, "");;
		result.subjectName = $(cells[2]).children("a").html();
		result.subjectId = $(cells[3]).html().replace(/\n/g, "").replace(/ /g, "");;
		result.credit = $(cells[5]).html().replace(/\n/g, "").replace(/ /g, "");;
		result.score = $(cells[6]).html().replace(/\n/g, "").replace(/ /g, "");;
		return result;
	}

	return{
		calculate: calculate
	}
})();

Ntut.calculate();