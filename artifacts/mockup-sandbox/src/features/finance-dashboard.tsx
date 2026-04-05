import React from "react";
import { calculateMonthlySummary, projectBalances } from "./finance-service";

export default function FinanceDashboard() {
  const summary = calculateMonthlySummary(
    [{ id: '1', descricao: 'Salário', valor: 5000, mesInicio: '2026-04', fixa: true }],
    [{ id: '1', nome: 'Aluguel', valor: 2100, tipo: 'debito', categoria: 'Moradia', mesReferencia: '2026-04', recorrenciaMeses: 12 }],
    5800,
  );

  const projection = projectBalances(summary.receitaTotal, summary.custoTotal, 6);

  return (
    <div className="rounded-xl shadow p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Resumo Financeiro</h2>
      <p>Receita: R$ {summary.receitaTotal}</p>
      <p>Custos: R$ {summary.custoTotal}</p>
      <p>Saldo do mês: R$ {summary.saldoMes}</p>
      <p>Saldo acumulado: R$ {summary.saldoAcumulado}</p>
      <h3 className="mt-4 font-medium">Projeção 6 meses</h3>
      <ul>
        {projection.map((value, index) => (
          <li key={index}>Mês {index + 1}: R$ {value}</li>
        ))}
      </ul>
    </div>
  );
}
