export default function() {

  this.namespace = '/api';
  this.get('/animals', function() {
    return {
      data: [{
        type: 'animal',
        id: 'ani001',
        attributes: {
          name: 'lucas',
          city: 'Medellín',
          type: 'Perro',
          image: 'http://static.batanga.com/sites/default/files/styles/large/public/curiosidades.batanga.com/files/Por-qu%C3%A9-los-perros-mueven-la-cola.jpg?itok=I1MKTTQi'
        }
      }, {
        type: 'animal',
        id: 'ani002',
        attributes: {
          name: 'lola',
          city: 'Bogotá',
          type: 'Loro',
          image: 'http://t2.uccdn.com/images/3/3/6/img_como_saber_si_mi_loro_es_macho_o_hembra_23633_orig.jpg'
        }
      }, {
        type: 'animal',
        id: 'ani003',
        attributes: {
          name: 'milú',
          city: 'Valle',
          type: 'Gato',
          image: 'http://www.fondox.net/wallpapers/un-gato-bebe-433.jpg'
        }
      }]
    };
  });

  // Find and return the provided spy from our spy list above
  this.get('/animals/:id', function (db, request) {
    return { data: animals.find((animals) => request.params.id === animals.id) };
  });
}
