function generateBellCurveData(mean: number, stdDev: number) {
  const data = [];
  for (let i = 0; i <= 100; i++) {
    const percentage = i * 0.05;
    const value = Math.exp(-0.5 * Math.pow((percentage - mean) / stdDev, 2)) * 1000; // Bell curve formula
    data.push(Math.round(value));
  }
  return data;
}

export const data = {
  labels: Array.from({ length: 101 }, (_, i) => (i * 0.05).toFixed(2) + '%'),
  datasets: [
    {
      label: 'XRD Liquidity',
      data: generateBellCurveData(0.6, 0.3), // mean = 0.6%, stdDev = 0.3%
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

