import './Sidebar.css';

const topicos = [
  {
    id: 1,
    grupo: 'Dev e Café',
    descricao: '1.2k membros',
    emoji: '☕💻',
  },
  {
    id: 2,
    grupo: 'Mestres Cervejeiros',
    descricao: '894 membros',
    emoji: '🍺',
  },
  {
    id: 3,
    grupo: 'Bebidas em Tendência',
    descricao: '3.4k membros',
    emoji: '📈🥤',
  },
  {
    id: 4,
    grupo: 'Grãos Especiais',
    descricao: '567 membros',
    emoji: '🫘',
  },
  {
    id: 5,
    grupo: 'Cerveja Artesanal BR',
    descricao: '2.1k membros',
    emoji: '🍻',
  },
  {
    id: 6,
    grupo: 'Café com Código',
    descricao: '741 membros',
    emoji: '☕🖥️',
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-sugestoes-header">
        <span className="sidebar-sugestoes-titulo">Tópicos de interesse</span>
        <button className="sidebar-ver-tudo">Ver tudo</button>
      </div>

      {topicos.map((t) => (
        <div className="sidebar-sugestao" key={t.id}>
          <div className="sidebar-topico-icone">{t.emoji}</div>
          <div className="sidebar-sugestao-info">
            <p className="sidebar-sugestao-usuario">{t.grupo}</p>
            <p className="sidebar-sugestao-sub">{t.descricao}</p>
          </div>
          <button className="sidebar-seguir">Entrar</button>
        </div>
      ))}

    </aside>
  );
}

export default Sidebar;
