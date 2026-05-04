import './Post.css';

function Post({ usuario, localizacao, avatar, imagem, curtidas, legenda, comentarios }) {
  return (
    <div className="post">  

      <div className="post-header">
        <img className="post-avatar" src={avatar} alt={usuario} />
        <div className="post-header-info">
          <p className="post-usuario">{usuario}</p>
          <p className="post-localizacao">{localizacao}</p>
        </div>
        <span className="post-mais">···</span>
      </div>

      <img className="post-imagem" src={imagem} alt="post" />

      <div className="post-acoes">
        <div className="post-acoes-esquerda">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
      </div>

      <div className="post-info">
        <p className="post-curtidas">{curtidas.toLocaleString('pt-BR')} curtidas</p>
        <p className="post-legenda"><strong>{usuario}</strong> {legenda}</p>
        <p className="post-comentarios">Ver todos os {comentarios} comentários</p>
        <input className="post-comentar" type="text" placeholder="Adicione um comentário..." />
      </div>

    </div>
  );
}

export default Post;