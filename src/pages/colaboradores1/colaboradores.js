// URL DA API DE DADOS
URL = 'http://localhost:3000/produtos'
//=================================================================================================
// GET - Recupera todos os produtos e adiciona na tabela

const produtoList = document.getElementById('produto-list');

fetch(URL)
    .then(res => res.json())
    .then(produtos => {
        let lista_produtos = '';
        for (let i = 0; i < produtos.length; i++) {
            // vlt_total = produtos[i].qtd * produtos[i].vlr;
            lista_produtos += `
            <tr>
                <th>${produtos[i].id}</th>
                <td>${produtos[i].nomeCompleto}</td>
                <td>${produtos[i].uen}</td>
                <td>${produtos[i].cargo}</td>
                <td>${produtos[i].email}</td>
                <td>${produtos[i].telefone}</td>
                <td>
                    <a onclick="getProduto(${produtos[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i> Editar
                    </a>

                    <a onclick="$('#id-prod').text(${produtos[i].id});" 
                    class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `;
            produtoList.innerHTML = lista_produtos;
        }
    });
//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM PRODUTO
const produtoDelete = document.getElementById('btn-delete');

produtoDelete.addEventListener('click', (e) => {

    let id = $('#id-prod').text();

    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => location.reload());

})
//=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM PRODUTO NA API
function getProduto(id) {

    if (id == 0) {
        $('#edit-prod-id').text("");
        $("#produto-id").prop("disabled", false);
        $('#produto-id').val("");
        $('#produto-nomeCompleto').val("");
        $('#produto-uen').val("");
        $('#produto-cargo').val("");
        $('#produto-email').val("");
        $('#produto-telefone').val("");
    } else {
        $('#edit-prod-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())
            .then(data => {
                $("#produto-id").prop("disabled", true);
                $('#produto-id').val(data.id);
                $('#produto-nomeCompleto').val(data.nomeCompleto);
                $('#produto-uen').val(data.uen);
                $('#produto-cargo').val(data.cargo);
                $('#produto-email').val(data.email);
                $('#produto-telefone').val(data.telefone)
            });
    }
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM PRODUTO

const produtoForm = document.getElementById('produto-form');

produtoForm.addEventListener('submit', (e) => {

    // RECUPERA O ID DO PRODUTO
    let id = parseInt($('#edit-prod-id').text());

    // RECUPERA OS DADOS DO PRODUTO
    const produto = JSON.stringify({
        id: document.getElementById('produto-id').value,
        nomeCompleto: document.getElementById('produto-nomeCompleto').value,
        uen: document.getElementById('produto-uen').value,
        cargo: document.getElementById('produto-cargo').value,
        email: document.getElementById('produto-email').value,
        telefone: document.getElementById('produto-telefone').value
    })

    if (id >= 0) {
        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: produto
        })
            .then(res => res.json())
            .then(() => location.reload());
    }
    else {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: produto
        })
            .then(res => res.json())
            .then(() => location.reload());
    }
})
//=================================================================================================