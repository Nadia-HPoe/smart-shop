import { Product } from '@/constants/GetCompetitorsData';

export const getCellStyle = (
  columnAccessor: keyof Product,
  value: string,
  product: Product
): React.CSSProperties => {
  const isLast = product.id === 10;
  const lastFields: (keyof Product)[] = [
    'turnover',
    'profit',
    'cost',
    'time',
    'cac',
    'impact',
    'total',
  ];

  if (isLast && lastFields.includes(columnAccessor)) {
    return {
      color: '#FF4994',
      fontWeight: '700',
      ...(columnAccessor === 'total' ? { fontSize: '48px' } : {}),
    };
  }

  if (columnAccessor === 'profit') {
    switch (value) {
      case '15-25% (Medium)':
      case '10-20% (Medium)':
        return { color: '#25b918', fontWeight: '600' };
    }
  }
  switch (value) {
    case '20-30% (High)':
    case '€ (Low)':
    case '1 week':
    case 'Positive (Food Waste Reduction)':
      return { color: '#25b918', fontWeight: '600' };
    default:
      return {};
  }
};
