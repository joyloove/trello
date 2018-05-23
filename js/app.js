var box = document.getElementById('container');
var tarea = document.getElementById('span');

window.onload = function() {
  add();
};

function add() {

  // función que crea un input y le botón
  tarea.addEventListener('click', function() {
    var btn = document.createElement('button');
    var icon = document.createElement('i');
    var div = document.createElement('div');
    var textArea = document.createElement('textarea');

    btn.textContent = 'Guardar';
    icon.setAttribute('class', 'fa fa-times');
    div.appendChild(textArea);
    div.appendChild(btn);
    div.appendChild(icon);

    // btn.classList.add('button');
    btn.setAttribute('class', 'button');
    div.setAttribute('class', 'style-box');
    textArea.setAttribute('class', 'textarea-size');
    textArea.setAttribute('cols', "25");
    textArea.setAttribute('rows', "5");
    icon.setAttribute('id', 'icon-style');

    box.appendChild(div);
    box.removeChild(tarea);

    // función que crea un div con el contenido del input mas un div con el contenido 'Añadir tarea'
    btn.addEventListener('click', function() {
      var div2 = document.createElement('div');
      var tarea2 = document.createElement('div');
      var text = document.createElement('p');
      var tareaText = document.createElement('span');

      div2.classList.add('left');
      text.textContent = textArea.value;
      textArea.value = '';
      div2.appendChild(text);
      tareaText.textContent = 'Añadir tarea';
      tarea2.appendChild(tareaText);
      div2.appendChild(tarea2);
      box.insertBefore(div2, div);

      div2.setAttribute('class', 'style-box');
      tarea2.setAttribute('class', 'shadow');
      text.setAttribute('class', 'bolt');

      // función al hacer clíck en Añadir tarea se crea un input y un botón
      tareaText.addEventListener('click', function() {
        var textArea2 = document.createElement('textarea');
        var span2 = document.createElement('i');
        var button2 = document.createElement('button');

        span2.setAttribute('class', 'fa fa-times');
        span2.setAttribute('id', 'icon-style');
        button2.textContent = 'Añadir';

        button2.classList.add('button');

        tarea2.appendChild(textArea2);
        tarea2.appendChild(button2);
        tarea2.appendChild(span2);
        tarea2.removeChild(tareaText);

        textArea2.setAttribute('cols', "25");
        textArea2.setAttribute('rows', "2");
        textArea2.setAttribute('class', 'textarea-size');
        tarea2.setAttribute('class', 'style-tarea2');

        // función crea un párrafo con el contenido del segundo input
        button2.addEventListener('click', function() {

          var parr = document.createElement('p');
          parr.textContent = textArea2.value;
          textArea2.value = ' ';
          box.appendChild(parr);
          parr.setAttribute('class', 'style-parr');
          div2.insertBefore(parr, tarea2);
        });
      });
    });
  });
}
