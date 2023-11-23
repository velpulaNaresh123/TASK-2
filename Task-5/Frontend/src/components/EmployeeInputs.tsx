import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { EmployeeDepartment } from "../store/EmployeeStore";
import { EmpDetailsType } from "../store/EmployeeStore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
  top: 40,
  left: 40,
  right: 40,
}));
export default function EmployeeInpute({
  addEmpDetails,
}: {
  addEmpDetails: (data: EmpDetailsType) => void;
}) {
  const [data, setData] = React.useState<EmpDetailsType>({
    name: "",
    dept: "",
    salary: 0,
  });

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setData((prevValues) => ({
      ...prevValues,
      dept: event.target.value,
    }));
  };

  function handleSubmit() {
    addEmpDetails(data);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={4}>
          <Item>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Enter Employee Name"
                variant="outlined"
                value={data.name}
                name="name"
                onChange={handleTextFieldChange}
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="dept"
                  //label="Department"
                  onChange={handleSelectChange}
                >
                  {EmployeeDepartment.map((element) => (
                    <MenuItem key={element} value={element}>
                      {element}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Enter Salary"
                variant="outlined"
                type="number"
                name="salary"
                value={data.salary}
                onChange={handleTextFieldChange}
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <Button fullWidth variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
