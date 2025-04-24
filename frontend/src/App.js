import React, { useState } from 'react';
import ProdutoList from './components/ProdutoList';
import ProdutoForm from './components/ProdutoForm';

function App() {
  const[refresh, setRefresh] = useState(false);

  const atualizarLista = () => setRefresh(!refresh);
  return(
    <div className='App'>
      <h1>Lista de Produtos</h1>
      <ProdutoForm onProdutoAdd={atualizarLista}/>
      <ProdutoList key={refresh} />
    </div>
  );
}

export default App;
