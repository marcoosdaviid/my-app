import React, { useState } from 'react';

export default function IncomeForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ description, amount });
    setDescription('');
    setAmount('');
  }

  return (
    <form onSubmit={handleSubmit} style={{marginTop:'24px', padding:'16px', border:'1px solid #ddd', borderRadius:'12px', background:'#fff'}}>
      <h2>Cadastrar Receita</h2>
      <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Descrição" />
      <input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Valor" type="number" />
      <button type="submit">Salvar</button>
    </form>
  );
}
