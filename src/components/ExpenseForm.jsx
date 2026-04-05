import React, { useState } from 'react';

export default function ExpenseForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, amount });
    setName('');
    setAmount('');
  }

  return (
    <form onSubmit={handleSubmit} style={{marginTop:'24px', padding:'16px', border:'1px solid #ddd', borderRadius:'12px', background:'#fff'}}>
      <h2>Cadastrar Despesa</h2>
      <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Descrição" />
      <input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Valor" type="number" />
      <button type="submit">Salvar</button>
    </form>
  );
}
