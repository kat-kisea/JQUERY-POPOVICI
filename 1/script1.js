		$(document).ready(function(){
			$('#link').click(
				function(){
					$('#block').fadeToggle(500, function(){
							if($('#link').html() == 'ascunde'){
								$('#link').html('arata');
							}
							else $('#link').html('ascunde');
						}
					)
					return false;
				}
			)
		});
