document.addEventListener('DOMContentLoaded', function() {
        function criptografar() {

                let texto = document.getElementById('campo__texto').value;
                let textoCodificado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
                document.getElementById('texto__codificado').innerText = textoCodificado;
        
                // Esconde o conteúdo original na div area__apresentacao
                document.querySelector('.area__apresentacao h1').style.display = 'none';
                document.querySelector('.area__apresentacao p').style.display = 'none';
                document.querySelector('.img__apresentacao').style.display = 'none';
            
                // Mostra a nova mensagem
                document.getElementById('nova__mensagem').style.display = 'block';
        }

        async function copiarTexto() {
                // Pegando o texto do parágrafo
                let textoParaCopiar = document.getElementById('texto__codificado').innerText;
        
                try {
                    // Usando a API Clipboard para copiar o texto
                    await navigator.clipboard.writeText(textoParaCopiar);
                    // Informando ao usuário que o texto foi copiado
                    alert('Texto copiado para a área de transferência!');
                } catch (err) {
                    console.error('Erro ao copiar o texto: ', err);
                    alert('Falha ao copiar o texto.');
                }
            }

            document.getElementById('btn__codificar').addEventListener('click', criptografar);
            document.getElementById('btn__copiar').addEventListener('click', copiarTexto);
})

document.addEventListener('DOMContentLoaded', function() {
        function descriptografar() {

                let texto = document.getElementById('campo__texto').value;
                let textoCodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
                document.getElementById('texto__codificado').innerText = textoCodificado;
        
                // Esconde o conteúdo original na div area__apresentacao
                document.querySelector('.area__apresentacao h1').style.display = 'none';
                document.querySelector('.area__apresentacao p').style.display = 'none';
                document.querySelector('.img__apresentacao').style.display = 'none';
            
                // Mostra a nova mensagem
                document.getElementById('nova__mensagem').style.display = 'block';
        }
        document.getElementById('btn__decodificar').addEventListener('click', descriptografar);
})

