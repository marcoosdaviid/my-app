import React from "react";

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl shadow p-6 bg-white">
      <h2 className="text-sm text-gray-500 mb-2">{title}</h2>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Controle Financeiro Pessoal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Receita Total" value="R$ 5.000" />
        <Card title="Custos Totais" value="R$ 2.100" />
        <Card title="Saldo do Mês" value="R$ 2.900" />
        <Card title="Saldo Acumulado" value="R$ 8.700" />
      </div>
      <div className="rounded-xl shadow p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Projeção próximos 6 meses</h2>
        <ul className="space-y-2">
          <li>Mês 1: R$ 2.900</li>
          <li>Mês 2: R$ 2.900</li>
          <li>Mês 3: R$ 2.900</li>
          <li>Mês 4: R$ 2.900</li>
          <li>Mês 5: R$ 2.900</li>
          <li>Mês 6: R$ 2.900</li>
        </ul>
      </div>
    </div>
  );
}
