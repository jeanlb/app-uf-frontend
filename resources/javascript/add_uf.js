$(document).ready(function() {

	// requisicao ao servidor para adicionar uf
	$("#form_add_uf").submit(function() {

		var nomeEstado = $("#nomeEstado").val();
		var uf = $("#uf").val();

		$.ajax({
	        type: 'POST',
	        url: apiUrl + "/uf/inserir",
	        contentType: 'application/json',
	        data: JSON.stringify( { "nomeEstado": nomeEstado, "uf": uf } ),
	        success: function(response) {
	        	location.href = "#/";
	        	$('#message').html('Unidade Federativa ' + nomeEstado + ' adicionada com sucesso').css('color', 'blue');
	        }
	    });
	    return false;
	});  

});