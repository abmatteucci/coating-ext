var listaDeFormularios = [];

let shifts = [
    { name: "Day", period: {start: 7, end: 15}},
    { name: "Evening", period: {start: 15, end: 23}},
    { name: "Night", period: {start: 23, end: 7}}
];

let jobs = [];

let job = {
    jobID: null,
    itemID: null,
    qtyJobWires: 0,
    startTime: null,
    endTimePrevision: null,
    startShift: null,
    endShift: null,
    finished: false
};

let incs = [
		{
			itemDescription: "XYLAN 8110 / G0871 Black",
			itemID: "256100",
			ptfe_color: "black",
			ptfe_viscosity: { ideal_time: 17, tolerance: 2, mu: "seconds", min_temperature: 21, mu_temperature: "Celsius" },
			solvent: { itemID: "256883", item_description: "Whitford Solvent 99B", lot: "", expire_date: "" },
			expire_date: "",
			lot_number: ""  
		},
		{
			itemDescription: "Xylan 8110 / F2032 Reed Green",
			itemID: "263199",
			ptfe_color: "green",
			ptfe_viscosity: { ideal_time: 17, tolerance: 2, mu: "seconds", min_temperature: 21, mu_temperature: "Celsius" },
			solvent: { itemID: "501165-03", item_description: "Whitford Solvent 93", lot: "", expire_date: "" },
			expire_date: "",
			lot_number: ""  
		},
		{
			itemDescription: "XYLAMED 8110 M-D14454 Blue",
			itemID: "308697",
			ptfe_color: "blue",
			ptfe_viscosity: { ideal_time: 23, tolerance: 2, mu: "seconds", min_temperature: 21, mu_temperature: "Celsius" },
			solvent: { itemID: "256883", item_description: "Whitford Solvent 99B", lot: "", expire_date: "" },
			expire_date: "",
			lot_number: ""  
		}
];

let products = [
	{ 
		name :"Braun IV",
		item : "259040",
		substractOD: { diameter: 0.59, tolerance: 0.01},
		coating_thickness: { thickness_min: 0.007, thickness_max: 0.015 },
		m_unit: "milimeter",
		program: 8,
		notes: "Minimum OD needs to be 0.007mm or 0.0003inch for good consistent colour."  
	 },
	{
		name :"JW Medical",
		item : "307283",
		substractOD: { diameter: 0.675, tolerance: 0.005},
		coating_thickness: { thickness_min: 0.008, thickness_max: 0.014 },
		m_unit: "milimeter",
		program: 53,		
		notes: "Increased min OD to 0.008mm so it will shrink back in the oven to 0.006mm."  

	},
	{
		name :"JW",
		item : "313420",
		substractOD: { diameter: 0.675, tolerance: 0.005},
		coating_thickness: { thickness_min: 0.008, thickness_max: 0.014 },
		m_unit: "milimeter",
		program: 53,		
		notes: "Increased min OD to 0.008mm so it will shrink back in the oven to 0.006mm."  

	},
	{
		name :"Biosensor",
		item : "256403",
		substractOD: { diameter: 0.675, tolerance: 0.005},
		coating_thickness: { thickness_min: 0.008, thickness_max: 0.014 },
		m_unit: "milimeter",
		program: 4,
		notes: "Increased min OD to 0.008mm so it will shrink back in the oven to 0.006mm."  

	},
	{
		name :"Cerenovous/Embotrap",
		item : "309309",
		substractOD: { diameter: 0.018, tolerance: 0.0002},
		coating_thickness: { thickness_min: 0.0003, thickness_max: 0.0004 },
		m_unit: "inch",
		program: 46,
		notes: "Coat shrinks after curing so care must be taken to obtain a minimum coating thickness of 0.0003inches."  

	},
	{
		name :"Glyder",
		item : "269863",
		substractOD: { diameter: 0.019, tolerance: 0.0001},
		coating_thickness: { thickness_min: 0.0003, thickness_max: 0.021 },
		m_unit: "milimeter",
		program: 37,
		notes: "Minimum OD needs to be 0.007mm or 0.0003inch for good consistent colour."  

	},
	{
		name :"Maple Grove",
		item : "268972",
		substractOD: { diameter: 0.0185, tolerance: 0.0005},
		coating_thickness: { thickness_min: 0.0003, thickness_max: 0.0009 },
		m_unit: "inch",
		program: 32,
		notes: "0.0009 inches is a very thick coat and shoud be avoided as parts may stick to each other in the curing step. Target thickness of 0.0006inches after IR Oven."  

	},
	{
		name :"Maple Grove",
		item : "268974",
		substractOD: { diameter: 0.0185, tolerance: 0.0005},
		coating_thickness: { thickness_min: 0.0003, thickness_max: 0.0009 },
		m_unit: "inch",
		program: 32,
		notes: "0.0009 inches is a very thick coat and shoud be avoided as parts may stick to each other in the curing step. Target thickness of 0.0006inches after IR Oven."  

	},
	{
		name :"Given imaging",
		item : "266457",
		substractOD: { diameter: 0.029, tolerance: 0.0002},
		coating_thickness: { thickness_min: 0.007, thickness_max: 0.022 },
		m_unit: "inch",
		program: 16,
		notes: "0.0003 inches min needed for good colour after IR Oven."  

	},
	{
		name :"Ascenda",
		item : "259829",
		substractOD: { diameter: 0.0825, tolerance: 0.001},
		coating_thickness: { thickness_min: 0.007, thickness_max: 0.023 },
		m_unit: "inch",
		program: 27,
		notes: "0.0003 inches min needed for good colour after IR Oven."  

	},
	{
		name :"New Ascenda",
		item : "306891",
		substractOD: { diameter: 0.0645, tolerance: 0.001},
		coating_thickness: { thickness_min: 0.007, thickness_max: 0.024 },
		m_unit: "inch",
		program: 27,
		notes: "0.0003 inches min needed for good colour after IR Oven."  

	},
	{
		name :"Achieva (Nitinol)",
		item : "315191",
		substractOD: { diameter: 0.381, tolerance: 0.013},
		coating_thickness: { thickness_min: 0.007, thickness_max: 0.024 },
		m_unit: "milimeter",
		program: 41,
		notes: "Coated OD referencing 0.395mm for good colour."  

	},
	{
		name :"Achieva",
		item : "216827",
		substractOD: { diameter: 0.133, tolerance: 0.0005},
		coating_thickness: { thickness_min: 0.007, thickness_max: 0.026 },
		m_unit: "inch",
		program: 41,
		notes: "0.0003 inches min needed for good colour after IR Oven."  

	},
	{
		name :"Achieva",
		item : "309857",
		substractOD: { diameter: 0.013, tolerance: 0.0002},
		coating_thickness: { thickness_min: 0.007, thickness_max: 0.027 },
		m_unit: "inch",
		program: 41,
		notes: "0.0003 inches min needed for good colour after IR Oven."  

	},
	{
		name :"Silk road",
		item : "501417-01",
		substractOD: { diameter: 0.0129, tolerance: 0},
		coating_thickness: { thickness_min: 0.007, thickness_max: 0.028 },
		m_unit: "inch",
		program: 63,
		notes: "0.0003 inches min needed for good colour after IR Oven."  	
	},
	{
		name :"Prox Tube",
		item : "313419",
		substractOD: { diameter: 0.375, tolerance: 0},
		coating_thickness: { thickness_min: null, thickness_max: 0.007 },
		m_unit: "milimiter",
		program: 18,
		notes: "Max coated: 0.375. Uncoated: 0.350"  	
	},
	{
		name :"Push Pull",
		item : "",
		substractOD: { diameter: 0.0377, tolerance: 0},
		coating_thickness: { thickness_min: null, thickness_max: 0.001 },
		m_unit: "inch",
		program: 40,
		notes: "Max coated: 0.0377. Uncoated: 0.0353"  	
	},
	{
		name :"Spywire",
		item : "",
		substractOD: { diameter: 0.255, tolerance: 0},
		coating_thickness: { thickness_min: null, thickness_max: 0.0075 },
		m_unit: "inch",
		program: 39,
		notes: "Max coated: 0.255. Uncoated: 0.242"  	
	},
	{
		name :"Pwx",
		item : "",
		substractOD: { diameter: 0.367, tolerance: 0},
		coating_thickness: { thickness_min: null, thickness_max: 0.008 },
		m_unit: "milimeter",
		program: 18,
		notes: "Max coated: 0.375. Min coated: 0.359. Uncoated: 0.350."  	
	},
	{
		name :"Resonetics",
		item : "",
		substractOD: { diameter: 0.0309, tolerance: 0.0003},
		coating_thickness: { thickness_min: 0.0002, thickness_max: 0.0005 },
		m_unit: "inch",
		program: "64 / 60",
		notes: "Max coated: 0.0313. Min coated: 0.0306. Uncoated: 0.0302."  	
	}
];

