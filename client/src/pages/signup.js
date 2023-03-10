import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useState } from "react"
import SignUpNgo from "../components/signUpNGO"
import SignUpPhilan from "../components/signUpPhilan"

const theme = createTheme()

const SignUp = () => {
  const [userType, setUserType] = useState("NGO")

  const handleClick = (e) => {
    e.preventDefault()
    setUserType(e.target.value)
  }

  const changeUserType = (e) => {
    if (userType === "NGO") setUserType("PHALE")
    else setUserType("NGO")
  }

  return (
    <>
      {userType === "NGO" && <SignUpNgo />}
      {userType === "PHALE" && <SignUpPhilan />}
      {userType && (
        <Container component="main" maxWidth="xs">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button onClick={changeUserType}>
              Change to {userType === "NGO" ? "PHALE" : "NGO"}
            </Button>
          </Box>
        </Container>
      )}
    </>
  )
}

export default SignUp
