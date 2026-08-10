import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

type Props = {
  labels: string[]
  data: number[]
  label?: string
}

export default function LineChart({ labels, data, label = '' }: Props) {
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        fill: true,
        backgroundColor: 'rgba(125,198,255,0.12)',
        borderColor: 'rgba(63,183,159,0.9)',
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(0,0,0,0.04)' } },
    },
  }

  return <Line data={chartData} options={options} />
}
