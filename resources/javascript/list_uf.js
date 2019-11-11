$(document).ready(function() {

	// renderizar na tabela as ufs atualizadas
    listarUfs();
});

// chamada ajax ao servidor para pegar a lista de ufs
function listarUfs() {

	$.ajax({
    	url: apiUrl + "/uf",
    	type: "GET",
    	dataType: "json",
    	cache: false,
    	success: function(response) {
        	renderizarTabela(response);
    	}
	});
}

function renderizarTabela(data) {

	// limpa o conteudo atual da tabela (tbody)
	$('#uf_table > tbody').empty();

	// renderiza na tabela os dados atualizados e cria as linhas da tabela
	for (var i = 0; i < data.length; i++) {
        renderizarLinha(data[i]);
    }
}

// criar/renderizar as linhas da tabela
function renderizarLinha(uf) {

    var linha = $("<tr />")
    $("#uf_table").append(linha);
    linha.append($("<td>" + uf.nomeEstado + "</td>"));
    linha.append($("<td>" + uf.uf + "</td>"));
    linha.append($("<td>" + uf.dataCadastroFormatada + "</td>"));
}
