import React from "react";
import {
  Button,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Savingmoney from "../images/Savingmoney.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function SectionPage() {
  const isSmallScreen = useMediaQuery("(max-width:650px)");
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        style={{
          position: "absolute",
          zIndex: 1,
          color: "#3B0404",
          fontFamily: "'Lobster', cursive",
          padding: "20px 40px",
        }}
      >
        <span style={{ fontSize: "40px" }}>G</span>et Personalized Insights for
        Your Spending & Boost Your Savings!
      </Typography>

      <img
        src={Savingmoney}
        alt="saving_image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          marginTop: "130px",
        }}
      />
      <div
        style={{
          zIndex: 2,
          display: "flex",
          justifyContent: "flex-end",
          cursor: "pointer",
          marginRight: "60px",
        }}
      >
        <Button
          endIcon={<ArrowCircleRightOutlinedIcon />}
          sx={{ fontSize: "20px", textTransform: "none" }}
          // variant="contained"
          onClick={() => navigate("/insights")}
        >
          View Insights
        </Button>
      </div>
    </div>
  );
}

export default SectionPage;
