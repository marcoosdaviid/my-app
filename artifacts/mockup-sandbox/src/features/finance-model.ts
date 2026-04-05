export type PaymentType = 'debito' | 'cartao_credito';

export interface Expense {
  id: string;
  nome: string;
  valor: number;
  tipo: PaymentType;
  categoria: string;
  mesReferencia: string;
  recorrenciaMeses: number;
  observacoes?: string;
}

export interface Income {
  id: string;
  descricao: string;
  valor: number;
  mesInicio: string;
  fixa: boolean;
}

export interface MonthlySummary {
  receitaTotal: number;
  custoTotal: number;
  saldoMes: number;
  saldoAcumulado: number;
}
