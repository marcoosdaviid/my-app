import React from 'react';

function SummaryCard({ title, value }) {
  return (
    <div style={{padding:'16px',border:'1px solid #ddd',borderRadius:'12px',background:'#fff'}}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{padding:'24px'}}>
      <h1>Controle Financeiro Pessoal</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'16px'}}>
        <SummaryCard title="Receita Total" value="R$ 5.000" />
        <SummaryCard title="Custo Total" value="R$ 2.100" />
        <SummaryCard title="Saldo do Mês" value="R$ 2.900" />
        <SummaryCard title="Saldo Acumulado" value="R$ 8.700" />
      </div>
    </div>
  );
}
