import Navbar from './components/navbar/Navbar';
import Post from './components/posts/Post'; 
import Sidebar from './components/sidebar/Sidebar';

import avatarum from './assets/fotoperfil/avatarum.jpg';
import avatardois from './assets/fotoperfil/avatardois.jpg';
import avatartres from './assets/fotoperfil/avatartres.jpg';

import post1 from './assets/imgpost/post1.jpg'; 
import post2 from './assets/imgpost/post2.webp';
import post3 from './assets/imgpost/post3.jpg';

const posts = [
  {
    id: 1,
    usuario: 'Alfred Peet',
    localizacao: 'Alkmaar, Países Baixos',
    avatar: avatarum,
    imagem: post1,
    curtidas: 1423,
    legenda: 'Escrito na história do cafezinho! ☕ #coffee #barista',
    comentarios: 89,
  },
  {
    id: 2,
    usuario: 'Erna Knutsen',
    localizacao: 'Noruega',
    avatar: avatardois,
    imagem: post2,
    curtidas: 987,
    legenda: 'A mulher que transformou a indústria do café! 🌍 #coffee #sustainability',
    comentarios: 42,
  },
  {
    id: 3,
    usuario: 'Sasa Sestic',
    localizacao: 'Sérvia',
    avatar: avatartres,
    imagem: post3,
    curtidas: 312,
    legenda: 'Campeonato Mundial de Baristas de 2015! 🏆 #champion',
    comentarios: 27,
  },
];

function App() {
  return (
    <div>
      <Navbar usuario="bb_silva" />
      <div className="layout">
        <div className="feed">
          {posts.map((post) => (
            <Post
              key={post.id}
              usuario={post.usuario}
              localizacao={post.localizacao}
              avatar={post.avatar}
              imagem={post.imagem}
              curtidas={post.curtidas}
              legenda={post.legenda}
              comentarios={post.comentarios}
            />
          ))}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;