import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [500, 700, 1000, 800, 1200, 1500],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales',
        data: [200, 300, 400, 250],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <Grid container spacing={3} style={{ padding: 20 }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Analytics Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h6" gutterBottom>
            Revenue Over Time
          </Typography>
          <Line data={lineChartData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h6" gutterBottom>
            Product Sales
          </Typography>
          <Bar data={barChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;