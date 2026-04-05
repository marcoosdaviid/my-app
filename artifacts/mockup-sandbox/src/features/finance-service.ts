import type { Expense, Income, MonthlySummary } from './finance-model';

export function calculateMonthlySummary(
  incomes: Income[],
  expenses: Expense[],
  previousBalance = 0,
): MonthlySummary {
  const receitaTotal = incomes.reduce((sum, item) => sum + item.valor, 0);
  const custoTotal = expenses.reduce((sum, item) => sum + item.valor, 0);
  const saldoMes = receitaTotal - custoTotal;

  return {
    receitaTotal,
    custoTotal,
    saldoMes,
    saldoAcumulado: previousBalance + saldoMes,
  };
}

export function projectBalances(
  monthlyIncome: number,
  monthlyExpense: number,
  months = 12,
): number[] {
  return Array.from({ length: months }, (_, index) =>
    monthlyIncome - monthlyExpense,
  );
}
