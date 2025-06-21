export default function Admin() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Painel de Anúncios</h2>
      <input type="text" placeholder="Título do anúncio" />
      <input type="url" placeholder="Link do anúncio" />
      <button>Salvar</button>
    </div>
  );
}