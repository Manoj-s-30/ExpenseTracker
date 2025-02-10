import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function CardForInsights({ h5Typography, body2Typography }) {
  return (
    <div>
      <Card
        sx={{
          width: "200px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F9F1F0",
          gap: "5px",
          border: "1px solid #e9ecef",
        }}
      >
        <CardContent
          sx={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" component="div" fontWeight="bold">
            {h5Typography}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {body2Typography}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardForInsights;
