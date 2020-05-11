const ovly = {

	conversor: {

		domain: "https://viacep.com.br/ws/",

		_resultado: null,

		chamarAPI: function (e) {
			var dCep = $("#cep_entered").val();
			var endpoint = this.domain + (dCep ? dCep : "json/") + "/json/";
			var oParametros = {
				base: $("#cep_entered").val()
			};

			console.log("Chamando API...");
			$.get(endpoint, oParametros, $.proxy(this.callback, this));
		},

		callback: function (resultado) {

			if (resultado.erro) {
				//document.querySelector("#resultado_cep").value = "CEP não econtrado";	
				this._resultado = "CEP não econtrado";
				this._preencheCEP("CEP não econtrado");
			} else {
				this._resultado = resultado;
				this._preencheCEP();
			}
			//this._preencheTabela();
		},
		_preencheCEP: function (notFound) {
			if (notFound) {
				$("#resultado_cep").text(notFound);
				$("#resultado_logradouro").text("");
				$("#resultado_bairro").text("");
				$("#resultado_cidade").text("");
				$("#resultado_estado").text("");
			} else {
				$("#resultado_cep").text(this._resultado.cep);
				$("#resultado_logradouro").text(this._resultado.logradouro);
				$("#resultado_bairro").text(this._resultado.bairro);
				$("#resultado_cidade").text(this._resultado.localidade);
				$("#resultado_estado").text(this._resultado.uf);
			}

		},

	}
};

//window.onload = function () {
//	initialize.chamarAPI();
//}