function criarOpcoesSelect() {
    var select = document.getElementById('itemID');
    
    products.forEach(function(product) {
        var option = document.createElement('option');
        option.value = product.name + " (" + product.item +")";
        option.textContent = product.name + " (" + product.item +")";
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    carregarDadosArmazenados();
    carregarJobsArmazenados();
    var addButton = document.getElementById('addButton');
    if (addButton) {
        addButton.addEventListener('click', mostrarFormulario);
    }

    var submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', processarFormulario);
    }

    // Preencher a tabela com os dados existentes
    preencherTabelaFormularios();
});

document.addEventListener('DOMContentLoaded', function() {
    carregarDadosArmazenados();
    //criarOpcoesSelect(); // Chama a função para criar as opções do select
    carregarJobsArmazenados(); 

    // Restante do seu código...
    const elementList = document.getElementById('listTest');

    const schedulerElement = new JobsScheduler(elementList);

    schedulerElement.addJob(listaDeFormularios[listaDeFormularios.length - 3]);
    schedulerElement.addJob(listaDeFormularios[listaDeFormularios.length - 2]);
    schedulerElement.addJob(listaDeFormularios[listaDeFormularios.length - 1]);

    schedulerElement.update();
});

function carregarDadosArmazenados() {
    var formData = localStorage.getItem('formularios');
    var job = localStorage.getItem('jobs');
    if (formData) {
        listaDeFormularios = JSON.parse(formData);
    }
    if (job){
        jobs = JSON.parse(job);
    }
}

