function validar() {
	let nome = frmContato.nome.value
	let phone = frmContato.phone.value
	if (nome === "") {
		alert('Preencha o campo Nome')
		frmContato.nome.focus()
		return false
	} else if (phone === "") {
		alert('Preencha o campo Fone')
		frmContato.phone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}