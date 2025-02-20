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
          backgroundColor: "#f8edeb",
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
          <Typography
            variant="h5"
            component="div"
            fontWeight="bold"
            color="#3B0404"
          >
            {h5Typography}
          </Typography>
          <Typography variant="body2" color="#3B0404" textAlign="center">
            {body2Typography}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardForInsights;