function salvarDadosArmazenados() {
    localStorage.setItem('formularios', JSON.stringify(listaDeFormularios));
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function mostrarFormulario() {
    var formulario = document.getElementById('formulario');
    formulario.style.display = 'block';
}

function pegarUltimosCincoItens(lista) {
    if (lista.length >= 5) {
        return lista.slice(-5); // Retorna os últimos 5 elementos da lista
    } else {
        return lista; // Se a lista tiver menos de 5 elementos, retorna a lista inteira
    }
}

var lastForms = pegarUltimosCincoItens(listaDeFormularios);

function preencherTabelaFormularios() {
    var tabelaFormularios = document.getElementById('tabelaFormularios');
    var tbody = tabelaFormularios.querySelector('tbody');
    tbody.innerHTML = ''; // Limpar a tabela antes de preencher


    listaDeFormularios.forEach(function(formulario, index) {
        var row = tbody.insertRow();
        var cellItemID = row.insertCell(0);
        var cellJobID = row.insertCell(1);
        var cellQtyJobWires = row.insertCell(2);
        var cellQuantidadeRacks = row.insertCell(3);
        var cellRacksPintados = row.insertCell(4);
        var cellTestRack = row.insertCell(5);
        var cellAcoes = row.insertCell(6);

        cellItemID.textContent = formulario.itemID;
        cellJobID.textContent = formulario.jobID;
        cellQtyJobWires.textContent = formulario.qtyJobWires;
        cellQuantidadeRacks.textContent = formulario.quantidadeRacks;
        cellRacksPintados.textContent = formulario.racksPintados;
        cellTestRack.textContent = formulario.testRack ? 'Sim' : 'Não';


        // Botão de menu
        var menuButton = document.createElement('button');
        menuButton.innerHTML = '<i class="fa-regular fa-square-caret-down"></i>';
        menuButton.addEventListener('click', function() {
            var menuOptions = document.getElementById('menuOptions');
            menuOptions.classList.toggle('hidden');

            // Passar o índice do formulário para as opções do menu
            var editarOption = menuOptions.querySelector('.editarOption');
            var excluirOption = menuOptions.querySelector('.excluirOption');
            var exibirGraficoOption = menuOptions.querySelector('.exibirGraficoOption');
            var descriptionOption = menuOptions.querySelector('.descriptionOption');

            editarOption.addEventListener('click', function() {
                mostrarFormularioEditar(index);
                menuOptions.classList.add('hidden'); // Esconder o menu após a escolha
            });

            excluirOption.addEventListener('click', function() {
                deletarFormulario(index);
                menuOptions.classList.add('hidden'); // Esconder o menu após a escolha
            });

            exibirGraficoOption.addEventListener('click', function() {
                exibirGrafico(index, jobs);
                menuOptions.classList.add('hidden'); // Esconder o menu após a escolha
            });

            descriptionOption.addEventListener('click', function() {
                exibirDescricaoJob(index);
                menuOptions.classList.add('hidden'); // Esconder o menu após a escolha
            });
        });
        cellAcoes.appendChild(menuButton);

        // Adicionar opções do menu
        var menuOptions = document.createElement('ul');
        menuOptions.classList.add('hidden', 'absolute', 'bg-white', 'border', 'border-gray-300', 'py-2', 'rounded', 'shadow', 'mt-2');
        menuOptions.id = 'menuOptions';

        var editarOption = document.createElement('li');
        editarOption.innerHTML = '<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 editarOption">Editar</a>';
        menuOptions.appendChild(editarOption);

        var excluirOption = document.createElement('li');
        excluirOption.innerHTML = '<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 excluirOption">Excluir</a>';
        menuOptions.appendChild(excluirOption);

        var exibirGraficoOption = document.createElement('li');
        exibirGraficoOption.innerHTML = '<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 exibirGraficoOption">Exibir Gráfico</a>';
        menuOptions.appendChild(exibirGraficoOption);

        var descriptionOption = document.createElement('li');
        descriptionOption.innerHTML = '<a href="#" class="block px-4 py-2 text-gray-800 hover:bg-blue-100 descriptionOption">Descrição</a>';
        menuOptions.appendChild(descriptionOption);

        cellAcoes.appendChild(menuOptions);
    });

    tabelaFormularios.style.display = 'block';
}

function exibirDescricaoJob(index) {
    var formData = listaDeFormularios[index];
    console.log("Formulario a ser exibido: " + formData.jobID);
    var job = jobs.find(function(j) {
        console.log("Formulario a ser exibido existe e é: " + formData.jobID);
        return j.jobID === formData.jobID;
    });

    if (job) {
        var descricaoJobTable = document.getElementById('descricaoJobTable');
        descricaoJobTable.style.display = 'block';

        var descricaoJobBody = descricaoJobTable.querySelector('tbody');
        descricaoJobBody.innerHTML = '';

        // Preencher a tabela de descrição do Job com os detalhes do Job
        var row = descricaoJobBody.insertRow();
        var cellLabel = row.insertCell(0);
        var cellValue = row.insertCell(1);

        cellLabel.textContent = 'Item ID:';
        cellValue.textContent = job.itemID;

        row = descricaoJobBody.insertRow();
        cellLabel = row.insertCell(0);
        cellValue = row.insertCell(1);

        cellLabel.textContent = 'Qty. Job Wires:';
        cellValue.textContent = job.qtyJobWires;

        // ... (continuar preenchendo a tabela com outros detalhes do Job)
    }
}

function mostrarFormularioEditar(index) {
    var formulario = document.getElementById('formulario');
    formulario.style.display = 'block';

    var formData = listaDeFormularios[index];
    document.getElementById('itemID').value = formData.itemID;
    document.getElementById('jobID').value = formData.jobID;
    document.getElementById('qtyJobWires').value = formData.qtyJobWires;
    document.getElementById('quantidadeRacks').value = formData.quantidadeRacks;
    document.getElementById('racksPintados').value = formData.racksPintados;
    document.getElementById('testRack').checked = formData.testRack;
}

function processarFormulario() {
    var formData = {
        itemID: document.getElementById('itemID').value,
        jobID: document.getElementById('jobID').value,
        qtyJobWires: parseInt(document.getElementById('qtyJobWires').value),
        quantidadeRacks: parseInt(document.getElementById('quantidadeRacks').value),
        racksPintados: parseInt(document.getElementById('racksPintados').value),
        testRack: document.getElementById('testRack').checked,
        horarioInclusao: parseInt(Date.now()),
        program: null
    };

    

    // Encontra o objeto product correspondente ao itemID selecionado
    var selectedProduct = products.find(function(product) {
        return product.name === formData.itemID;
    });

    // Define os campos do formulário com os valores do produto selecionado
    if (selectedProduct) {
        formData.program = selectedProduct.program;
        // Define outros campos se necessário...
    }

    let index = verificarJob(formData);
    
    if (index === -1) {
    // Insere o formulário na lista de jobs.
        listaDeFormularios.push(formData);
    } else {
        listaDeFormularios[index] = formData;
    }

    deleteJobs(formData);
    var new_jobs = criarJobs(formData);
    new_jobs.forEach(function(job){
        jobs.push(job);
        //console.log("Job end Prevision: " + job.endShift.name + ", Job End Shift: " + identificarPeriodoDeTrabalho(job.endTimePrevision, shifts));
    });
    
    // Salvar a lista no armazenamento
    salvarDadosArmazenados();

    preencherTabelaFormularios();

    // Realizar as operações desejadas com as informações
    var racksNaoPintados = parseInt(formData.qtyJobWires / 40) - formData.racksPintados;
    var mensagem =
        "ItemID: " + formData.itemID +
        "\nJobID: " + formData.jobID +
        "\nQty. wires: " + formData.qtyJobWires +
        "\nQuantidade de Racks: " + formData.quantidadeRacks +
        "\nRacks Pintados: " + formData.racksPintados +
        "\nRacks Não Pintados: " + racksNaoPintados +
        "\nTest Rack: " + (formData.testRack ? "Sim" : "Não");


    // Exibir ou usar a mensagem como desejar
    alert(mensagem);
    //console.log(listaDeFormularios);

    // Depois de processar o formulário, você pode ocultar novamente o formulário
    var formulario = document.getElementById('formulario');
    formulario.style.display = 'none';
}

function deleteJobs(formData){
    //console.log("Ver 'jobs': " + jobs);
    jobs.forEach(function (job, index){
        if (job.jobID == formData.jobID) {
            console.log("Job a ser excluído: " + job.startShift.name);
            jobs.splice(index, 1);
            // Após remover o elemento, você deve diminuir o índice (i) em 1 para continuar a iteração corretamente.
            console.log("jobs.lenght: " + jobs.length);
        }
        console.log("jobs.lenght outside if: " + jobs.length);
    });
    salvarJobsNoLocalStorage(jobs);
};

function getLastJobSavedEndTime(){
    var endTime = 0;
    carregarJobsArmazenados();
    jobs.forEach(function (job){
        job.endTimePrevision > endTime ? endTime = job.endTimePrevision : endTime;
    });
    return endTime;
}

function criarJobs(formData) {
    var jobs = [];
    let actual = Date.now();
    var lastJobStartTime = getLastJobSavedEndTime();
    var actualTime = actual > (lastJobStartTime + (60*60*1000)) ? actual : lastJobStartTime + (60*60*1000);
    var racksDisponiveis = formData.quantidadeRacks;
    var qtyWiresTotal = formData.qtyJobWires - (formData.racksPintados * 40);

    while (qtyWiresTotal > 0) {
        //console.log("Actual Time in criarJobs(): " + actualTime);
        var wiresProduzidosNestaHora = Math.min(qtyWiresTotal, racksDisponiveis * 40);
        
        if (jobs.length > 0){

            var job = {
                jobID: formData.jobID,
                itemID: formData.itemID,
                qtyJobWires: wiresProduzidosNestaHora,
                startShift: jobs[jobs.length -1].startShift,
                startTime: actualTime,
                endTimePrevision: jobs[jobs.length -1].endTimePrevision,
                endShift: jobs[jobs.length -1].endShift,
                wiresProduzidos: 0 // Começa com 0, mas será atualizado no loop do gráfico
            };
        } else if (jobs.length == 0 && formData.testRack){
            wiresProduzidosNestaHora = 40;
            var job = {
                jobID: formData.jobID,
                itemID: formData.itemID,
                qtyJobWires: wiresProduzidosNestaHora,
                startShift: identificarPeriodoDeTrabalho(actualTime, shifts),
                startTime: actualTime,
                endTimePrevision: actualTime + qtyRacksToIntMiliseconds(formData),
                endShift: identificarPeriodoDeTrabalho(actualTime + qtyRacksToIntMiliseconds(formData), shifts),
                wiresProduzidos: 0 // Começa com 0, mas será atualizado no loop do gráfico
            };
        } else {
            var job = {
                jobID: formData.jobID,
                itemID: formData.itemID,
                qtyJobWires: wiresProduzidosNestaHora,
                startShift: identificarPeriodoDeTrabalho(actualTime, shifts),
                startTime: actualTime,
                endTimePrevision: actualTime + qtyRacksToIntMiliseconds(formData),
                endShift: identificarPeriodoDeTrabalho(actualTime + qtyRacksToIntMiliseconds(formData), shifts),
                wiresProduzidos: 0 // Começa com 0, mas será atualizado no loop do gráfico
            };
        };
        //console.log("Quantidade inserida no job para essa hora " + Date(job.startTime) + " :" + wiresProduzidosNestaHora)
        jobs.push(job);

        qtyWiresTotal -= wiresProduzidosNestaHora; // Reduz a quantidade total de wires pelo que foi produzido no job
        //racksDisponiveis -= 1; // Reduz a quantidade de racks disponíveis para o próximo job
        actualTime += (60 * 60 * 1000); // Avança no tempo para o próximo job
        
    }

    // Salvar os objetos jobs no localStorage
    salvarJobsNoLocalStorage(jobs);

    return jobs;
};


// Função para salvar um objeto job no localStorage
function salvarJobNoLocalStorage(job) {
    var jobData = localStorage.getItem('jobs');
    var jobs = jobData ? JSON.parse(jobData) : [];
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));
};

function carregarJobsArmazenados() {
    var jobData = localStorage.getItem('jobs');
    if (jobData) {
        jobs = JSON.parse(jobData);
    }
};

function qtyRacksToIntMiliseconds(formData){
    return parseInt(((formData.qtyJobWires / 40) / formData.quantidadeRacks) * 
        (3600 * 1000));
};

function getFormDataFromJob(job, listaDeFormularios){
    var form = listaDeFormularios.find(formulario => {
        return formulario.jobID == job.jobID;
      });
      console.log("Dentro da função getFormDataFromJob(). Exibe o formData.itemID: " + form.itemID);
    return form;
};

function verificarJob(formData) {
    var index = -1; // Inicializar com -1 para indicar que o formulário não foi encontrado
    listaDeFormularios.forEach(function(formulario, i) {
        if (formulario.jobID == formData.jobID) {
            index = i; // Atribuir o índice correto na lista
        }
    });
    return index;
}

