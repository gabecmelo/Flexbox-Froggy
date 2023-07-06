window.onload = () => {
	const textArea = document.querySelector('#textArea');
	const button = document.querySelector('#finalize');

	const dica = document.querySelectorAll('.help');

	const justifyContent = document.querySelector('#justify-content');
	const alignItems = document.querySelector('#align-items');
	const flexDirection = document.querySelector('#flex-direction');

		const verifyCss = () => {
			const pond = document.querySelector('#pond');
			const justifyContent = pond.style.justifyContent === 'center';
			const flexFlow = pond.style.flexFlow === 'column-reverse wrap-reverse';
			const flexDirection = pond.style.flexDirection === 'column-reverse';
			const flexWrap = pond.style.flexWrap === 'wrap-reverse';
			const alignContent = pond.style.alignContent === 'space-between';
			const button = document.querySelector('#finalize');

			if (justifyContent && flexFlow && alignContent || justifyContent && flexDirection && flexWrap && alignContent) {
				button.style.opacity = '1.0';
				button.setAttribute = 'enabled';
				return true;
			}
			button.style.opacity = '0.5';
			return false;
		};

		textArea.addEventListener('keyup', () => {
			const pond = document.querySelector('#pond');
			const textAreaValue = textArea.value;
			pond.style.cssText = textAreaValue;
			verifyCss();
		});


		button.addEventListener('click', () => {
			if (verifyCss()) alert('pode terminar');
		});

	const textosDicas = [justifyContent, alignItems, flexDirection];
	let dicaAtualmenteExibida = null;

	dica.forEach((elementDica) => elementDica.addEventListener('click', (event) => {
		const dicaEncontrada = textosDicas.find((dica) => elementDica.textContent === dica.id);
		if (dicaAtualmenteExibida) {
			dicaAtualmenteExibida.style.display = 'none';
		}
    
		dicaEncontrada.style.display = 'flex';
		dicaAtualmenteExibida = dicaEncontrada;
		document.addEventListener('click', fecharDica);
		event.stopPropagation();
	}));

	const fecharDica = (event) => {
		const cliqueDentroDasDicas = textosDicas.some((dica) => dica.contains(event.target));
		if (!cliqueDentroDasDicas) {
			textosDicas.forEach((dica) => {
				dica.style.display = 'none';
			});
			dicaAtualmenteExibida = null;
		}
	};
};