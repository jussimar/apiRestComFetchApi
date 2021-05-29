window.onload = function(){
  const cadastrar = document.querySelector("#cadastrar");

  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");

  const deletar = document.querySelector("#deletar");

  const alterar = document.querySelector("#alterar");
  //ação de cadastro post
  cadastrar.addEventListener("click", function(){
    let formData = new FormData();
    formData.append('nome', `${nome.value}`);
    formData.append('curso', `${curso.value}`);

    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",
        {
            body: formData,
            method: "post",
            mode: 'cors',
            cache: 'default'
        }).then(alert("Cadastrado"));
  });
  //método para listar pessoas
  buscar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,
    {
      method:'GET',
      mode: 'cors',
      cache: 'default'
    })
      .then(response => {response.json()
        .then(data => {
          document.querySelector("#nome").value = data['nome'];
          document.querySelector("#curso").value = data['curso'];
        })
      });
  });

  //criando método para deletar
  deletar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,
    {
      method:'DELETE',
      mode: 'cors',
      cache: 'default'
    }
    ).then(alert("Registro Apagado"));

  });

  //métodos para atualizar o registro
  alterar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,
    {
      method:'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
      body: JSON.stringify({
        'nome':`${nome.value}`,
        'curso':`${curso.value}`,
      }),
      mode: 'cors',
      cache: 'default'
    }
    ).then(alert("Registro alterado"));

  });
}
