document.querySelector("#formulrio").addEventListener('submit', (e) => {
    e.preventDefault()
        console.log('Nome:', e.target.nome.value)
        console.log('Endereço:', e.target.endereco.value)
        console.log('Cidade:', e.target.cidade.value)
        console.log('Estado:', e.target.estado.value)
        console.log(document.querySelector('input[name="natureza"]:checked').value)
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const area = []
        if (checkboxes.length === 0) {
        alert('Selecione pelo menos um checkbox.');
        }
        checkboxes.forEach(c =>{
            if(c.checked){
                area.push(c.value)
            }
        })
        console.log('Área de interesse: '+ area);
        console.log(e.target.text.value)
    });