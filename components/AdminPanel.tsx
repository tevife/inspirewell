export default function AdminPanel() {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-bold mb-4'>Painel de Anúncios</h2>
      <input type='text' placeholder='Título do anúncio' className='border p-2 w-full mb-2'/>
      <input type='url' placeholder='Link do anúncio' className='border p-2 w-full mb-2'/>
      <button className='bg-blue-500 text-white p-2 rounded'>Salvar Anúncio</button>
    </div>
  );
}