var display = document.getElementById('window-input');
		var check = 0;
		function GoToDisplay(value) {
			document.getElementById('window-input').value += value;
		}

		function Clear() {
			document.getElementById('window-input').value = '';
		}
		function Calculator() {
			try {
				document.getElementById('window-input').value = eval(
					document.getElementById('window-input').value)
			} catch (error) {
				document.getElementById('window-input').value = 'ERROR'
			}
		}
		function procent(value) {
				document.getElementById('window-input').value /= 100;
		}
