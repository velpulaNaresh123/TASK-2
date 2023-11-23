import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { EmpDetailsType } from "../store/EmployeeStore";

const DisplayEmpDetails = ({
  allEmployees,
  deleteHandle,
}: {
  allEmployees: EmpDetailsType[];
  deleteHandle: (element: string) => void;
}) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },

    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const delHandle = (element: string) => {
    deleteHandle(element);
  };
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ position: "relative", top: 123, width: 900, left: 10 }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Employee Name</StyledTableCell>
              <StyledTableCell align="center">Employee DEPT</StyledTableCell>
              <StyledTableCell align="center">
                Employee Salary&nbsp;(g)
              </StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEmployees.map((element) => (
              <StyledTableRow>
                <StyledTableCell align="center">{element.name}</StyledTableCell>
                <StyledTableCell align="center">{element.dept}</StyledTableCell>
                <StyledTableCell align="center">
                  {element.salary}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <DeleteIcon
                    onClick={() => delHandle(element._id as string)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default DisplayEmpDetails;
