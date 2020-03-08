$(document).ready(function () {

  //Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });

  //Posts
  var posts = [
    {
      titulo: 'Prueba de titulo 1',
      date: 'Fecha publicacion: '+moment().format('MMMM Do YYYY'),
      contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio
          ratione adipisci modi nisi placeat suscipit quo! Quibusdam optio nobis
          consequuntur obcaecati fugit magni ducimus veritatis laudantium, laboriosam
          sapiente exercitationem`
    },
    {
      titulo: 'Prueba de titulo 2',
      date: 'Fecha publicacion: '+moment().format('MMMM Do YYYY'),
      contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio
          ratione adipisci modi nisi placeat suscipit quo! Quibusdam optio nobis
          consequuntur obcaecati fugit magni ducimus veritatis laudantium, laboriosam
          sapiente exercitationem`
    },
    {
      titulo: 'Prueba de titulo 3',
      date: 'Fecha publicacion: '+moment().format('MMMM Do YYYY'),
      contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio
          ratione adipisci modi nisi placeat suscipit quo! Quibusdam optio nobis
          consequuntur obcaecati fugit magni ducimus veritatis laudantium, laboriosam
          sapiente exercitationem`
    },
    {
      titulo: 'Prueba de titulo 4',
      date: 'Fecha publicacion: '+moment().format('MMMM Do YYYY'),
      contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio
          ratione adipisci modi nisi placeat suscipit quo! Quibusdam optio nobis
          consequuntur obcaecati fugit magni ducimus veritatis laudantium, laboriosam
          sapiente exercitationem`
    },
    {
      titulo: 'Prueba de titulo 5',
      date: 'Fecha publicacion: '+moment().format('MMMM Do YYYY'),
      contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio
          ratione adipisci modi nisi placeat suscipit quo! Quibusdam optio nobis
          consequuntur obcaecati fugit magni ducimus veritatis laudantium, laboriosam
          sapiente exercitationem`
    },
    {
      titulo: 'Prueba de titulo 6',
      date: 'Fecha publicacion: '+moment().format('MMMM Do YYYY'),
      contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis odio
          ratione adipisci modi nisi placeat suscipit quo! Quibusdam optio nobis
          consequuntur obcaecati fugit magni ducimus veritatis laudantium, laboriosam
          sapiente exercitationem`
    }
  ];

  posts.forEach((item, index) => {
    var post = `
    <article class="post">
      <h2>${item.titulo}</h2>
      <span class="date">${item.date}</span>
      <p>
      ${item.contenido}
      </p>
      <a href="" class="button-more">Leer más</a>
    </article>
    `;
    $('#posts').append(post);
  });

});
