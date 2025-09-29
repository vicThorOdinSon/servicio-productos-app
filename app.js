require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

// Datos simulados de productos
let productos = [
  {
    id: 1,
    nombre: 'Marvel’s Spider-Man 2',
    descripcion: 'Secuela del exitoso juego de acción y aventura en mundo abierto.',
    marca: 'PlayStation Studios',
    precio: 69.99,
    imagen: 'https://example.com/spiderman2.jpg'
  },
  {
    id: 2,
    nombre: 'God of War Ragnarök',
    descripcion: 'Kratos y Atreus enfrentan el fin de los tiempos en la mitología nórdica.',
    marca: 'Santa Monica Studio',
    precio: 69.99,
    imagen: 'https://example.com/gowragnarok.jpg'
  },
  {
    id: 3,
    nombre: 'Horizon Forbidden West',
    descripcion: 'Acompaña a Aloy en una nueva aventura en un mundo postapocalíptico.',
    marca: 'Guerrilla Games',
    precio: 59.99,
    imagen: 'https://example.com/horizonfw.jpg'
  },
  {
    id: 4,
    nombre: 'Demon’s Souls',
    descripcion: 'Remake del clásico RPG de acción desafiante.',
    marca: 'Bluepoint Games',
    precio: 59.99,
    imagen: 'https://example.com/demonsouls.jpg'
  },
  {
    id: 5,
    nombre: 'Ratchet & Clank: Rift Apart',
    descripcion: 'Aventura interdimensional con acción y plataformas.',
    marca: 'Insomniac Games',
    precio: 59.99,
    imagen: 'https://example.com/ratchetclank.jpg'
  },
  {
    id: 6,
    nombre: 'Final Fantasy XVI',
    descripcion: 'Nueva entrega de la legendaria saga de rol.',
    marca: 'Square Enix',
    precio: 69.99,
    imagen: 'https://example.com/ffxvi.jpg'
  },
  {
    id: 7,
    nombre: 'Resident Evil Village',
    descripcion: 'Terror y supervivencia en la octava entrega de la saga.',
    marca: 'Capcom',
    precio: 49.99,
    imagen: 'https://example.com/revillage.jpg'
  },
  {
    id: 8,
    nombre: 'Returnal',
    descripcion: 'Shooter roguelike de ciencia ficción y acción.',
    marca: 'Housemarque',
    precio: 59.99,
    imagen: 'https://example.com/returnal.jpg'
  },
  {
    id: 9,
    nombre: 'Gran Turismo 7',
    descripcion: 'Simulador de carreras realista con cientos de autos.',
    marca: 'Polyphony Digital',
    precio: 69.99,
    imagen: 'https://example.com/gt7.jpg'
  },
  {
    id: 10,
    nombre: 'Sackboy: A Big Adventure',
    descripcion: 'Plataformas 3D familiar y divertido.',
    marca: 'Sumo Digital',
    precio: 49.99,
    imagen: 'https://example.com/sackboy.jpg'
  },
  {
    id: 11,
    nombre: 'The Last of Us Part I',
    descripcion: 'Remake del aclamado juego de acción y supervivencia.',
    marca: 'Naughty Dog',
    precio: 69.99,
    imagen: 'https://example.com/tlou1.jpg'
  },
  {
    id: 12,
    nombre: 'Forspoken',
    descripcion: 'Aventura de acción y magia en un mundo abierto.',
    marca: 'Luminous Productions',
    precio: 59.99,
    imagen: 'https://example.com/forspoken.jpg'
  },
  {
    id: 13,
    nombre: 'Deathloop',
    descripcion: 'Shooter en bucle temporal con mecánicas innovadoras.',
    marca: 'Arkane Studios',
    precio: 49.99,
    imagen: 'https://example.com/deathloop.jpg'
  },
  {
    id: 14,
    nombre: 'Kena: Bridge of Spirits',
    descripcion: 'Aventura mágica con bellos gráficos y combate dinámico.',
    marca: 'Ember Lab',
    precio: 39.99,
    imagen: 'https://example.com/kena.jpg'
  },
  {
    id: 15,
    nombre: 'Ghostwire: Tokyo',
    descripcion: 'Acción sobrenatural en una Tokio misteriosa.',
    marca: 'Tango Gameworks',
    precio: 59.99,
    imagen: 'https://example.com/ghostwire.jpg'
  },
  {
    id: 16,
    nombre: 'Call of Duty: Modern Warfare II',
    descripcion: 'Shooter bélico de la famosa franquicia.',
    marca: 'Infinity Ward',
    precio: 69.99,
    imagen: 'https://example.com/codmw2.jpg'
  },
  {
    id: 17,
    nombre: 'FIFA 24',
    descripcion: 'Simulador de fútbol con licencias oficiales.',
    marca: 'EA Sports',
    precio: 59.99,
    imagen: 'https://example.com/fifa24.jpg'
  },
  {
    id: 18,
    nombre: 'NBA 2K25',
    descripcion: 'Simulador de baloncesto con gráficos realistas.',
    marca: '2K Sports',
    precio: 59.99,
    imagen: 'https://example.com/nba2k25.jpg'
  },
  {
    id: 19,
    nombre: 'Assassin’s Creed Mirage',
    descripcion: 'Nueva entrega de la saga de acción y sigilo.',
    marca: 'Ubisoft',
    precio: 69.99,
    imagen: 'https://example.com/acmirage.jpg'
  },
  {
    id: 20,
    nombre: 'Alan Wake 2',
    descripcion: 'Secuela de terror psicológico y misterio.',
    marca: 'Remedy Entertainment',
    precio: 59.99,
    imagen: 'https://example.com/alanwake2.jpg'
  }
];

// Obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
});

// Crear un nuevo producto
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  const nuevoProducto = {
    id: productos.length ? productos[productos.length - 1].id + 1 : 1,
    nombre,
    precio
  };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// Actualizar un producto existente
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, precio } = req.body;
  const producto = productos.find(p => p.id === id);
  if (producto) {
    producto.nombre = nombre;
    producto.precio = precio;
    res.json(producto);
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
});

// Eliminar un producto
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
    res.json({ mensaje: 'Producto eliminado' });
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});