import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar"; // サイドバーのコンポーネントをインポートします。

const Header: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Header
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
