import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", donations: 50 },
  { month: "Feb", donations: 80 },
  { month: "Mar", donations: 120 },
  { month: "Apr", donations: 200 },
  { month: "May", donations: 150 },
];

const DonationsChart = () => {
  return (
    <Box p={4} bg="white" borderRadius="md" boxShadow="md">
      <Text fontWeight="bold" mb={4}>
        Monthly Donations
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="donations" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default DonationsChart;