function salvarJobsNoLocalStorage() {
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function deletarFormulario(index) {
    listaDeFormularios.splice(index, 1); // Remove o formulário da lista pelo índice
    salvarDadosArmazenados(); // Salva a lista atualizada no armazenamento
    //var deletedJobID = listaDeFormularios[index].jobID;
    // Encontra o job relacionado ao formulário excluído
    deleteJobs(listaDeFormularios[index]);
    preencherTabelaFormularios(); // Atualiza a tabela na UI
}

var chart = null; // Variável para armazenar o gráfico

// Função para criar e exibir o gráfico com base nos dados do formulário

function exibirGrafico(index, jobs) {
    var graficoCanvas = document.getElementById('graficoBarras');
    graficoCanvas.style.display = 'block';
    
    var ctx = graficoCanvas.getContext('2d');
    if (chart) {
        chart.destroy();
    }

    var labels = [];
    var data = [];
    var producaoAcumulada = 0;

    formulario = listaDeFormularios[index];
    thisJob = [];
    jobs.forEach(function (job){
        //if(job.jobID == formulario.jobID){
        var dataAtualAbs = Date.now();
        var shift = identificarPeriodoDeTrabalho(dataAtualAbs, shifts);
        var jobTime = new Date(parseInt(job.startTime));
        var maxShiftTime = new Date(dataAtualAbs);
        var minShiftTime = new Date(dataAtualAbs);
        if (shift.name == "Night"){
            minShiftTime.setHours(parseInt(shift.period.start), 0, 0, 0);
            maxShiftTime.setHours((parseInt(shift.period.end) -1), 59, 59, 999);
            if (maxShiftTime.getTime() < dataAtualAbs){
                maxShiftTime.setDate(parseInt(maxShiftTime.getDate() + 1));
            } else if (minShiftTime.getTime() > dataAtualAbs){
                minShiftTime.setDate(parseInt(minShiftTime.getDate() - 1));
            };
        } else {
        
            maxShiftTime.setHours((parseInt(shift.period.end) -1), 59, 59, 999);
            minShiftTime.setHours(parseInt(shift.period.start), 0, 0, 0);
        };

        if (minShiftTime.getTime() <= jobTime.getTime() && maxShiftTime.getTime() >= jobTime.getTime()){
                thisJob.push(job);
        };
    });
    console.log("thisJob.lenght: " + thisJob.length);
    if (thisJob.length > 0) {

        // Cria uma variável que só deve ser usada em testes. Precisamos simular que estamos no início do job para 
        // ver o gráfico preditivo do job. Após a bateria de testes, devemos modificar essa estrutura.
        var dataTestes = new Date(thisJob[0].startTime);
        // Precisamos ser capazes de variar o horário na dataTestes. Aqui, avançamos 2 horas na dataTeste.
        var tempoTeste = dataTestes.getTime() + (10 * 60 * 60 * 1000);
        // Criamos um outro objeto Date dataTestesVariada que é definida para testes.
        var dataTestesVariada = new Date(tempoTeste);

        //console.log("Data atual durante o teste: " + dataTestesVariada);

        var horaShiftStartTeste = thisJob[0].startShift.period.start;


        //console.log("Display thisJob.lenght: " + thisJob.length)
        for (var i = 0; i < thisJob.length; i++) {
            var job = thisJob[i];
            var dataAtualAbs = Date.now();
            var dataAtual = new Date(parseInt(job.startTime));
            var dataAtualNightShift = new Date(parseInt(job.startTime));
            
            // console.log("Timestamp: " + parseInt(job.startTime));
            // console.log("Data atual: " + dataAtual);

            // Implementando a lógica dos testes. O parâmetro 'date' em teste deve ser configurado para 'tempoTeste' e deve ser trocado para 'dataAtualAbs' em produção.
            var periodoDeTrabalho = identificarPeriodoDeTrabalho(dataAtualAbs, shifts);
            var inicioPeriodo = parseInt(periodoDeTrabalho.period.start);
            var fimPeriodo = parseInt(periodoDeTrabalho.period.end);
            dataAtualNightShift.setHours(periodoDeTrabalho.period.start,0,0,0);
            console.log("Testando condição do Night Shift: " + dataAtual.getTime() > dataAtualNightShift.getTime() + ", e a variável dataAtualNightShift é: " + dataAtualNightShift);
            

            //var wiresProduzidos = Math.min(job.qtyJobWires, (i + 1) * 40); // Calcula a produção de wires para esta hora
            if (inicioPeriodo <= dataAtual.getHours() && fimPeriodo > dataAtual.getHours()){
                var hora = 'das ' + (dataAtual.getHours()) + 'h às ' + 
                (dataAtual.getHours() >= 23 ? 0 : dataAtual.getHours() + 1) + 'h';
                labels.push(hora);
                data.push({ x: i, y: job.qtyJobWires, r: 10 });
            } else if (dataAtual.getTime() > dataAtualNightShift.getTime() || dataAtual.getHours() < 7){
                var hora = 'das ' + (dataAtual.getHours()) + 'h às ' + (dataAtual.getHours() >= 23 ? 0 : dataAtual.getHours() + 1) + 'h';
                labels.push(hora);
                data.push({ x: i, y: job.qtyJobWires, r: 10 });
            };
            
            
        };
    } else {
        //thisJob = []
        jobs.forEach( function (job){
            if(job.jobID == formulario.jobID){
                thisJob.push(job);
            }
        });

        for (var i = 0; i < thisJob.length; i++) {
            var job = thisJob[i];
            var dataAtualAbs = Date.now();
            var dataAtual = new Date(parseInt(job.startTime));
            var dataAtualNightShift = new Date(parseInt(job.startTime));
            
            // console.log("Timestamp: " + parseInt(job.startTime));
            // console.log("Data atual: " + dataAtual);

            // Implementando a lógica dos testes. O parâmetro 'date' em teste deve ser configurado para 'tempoTeste' e deve ser trocado para 'dataAtualAbs' em produção.
            var periodoDeTrabalho = identificarPeriodoDeTrabalho(dataAtualAbs, shifts);
            var inicioPeriodo = parseInt(periodoDeTrabalho.period.start);
            var fimPeriodo = parseInt(periodoDeTrabalho.period.end);
            dataAtualNightShift.setHours(periodoDeTrabalho.period.start,0,0,0);
            console.log("Testando condição do Night Shift: " + dataAtual.getTime() > dataAtualNightShift.getTime() + ", e a variável dataAtualNightShift é: " + dataAtualNightShift);
            

            //var wiresProduzidos = Math.min(job.qtyJobWires, (i + 1) * 40); // Calcula a produção de wires para esta hora
            if (inicioPeriodo <= dataAtual.getHours() && fimPeriodo > dataAtual.getHours()){
                var hora = 'das ' + (dataAtual.getHours()) + 'h às ' + 
                (dataAtual.getHours() >= 23 ? 0 : dataAtual.getHours() + 1) + 'h';
                labels.push(hora);
                data.push({ x: i, y: job.qtyJobWires, r: 10 });
            } else if (dataAtual.getTime() > dataAtualNightShift.getTime() || dataAtual.getHours() < 7){
                var hora = 'das ' + (dataAtual.getHours()) + 'h às ' + (dataAtual.getHours() >= 23 ? 0 : dataAtual.getHours() + 1) + 'h';
                labels.push(hora);
                data.push({ x: i, y: job.qtyJobWires, r: 10 });
            };
            
            
        }
    };
    //console.log("Horas até o final do shift: " + calcularHorasRestantes(tempoTeste));
    //console.log("Horas para finalizar o job: " + qtyRacksToIntMiliseconds(getFormDataFromJob(thisJob[thisJob.length - 1], listaDeFormularios)) / (60 * 60 * 1000))

    var jobsIDsList = [];

    // Obtemos a lista de jobIDs
    thisJob.forEach(function (job){
        if (!jobsIDsList.includes(job.jobID)){
            jobsIDsList.push(job.jobID);
        }
    });
    console.log("jobsIDsList: " + jobsIDsList);

    function getIndexForChangeJobID(thisJob, jobsIDsList){
        var tempID = jobsIDsList[0];
        var tempIndex = [];
        thisJob.forEach(function(job, index){
            if (job.jobID != tempID){
                tempIndex.push(index);
                tempID = job.jobID;
            }
        });
        return tempIndex;
    };

    var indexesList = getIndexForChangeJobID(thisJob, jobsIDsList);

    function generateAnnotations(indexesList){
        var annotations = [];
        indexesList.forEach(function (element, index){
            var annotation = {
                line1: {
                    type: 'line',
                    yMin: 0,
                    yMax: thisJob[element].qtyJobWires,
                    mode: 'vertical',
                    scaleID: 'x',
                    xMin: labels[element],
                    xMax: labels[element], // Substitua pelo valor desejado
                    borderColor: 'red',
                    borderWidth: 2,
                    label: {
                        content: 'Job: ' + thisJob[element].jobID,
                        enabled: true,
                        position: 'top'
                    }
                }
            }
            annotations.push(annotation);
        });
        return annotations;
    }

    var annotations = generateAnnotations(indexesList);

    chart = new Chart(ctx, {
        type: 'bar', // Use 'line' chart para mostrar a produção acumulada
        data: {
            labels: labels,
            datasets: [{
                label: 'Produção Acumulada de Wires',
                data: data,
                backgroundColor: function(context) {
                    if (context.dataIndex >= (8 - calcularHorasRestantes())) {
                        return 'rgba(255, 0, 0, 0.2)';
                    } else {
                        return 'rgba(75, 192, 192, 0.2)';
                    }
                },
                borderColor: function(context) {
                    if (context.dataIndex >= (8 - calcularHorasRestantes())) {
                        return 'rgba(255, 0, 0, 0.2)';
                    } else {
                        return 'rgba(75, 192, 192, 0.2)';
                    }
                },
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                  display: true,
                  text: periodoDeTrabalho.name,
                },
                annotation: {
                    annotations: annotations
                }
              }
        }
    });

}
// function exibirGrafico(listaDeFormularios, index) {
//     var graficoCanvas = document.getElementById('graficoBarras');
//     graficoCanvas.style.display = 'block';

//     var formData = listaDeFormularios[index];
//     var labels = [];
//     var data = [];

//     var dataAtual = new Date();
    

//     var horaAtual = Date.now();
//     // console.log("Hora atual: " + horaAtual);
//     // console.log("Imprimindo dados do formData: " + formData.horarioInclusao + ", tipo: " + typeof(formData.horarioInclusao));
//     var periodoDeTrabalho = identificarPeriodoDeTrabalho(horaAtual, shifts);
//     var inicioPeriodo = parseInt(periodoDeTrabalho.period.start);
//     var fimPeriodo = parseInt(periodoDeTrabalho.period.end);
//     var dataSaveForm = new Date(parseInt(formData.horarioInclusao));

//     console.log("Actual shift: " + periodoDeTrabalho.name + ", Data do registro: " + dataSaveForm.getDate() + ", Horário do registro: " + dataSaveForm.getHours());

//     for (var i = 0; i < 8; i++) {
//         var hora = 'Hora ' + (i + 1);
//         labels.push(hora);

//         var quantidadeRacks = formData.testRack && i === 0 ? 1 : formData.quantidadeRacks;
//         if (dataSaveForm.getHours() >= inicioPeriodo && dataSaveForm.getHours() < fimPeriodo) {
//             if (i >= dataAtual.getHours() && i < fimPeriodo) {
//                 data.push({ x: i, y: quantidadeRacks, r: 10 });
//             } else {
//                 data.push(quantidadeRacks);
//             }
//         } else {
//             data.push(quantidadeRacks);
//         }
//     }

//     var ctx = graficoCanvas.getContext('2d');
//     if (chart) {
//         chart.destroy();
//     }
//     //dataSaveForm.setHours(hours = horaTInclusao);
//     // console.log("Diferença datas: " + (dataAtual - dataSaveForm));
//     // console.log("form data: " + dataSaveForm);
//     // console.log("Miliseconds in 8 hours: " + (8 * 3600 * 1000));
//     console.log("Horas até o final do shift: " + calcularHorasRestantes());
//     console.log("Horas para finalizar o job: " + qtyRacksToIntMiliseconds(formData) / (60 * 60 * 1000))
//     if (calcularHorasRestantes() < 8){
        
//         chart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: labels,
//                 datasets: [{
//                     label: 'Quantidade de Racks',
//                     data: data,
//                     backgroundColor: function(context) {
//                         if (context.dataIndex >= (8 - calcularHorasRestantes(horaAtual))) {
//                             return 'rgba(255, 0, 0, 0.2)';
//                         } else {
//                             return 'rgba(75, 192, 192, 0.2)';
//                         }
//                     },
//                     borderColor: function(context) {
//                         if (context.dataIndex >= (8 - calcularHorasRestantes(horaAtual))) {
//                             return 'rgba(255, 0, 0, 0.2)';
//                         } else {
//                             return 'rgba(75, 192, 192, 0.2)';
//                         }
//                     },
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//     } else {
//         chart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: labels,
//                 datasets: [{
//                     label: 'Quantidade de Racks',
//                     data: data,
//                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                     borderColor: 'rgba(75, 192, 192, 0.2)',
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//     };
// }


// Função para identificar o período de trabalho com base no horário atual
function identificarPeriodoDeTrabalho(date, shifts) {
    var horaAtual = new Date(date).getHours();
    var periodo = null;
    shifts.find(function (shift){
        if (horaAtual >= shift.period.start && horaAtual < shift.period.end) {
            periodo = shift;
        } else if (horaAtual >= 23 || horaAtual < 7) {
            periodo = shift;
        }
    });
    return periodo;
}

function identificarProximoPeriodoDeTrabalho(date, shifts) {
    var horaAtual = new Date(date).getHours();
    var shiftAtual = identificarPeriodoDeTrabalho(date, shifts);
    var periodo = null;
    shifts.forEach(function (shift, index){
        if (shift.period.start == shiftAtual.period.end) {
            periodo = shift;
        };
    });
    return periodo;
}

// Função para calcular a quantidade de horas restantes no turno atual
function calcularHorasRestantes() {
    var horaAtual = Date.now();
    var proximoTurno = identificarProximoPeriodoDeTrabalho(horaAtual, shifts);
    console.log("Próximo turno: " + proximoTurno.name + " se inicia às: " + proximoTurno.period.start)
    // Crie uma nova data com a mesma data que a atual, mas com a hora do início do próximo turno
    var horaInicioProximoTurno = new Date(horaAtual);
    
    if (proximoTurno.period.start > proximoTurno.period.end) {
        // Se for Night shift, adicione um dia à data
        horaInicioProximoTurno.setDate(horaInicioProximoTurno.getDate() + 1);
    }

    horaInicioProximoTurno.setHours(proximoTurno.period.start);

    // Calcule a diferença de tempo entre a hora atual e a hora de início do próximo turno
    var diferencaTempo = horaInicioProximoTurno - horaAtual;

    if (diferencaTempo <= 0) {
        // Próximo turno já começou, então não há horas restantes no turno atual
        return 0;
    } else {
        // Converta a diferença de tempo de milissegundos para horas
        var horasRestantes = diferencaTempo / (1000 * 60 * 60);
        return horasRestantes;
    }
}

// var horasRestantes = calcularHorasRestantes();
// console.log("Horas Restantes no Turno Atual:", horasRestantes);
console.log("Horário abs. do último job: " + getLastJobSavedEndTime());
console.log("Data do último job: " + new Date(getLastJobSavedEndTime()));

/*
Trying solve problem with classes.

Objects in memory:
1. shifts;
2. products;
3. incs;
*/

class Job {

    constructor (jobID, itemID, ptfeMaterial, startTime, qtyJobWires, qtyRacks) {
        this.jobID = jobID;
        this.itemID = itemID;
        this.ptfeMaterial = ptfeMaterial;
        this.startTime = startTime;
        this.qtyJobWires =qtyJobWires;
        this.qtyRacks = qtyRacks;
        this.startShift = Job.thisShift(this.startTime);
        this.endTimePrevision = this.startTime + this.stdTimeToFinish();
        this.endShift = Job.thisShift(this.endTimePrevision);
        this.isStarted = false;
        this.isFinished = false;
        this.finishedWires = 0; 
    }

    // Setters
    setStartTime (newStartTime){
        this.startTime = newStartTime;
        this.endTimePrevision = this.startTime + this.stdTimeToFinish();
        this.startShift = Job.thisShift(this.startTime);
        this.endShift = Job.thisShift(this.endTimePrevision);
    };

    // set ptfeMaterial (ptfeMaterial){
    //     this.ptfeMaterial = ptfeMaterial;
    // }

    setQtyRacks (qty){
        this.qtyRacks = qty;
    };

    setIsStarted (value){
        this.isStarted = value;
    };

    setIsFinished (value){
        this.isFinished = value;
    };

    setFinishedWires (qtyWires){
        this.finishedWires = qtyWires;
    };

    // Getters
    getStartTime(){
        return this.startTime;
    };

    getIsStarted(){
        return this.isStarted;
    };

    getIsFinished(){
        return this.isFinished;
    };

    getFinishedWires (){
        return this.finishedWires;
    };

    // get ptfeMaterial (){
    //     return this.ptfeMaterial;
    // }

    stdTimeToFinish(){
        return parseInt(((this.qtyJobWires / 40) / this.qtyRacks) * (60 * 60 * 1000));
    };

    static thisShift(date){
        var horaAtual = new Date(date).getHours();
        var periodo = null;
        shifts.find(function (shift){
            if (horaAtual >= shift.period.start && horaAtual < shift.period.end) {
                periodo = shift;
            } else if (horaAtual >= 23 || horaAtual < 7) {
                periodo = shift;
            }
        });
        return periodo;
    };

}

/* 
- We need load jobs from localStorage;
- When instantiate JobsScheduler, the start and end time and shifts should be setted according the order here defined;
- The scheduler should setting up the status for all jobs: if isStarted or isFinished;
- We need a method for get jobs scheduled for current shift;
- Every update in scheduler must be saved in the localStorage, since this is the way of storage for now;
-   
*/
class JobsScheduler {

    constructor (elementList){
        this.elementList = elementList;
        this.jobs = [];
        this.currentShift = this.thisShift(Date.now());
        this.jobParts = [];
        

        // Adiciona os eventos de arrastar e soltar
        // this.elementList.addEventListener("dragstart", this.handleDragStart.bind(this));
        // this.elementList.addEventListener("dragover", this.handleDragOver.bind(this));
        // this.elementList.addEventListener("drop", this.handleDrop.bind(this));

        //this.createJobPopup();
        this.createSchedulerButtons();
        //this.createJobForm();

        let sortable = new Sortable(this.elementList, {
            animation: 150,
            delayOnTouchOnly: false,
            touchStartThreshold: 0,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            preventOnFilter: true,
            dragClass: "sortable-drag",
            dataIdAttr: 'data-job-i-d',
            chosenClass: 'chosen',
            ghostClass: 'ghost',
            group: "localStorage-example",
            store: {
                /**
                 * Get the order of elements. Called once during initialization.
                 * @param   {Sortable}  sortable
                 * @returns {Array}
                 */
                get: function (sortable) {
                    var order = localStorage.getItem(sortable.options.group.name);
                    return order ? order.split('|') : [];
                },

                /**
                 * Save the order of elements. Called onEnd (when the item is dropped).
                 * @param {Sortable}  sortable
                 */
                set: function (sortable) {
                    var order = sortable.toArray();
                    localStorage.setItem(sortable.options.group.name, order.join('|'));
                }
            },
            // onEnd: (event) => {
            //     const draggedJobID = event.item.dataset.jobID;
            //     const dropJobID = event.from.dataset.jobID;
        
            //     const draggedJob = this.jobs.find(job => job.jobID === draggedJobID);
            //     const dropJob = this.jobs.find(job => job.jobID === dropJobID);
        
            //     const isAbove = event.newIndex < event.oldIndex;
        
            //     this.jobs.splice(this.jobs.indexOf(draggedJob), 1);
        
            //     const insertionIndex = this.jobs.indexOf(dropJob) + (isAbove ? 0 : 1);
            //     this.jobs.splice(insertionIndex, 0, draggedJob);
        
            //     console.log("Lista de jobs reordenada:", this.jobs);
            // }
        });
        this.ecContent = document.createElement('div');
        this.ec = new EventCalendar(this.ecContent, {
            view: 'timeGridDay',
            nowIndicator: true,
            slotDuration: '03:00:00',
            events: [

            ]
        });

        //sortable.save();
        this.sortable = sortable;
        this.sorted = this.sortable.toArray();
    };

    static createListElement (text, jobID){
        const div = document.createElement('div');
        div.textContent = text;
        div.dataset.jobID = jobID;
        div.className = 'list-group-item p-4 rounded transition-all m-2 border-solid border-1 border-sky-500'; 
        //div.classList.add('bg-gradient-to-r from-lime-500 to-lime-700'); 
        try {
            if (text.toLowerCase().includes('green')){
                //console.log(`Green: ${text.toLowerCase().includes('green')}`);
                div.style.backgroundColor = 'rgb(101 163 13)';
            } else if (text.toLowerCase().includes('black')){
                //console.log(`Black: ${text.toLowerCase().includes('black')}`);
                div.style.backgroundColor = 'rgb(22 22 22)';
                div.style.color = '#fff';
            } else if (text.toLowerCase().includes('blue')) {
                //console.log(`Blue: ${text.toLowerCase().includes('blue')}`);
                div.style.backgroundColor = 'rgb(45 45 145)';
            }
        } catch {
            div.style.backgroundColor = 'rgb(101 163 13)';
        };
        div.setAttribute("draggable", "true");
        return div;
    };

    update(){
        while(this.elementList.firstChild){
            this.elementList.removeChild(this.elementList.firstChild);
        }

        if (this.jobs.length > 0) {
            this.jobs.forEach((job, index) => {
                //console.log(`Job: ${JSON.stringify(job)}.`);
                const liText = `${index}. ${job.itemID} | ${job.jobID} | ${job.ptfeMaterial}`;
                const listItem = JobsScheduler.createListElement(liText, job.jobID);
                this.elementList.appendChild(listItem);
            });
        };

    };

    addJob(elementForm){
        //console.log(`Element Form: ${JSON.stringify(elementForm)}.`);
        if (elementForm){
            let itemID = elementForm.itemID;
            let ptfe = elementForm.ptfe;
            let jobID = elementForm.jobID;
            let qtyJobWires = elementForm.qtyJobWires;
            let qtyRacks = elementForm.qtyRacks;
            let coatedWires = elementForm.coatedWires;
            let testRack = elementForm.testRack;

            const job = new Job(jobID, itemID, ptfe, Date.now(), qtyJobWires, qtyRacks);

            let metaJob = {
                itemID: itemID,
                ptfe: ptfe,
                jobID: jobID,
                qtyJobWires: qtyJobWires,
                qtyRacks: qtyRacks,
                coatedWires: coatedWires,
                testRack: testRack
            };

            this.jobs.push(job);
            //var message = `metaJob ${JSON.stringify(metaJob)}`;
            console.log(`addJobs startTime: ${JSON.stringify(Date(job.startTime))}.`);
            this.update();
        }
    }

    thisShift(timestamp) {

        // Implementação da função thisShift
    }

    handleDragStart(event) {

        event.dataTransfer.setData("text/plain", event.target.dataset.jobID);
        console.log("drag start: " + event.target.dataset.jobID);
    }
    
    handleDragOver(event) {

        event.preventDefault();
    
        const draggedJobID = event.dataTransfer.getData("text/plain");
        console.log(`handleDragOver: ${draggedJobID}`);
        const dropJobID = event.target.dataset.jobID;
        // const draggedJobID = event.from.children[event.oldIndex].dataset.jobID;
        // const dropJobID = event.from.children[event.newIndex].dataset.jobID;
    
        const draggedJob = this.jobs.find(job => job.jobID === draggedJobID);
        const dropJob = this.jobs.find(job => job.jobID === dropJobID);
    
        const dropPosition = event.clientY;
        const targetPosition = event.target.getBoundingClientRect().top + (event.target.offsetHeight / 2);
    
        // Se o mouse estiver acima do centro do elemento alvo, adiciona a classe 'above'
        if (dropPosition < targetPosition) {
            event.target.classList.add('above');
        } else {
            event.target.classList.remove('above');
        }
    }

    handleDrop(event) {
        const draggedJobID = event.item.dataset.jobID;
        const dropJobID = event.from.dataset.jobID;
      
        const draggedJob = this.jobs.find(job => job.jobID === draggedJobID);
        const dropJob = this.jobs.find(job => job.jobID === dropJobID);
      
        const isAbove = event.newIndex < event.oldIndex;
      
        this.jobs.splice(this.jobs.indexOf(draggedJob), 1);
      
        const insertionIndex = this.jobs.indexOf(dropJob) + (isAbove ? 0 : 1);
        this.jobs.splice(insertionIndex, 0, draggedJob);
      
        this.update();
    };
    
    // handleDrop(event) {

    //     event.preventDefault();
    //     const draggedJobID = event.dataTransfer.getData("text/plain");
    //     const dropJobID = event.target.dataset.jobID;
    
    //     const draggedJob = this.jobs.find(job => job.jobID === draggedJobID);
    //     const dropJob = this.jobs.find(job => job.jobID === dropJobID);
    
    //     const dropPosition = event.target.getBoundingClientRect().top + (event.target.offsetHeight / 2);
    
    //     // Verifica se o item arrastado está acima do elemento alvo
    //     const isAbove = dropPosition > event.clientY;
    
    //     // Remove o item arrastado da lista original
    //     this.jobs.splice(this.jobs.indexOf(draggedJob), 1);
    
    //     // Insere o item na nova posição
    //     const insertionIndex = this.jobs.indexOf(dropJob) + (isAbove ? 0 : 1);
    //     this.jobs.splice(insertionIndex, 0, draggedJob);
    
    //     this.update();
    // }

    createJobPopup() {

        const popupContainer = document.createElement('div');
        popupContainer.id = 'jobPopup';
        popupContainer.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'z-50', 'hidden');

        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container', 'bg-white', 'w-11/12', 'md:max-w-md', 'mx-auto', 'rounded', 'shadow-lg', 'z-50', 'overflow-y-auto');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content', 'py-4', 'text-left', 'px-6');

        const modalContentHeader = document.createElement('div');
        modalContentHeader.classList.add('mt-6', 'text-gray-700');
        modalContentHeader.innerHTML = "<hr><h1 class='text-2xl strong'>Insert new Job</h1><p>Fill out all the fields in the form to schedule a new job.</p>"

        // const form = this.createJobForm();
        modalContent.appendChild(modalContentHeader);
        modalContent.appendChild(this.createJobForm());
        //this.criarOpcoesSelect();

        // form.querySelector('#itemID').addEventListener('click', () => {
        //     this.criarOpcoesSelect();
        // });
    
        // modalContent.appendChild(form);

        const closeButton = document.createElement('button');
        closeButton.id = 'closePopup';
        closeButton.classList.add('text-gray-700', 'text-right', 'float-right', 'm-4', 'text-2xl', 'font-semibold');
        closeButton.textContent = '×';

        modalContainer.appendChild(closeButton);
        modalContainer.appendChild(modalContent);
        popupContainer.appendChild(modalContainer);

        const popupOverlay = document.createElement('div');
        popupOverlay.id = 'popupOverlay';
        popupOverlay.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'z-40');
        popupOverlay.classList.remove('chosen');
        popupOverlay.appendChild(popupContainer);

        const mainContainer = document.getElementById('content');
        mainContainer.appendChild(popupOverlay);
        //this.elementList.appendChild(popupOverlay);

        // Adiciona evento para fechar o popup
        closeButton.addEventListener('click', () => {
            popupOverlay.classList.add('hidden');
        });
    }

    createPreviewPopup() {

        const popupContainer = document.createElement('div');
        popupContainer.id = 'previewPopup';
        popupContainer.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'z-50', 'hidden', 'overflow-y-auto');

        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container', 'bg-white', 'w-11/12', 'md:max-w-md', 'mx-auto', 'rounded', 'shadow-lg', 'z-40');
        //modalContainer.style.maxHeight = '80vh';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content', 'py-4', 'text-left', 'px-6');
        modalContent.style.maxHeight = '80vh';
        modalContent.style.overflowY = 'auto';

        const modalContentHeader = document.createElement('div');
        modalContentHeader.classList.add('mt-6', 'text-gray-700');
        modalContentHeader.innerHTML = "<hr><h1 class='text-2xl strong'>Preview schedulling...</h1><p>Preview only... for now.</p>"

        // const form = this.createJobForm();
        modalContent.appendChild(modalContentHeader);
        modalContent.appendChild(this.createEventCalendar());
        //this.criarOpcoesSelect();

        // form.querySelector('#itemID').addEventListener('click', () => {
        //     this.criarOpcoesSelect();
        // });
    
        // modalContent.appendChild(form);

        const closeButton = document.createElement('button');
        closeButton.id = 'closePreview';
        closeButton.classList.add('text-gray-700', 'text-right', 'float-right', 'm-4', 'text-2xl', 'font-semibold');
        closeButton.textContent = '×';

        modalContainer.appendChild(closeButton);
        modalContainer.appendChild(modalContent);
        popupContainer.appendChild(modalContainer);

        const popupOverlay = document.createElement('div');
        popupOverlay.id = 'popupOverlay';
        popupOverlay.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'z-40', 'overflow-y-auto');
        popupOverlay.classList.remove('chosen');
        popupOverlay.appendChild(popupContainer);

        const mainContainer = document.getElementById('content');
        const overlayComponent = document.getElementById('popupOverlay');
        if (overlayComponent){
            mainContainer.removeChild(overlayComponent);
        }
        
        mainContainer.appendChild(popupOverlay);
        //this.elementList.appendChild(popupOverlay);

        // Adiciona evento para fechar o popup
        closeButton.addEventListener('click', () => {
            popupOverlay.classList.add('hidden');
        });
    }

    createSchedulerButtons() {
        const schedulerButtonsContainer = document.createElement('div');
        schedulerButtonsContainer.classList.add('fixed', 'bottom-4', 'right-4');

        const addJobButton = document.createElement('button');
        addJobButton.id = 'addJobButton';
        addJobButton.title = 'Insert new Job';
        addJobButton.ariaLabel = 'Insert new Job button';
        addJobButton.type = 'button';
        addJobButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'm-4');
        addJobButton.textContent = 'Insert new Job';

        addJobButton.addEventListener('click', () => {
            const popupOverlay = document.getElementById('popupOverlay');
            const jobPopup = document.getElementById('jobPopup');
            //jobPopup.appendChild(this.createJobForm());
            if (popupOverlay != null){
                popupOverlay.classList.remove('hidden');
                jobPopup.classList.remove('hidden');
            } else {
                this.createJobPopup();
                const popupOverlay = document.getElementById('popupOverlay');
                const jobPopup = document.getElementById('jobPopup');
                //jobPopup.appendChild(this.createJobForm());
                popupOverlay.classList.remove('hidden');
                jobPopup.classList.remove('hidden');
            }
        });

        const previewSchedulerButton = document.createElement('button');
        previewSchedulerButton.id = 'previewSchedulerButton';
        previewSchedulerButton.title = "Preview";
        previewSchedulerButton.ariaLabel = "Preview Scheduler Button";
        previewSchedulerButton.type = "button";
        previewSchedulerButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'm-4');
        previewSchedulerButton.textContent = "Preview";

        previewSchedulerButton.addEventListener('click', () => {
            const popupOverlay = document.getElementById('popupOverlay');
            const previewPopup = document.getElementById('previewPopup');
            //jobPopup.appendChild(this.createJobForm());
            if (popupOverlay != null){
                popupOverlay.classList.remove('hidden');
                previewPopup.classList.remove('hidden');
            } else {
                this.createPreviewPopup();
                const popupOverlay = document.getElementById('popupOverlay');
                const previewPopup = document.getElementById('previewPopup');
                //jobPopup.appendChild(this.createJobForm());
                popupOverlay.classList.remove('hidden');
                previewPopup.classList.remove('hidden');
            }

            this.sorted = this.sortable.toArray();
            this.sorted.forEach((jobID, index) => {
                console.log(`jobID and index: ${jobID} | ${index}.`);
                let job = this.jobs.find(job => job.jobID === jobID);
                console.log(`Var Job inside eventListener: ${JSON.stringify(job)}`);
                if (index == 0) {
                    this.ec.addEvent({
                        id: `${index}-${job.itemID}-${job.jobID}-${job.ptfeMaterial}`,
                        title: `${index}. ${job.itemID} | ${job.jobID} | ${job.ptfeMaterial}`,
                        start: new Date(job.startTime),
                        end: new Date(job.endTimePrevision),
                        backgroundColor: job.ptfeMaterial.toLowerCase().includes('green') ? 'rgb(101 163 13)' : job.ptfeMaterial.toLowerCase().includes('black') ? 'rgb(22 22 22)' : job.ptfeMaterial.toLowerCase().includes('blue') ? 'rgb(45 45 145)' : none,
                    });
                } else {
                    const _events = this.ec.getEvents();
                    console.log(`ec.events: ${JSON.stringify(this.ec.getEvents())}.`);
                    job.setStartTime(_events[index -1].end);
                    this.ec.addEvent({
                        id: `${index}-${job.itemID}-${job.jobID}-${job.ptfeMaterial}`,
                        title: `${index}. ${job.itemID} | ${job.jobID} | ${job.ptfeMaterial}`,
                        start: new Date(job.startTime),
                        end: new Date(job.startTime + job.stdTimeToFinish()),
                        backgroundColor: job.ptfeMaterial.toLowerCase().includes('green') ? 'rgb(101 163 13)' : job.ptfeMaterial.toLowerCase().includes('black') ? 'rgb(22 22 22)' : job.ptfeMaterial.toLowerCase().includes('blue') ? 'rgb(45 45 145)' : none,
                    });
                }
            }) 
            console.log(`this.sorted: ${this.sorted}`);
        });

        schedulerButtonsContainer.appendChild(addJobButton);
        schedulerButtonsContainer.appendChild(previewSchedulerButton);
        document.querySelector('.scheduler').appendChild(schedulerButtonsContainer);
    };

    createEventCalendar(){
        const ecContainer = document.createElement('div');
        ecContainer.id = 'ecContainer';

        // const ecContent = document.createElement('div');
        // ecContent.id = 'ecContent';
        // let ec = new EventCalendar(ecContent, {
        //     view: 'timeGridDay',
        //     nowIndicator: true,
        //     slotDuration: '03:00:00',
        //     events: [

        //     ]
        // })
        ecContainer.appendChild(this.ecContent);
        this.generateEvents(this.ec);
        return ecContainer;
    };

    generateEvents(obj){
        let events = [];
        //this.sorted = this.sortable.toArray();
        console.log(`this.sorted in generateEvents(): ${JSON.stringify(this.sortable.toArray())}`);
        this.jobs.forEach((job) => {
            console.log(`Job in generateEvents() forEach(): ${JSON.stringify(job)}`);
        });
    }

    createJobForm() {

        const formContainer = document.createElement('div');
        formContainer.id = 'formulario';
        formContainer.classList.add('grid', 'grid-cols-2', 'gap-4', 'mt-10', 'mb-4');

        const selectItemID = document.createElement('select');
        selectItemID.id = 'itemID';
        selectItemID.name = 'itemID';

        // Adicionando opção padrão
        const defaultOption = document.createElement('option');
        defaultOption.value = ''; // Define o valor vazio
        defaultOption.disabled = true; // Desabilita a opção
        defaultOption.selected = true; // Define como selecionada por padrão
        defaultOption.textContent = 'Select itemID'; // Adiciona o texto

        selectItemID.appendChild(defaultOption);

        selectItemID.addEventListener('click', () => {
            this.criarOpcoesSelectItemID();
        });
        
        const selectPTFEMaterial = document.createElement('select');
        selectPTFEMaterial.id = 'ptfe';
        selectPTFEMaterial.name = 'ptfe';

        const defaultOptionPTFE = document.createElement('option');
        defaultOptionPTFE.value = ''; // Define o valor vazio
        defaultOptionPTFE.disabled = true; // Desabilita a opção
        defaultOptionPTFE.selected = true; // Define como selecionada por padrão
        defaultOptionPTFE.textContent = 'Select PTFE'; // Adiciona o texto

        selectPTFEMaterial.appendChild(defaultOptionPTFE);

        selectPTFEMaterial.addEventListener('click', () => {
            this.criarOpcoesSelectPTFE();
        });

        const inputJobID = document.createElement('input');
        inputJobID.type = 'text';
        inputJobID.id = 'jobID';
        inputJobID.placeholder = 'JobID';

        const inputqtyJobWires = document.createElement('input');
        inputqtyJobWires.type = 'text';
        inputqtyJobWires.id = 'qtyJobWires';
        inputqtyJobWires.placeholder = 'Qty. wires';

        const inputqtyRacks = document.createElement('input');
        inputqtyRacks.type = 'numbers';
        inputqtyRacks.id = 'qtyRacks';
        inputqtyRacks.placeholder = 'Qty. racks';

        const inputFinishedRacks = document.createElement('input');
        inputFinishedRacks.type = 'numbers';
        inputFinishedRacks.id = 'coatedWires';
        inputFinishedRacks.placeholder = 'Qty. coated wires';

        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('flex', 'justify-start', 'space-x-4');
        checkboxDiv.id = 'testRackDiv';

        const checkTestRack = document.createElement('input');
        checkTestRack.type = 'checkbox';
        checkTestRack.id = 'testRack';
        
        const labelTestRack = document.createElement('label');
        labelTestRack.setAttribute('for', 'testRack');
        labelTestRack.textContent = 'Test Rack';

        checkboxDiv.appendChild(labelTestRack);
        checkboxDiv.appendChild(checkTestRack);

        // Adicione os outros elementos de input aqui (qtyJobWires, quantidadeRacks, racksPintados, checkbox)

        const submitButton = document.createElement('button');
        submitButton.id = 'submitButton';
        submitButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'mb-6');
        submitButton.textContent = 'Add';

        submitButton.addEventListener('click', () => {
            var formData = {
                itemID: document.getElementById('itemID').value,
                ptfe: document.getElementById('ptfe').value,
                jobID: document.getElementById('jobID').value,
                qtyJobWires: parseInt(document.getElementById('qtyJobWires').value),
                qtyRacks: parseInt(document.getElementById('qtyRacks').value),
                coatedWires: parseInt(document.getElementById('coatedWires').value),
                testRack: document.getElementById('testRack').checked,
                horarioInclusao: parseInt(Date.now()),
                program: null
            };

            console.log(`New Job view: ${formData}`);
            this.addJob(formData);
            this.update();
            listaDeFormularios.push(formData);
            salvarDadosArmazenados();
        })

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'mb-6', 'ml-2');
        cancelButton.textContent = 'Cancel';

        cancelButton.addEventListener('click', () => {
            const popupOverlay = document.getElementById('popupOverlay');
            popupOverlay.classList.add('hidden');
        });

        formContainer.appendChild(selectItemID);
        formContainer.appendChild(selectPTFEMaterial);
        formContainer.appendChild(inputJobID);
        // Adicione os outros elementos aqui
        formContainer.appendChild(inputqtyJobWires);
        formContainer.appendChild(inputqtyRacks);
        formContainer.appendChild(inputFinishedRacks);
        formContainer.appendChild(checkboxDiv);
        formContainer.appendChild(document.createElement('div'));
        
        formContainer.appendChild(submitButton);
        formContainer.appendChild(cancelButton);

        //document.body.appendChild(formContainer);
        return formContainer;
    };

    criarOpcoesSelectItemID() {

        var select = document.getElementById('itemID');

        function optionExists(value) {
            return Array.from(select.options).some(option => option.value === value);
        };

        console.log(select);
        products.forEach(function(product) {

            var optionValue = product.name + " (" + product.item +")";
            if (!optionExists(optionValue)) {
                var option = document.createElement('option');
                option.value = product.name + " (" + product.item +")";
                option.textContent = product.name + " (" + product.item +")";
                select.appendChild(option);
            };
        });
    }

    criarOpcoesSelectPTFE() {

        var select = document.getElementById('ptfe');

        function optionExists(value) {
            return Array.from(select.options).some(option => option.value === value);
        };

        console.log(select);
        incs.forEach(function(item) {

            var optionValue = item.itemDescription;
            
            if (!optionExists(optionValue)) {
                var option = document.createElement('option');
                option.value = item.itemDescription;
                option.textContent = item.itemDescription;
                select.appendChild(option);
            };
        });
    }
};