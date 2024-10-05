import React, { useEffect, useState } from "react";
import API from "../../../../Apis/admin";
import { Box, Button, Typography } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import axios from "axios";

import Modal from "@mui/material/Modal";
import { styled } from "@mui/joy";
import Select from "react-select";
import { SvgIcon } from "@mui/material";
import { LuDownload } from "react-icons/lu";
import exportFromJSON from "export-from-json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Set width to 90% of the viewport
  maxWidth: 800, // Set a maximum width
  height: 600,
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#121212",
    borderColor: state.isFocused ? "#008400" : "#666666",
    color: "#fafafa",
    "&:hover": {
      borderColor: "#008400",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#008400"
      : state.isFocused
      ? "#333"
      : "#121212",
    color: state.isSelected ? "#fafafa" : "#fafafa",
  }),
};

function Startup_update() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [startsUpdates, setStartsUpdates] = useState([]);
  const [startups, setStartups] = useState([]);
  const [tempImg, setTempImg] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [file, setFile] = useState(null);

  const [inputdata, setInputdata] = useState({
    startupName: "",
    title: "",
    content: "",
    file: null,
  });
  const [editingData, setEditingData] = useState(null);

  const fetchStartupUpdates = async () => {
    try {
      const response = await API.startupUpddatesFetchAdmin();
      setStartsUpdates(response.data.data);
    } catch (error) {}
  };

  const handleDelete = async (id) => {
    console.log("🚀 ~ file: Startup_update.jsx:34 ~ handleDelete ~ id:", id);
    const res = await API.startupUpddatesDelete({ id });
    fetchStartupUpdates();
  };

  const handleAdd = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("startup", selectedStartup.value);
    data.append("title", inputdata.title);
    data.append("content", inputdata.content);
    const res = await API.addStatusupdate(data);

    // Clear input fields
    setSelectedStartup(null);
    setInputdata({
      startupName: "",
      title: "",
      content: "",
      file: null,
    });
    setFile(null);

    // Close modal
    setOpen(false);

    // Fetch updated startup updates list
    fetchStartupUpdates();
  };

  const handleEdit = async () => {
    const data = new FormData();
    data.append("id", editingId);
    data.append("file", file);
    data.append("startup", selectedStartup.value);
    data.append("title", inputdata.title);
    data.append("content", inputdata.content);
    const res = await API.editStatusupdate(data);

    // Clear input fields
    setSelectedStartup(null);
    setInputdata({
      startupName: "",
      title: "",
      content: "",
      file: null,
    });
    setFile(null);

    // Close modal
    setOpen(false);

    // Fetch updated startup updates list
    fetchStartupUpdates();
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const setSelectedStartupHandler = (newValue) => {
    setSelectedStartup(newValue);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup_update_lists`
      );
      const data = response.data.data.data;
      const selectedData = data.map((item) => ({
        value: item._id,
        label: item.registeredCompanyName,
      }));
      setStartups(selectedData);
    } catch (error) {
      console.error("Error fetching startup data:", error);
    }
  };

  useEffect(() => {
    fetchStartupUpdates();
    getData();
  }, []);

  const handleEditModalOpen = (data) => {
    setOpen(true);
    setEditingData(data);
    setSelectedStartup({ value: data.startup, label: data.company_name });
    setTempImg(data.file);
    setEditingId(data._id);
    setInputdata({
      startupName: data.startupName,
      title: data.title,
      content: data.content,
      file: null,
    });
  };

  const handleModalClose = () => {
    setOpen(false);
    setEditingData(null);
    setSelectedStartup(null);
    setInputdata({
      startupName: "",
      title: "",
      content: "",
      file: null,
    });
    setFile(null);
  };

  const detailsrow = startsUpdates.map((item, index) => {
    return {
      id: index + 1,

      company: item.company_name,
      title: item.title,
      action: item,
      delete: item,
    };
  });

  const detailscolumn = [
    { field: "id", flex: 1, width: 100, headerName: "Registrar ID" },
    { field: "company", flex: 1, width: 100, headerName: "Company Name" },
    { field: "title", flex: 2, width: 300, headerName: "Title" },

    {
      field: "action",
      flex: 1,
      headerName: "Action",
      renderCell: (param) => {
        return (
          <Button
            sx={{
              background: "#90CAF9",
              ":hover": {
                bgcolor: "#42A5F5",
              },
            }}
            onClick={() => handleEditModalOpen(param.row.action)}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "delete",
      flex: 1,
      headerName: "Delete",
      renderCell: (param) => {
        return (
          <Button
            color="error"
            onClick={() => handleDelete(param.row.delete._id)}
          >
            Delete
          </Button>
        );
      },
    },
  ];
  const exportDataToCSV = () => {
    const user = detailsrow; // Replace with your data
    const fileName = "Startup_update";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: user, fileName, exportType });
  };

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <div className="flex items-center">
          <div>
            <button
              className="flex gap-2 text-[12px] py-[4px] px-[5px] text-[#e0e0e0] items-center"
              onClick={exportDataToCSV}
            >
              {" "}
              <LuDownload size={17} /> EXPORT
            </button>
          </div>
        </div>
      </GridToolbarContainer>
    );
  }
  return (
    <>
      <Box m="20px">
        <Header
          title="Startup Update"
          // subtitle="List of Contacts for Future Reference"
        />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <Button
            sx={{
              background: "#90CAF9",
              ":hover": {
                bgcolor: "#42A5F5",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Add Startup Update
          </Button>
          <div className=" overflow-x-scroll md:overflow-x-auto md:w-full ">
            <div className="h-[550px] w-[600px] md:min-w-full">
              <DataGrid
                rows={detailsrow}
                columns={detailscolumn}
                slots={{
                  toolbar: CustomToolbar,
                }}
                pageSizeOptions={[5, 10, 25]}
                sx={{ width: "100%" }}
              />
            </div>
          </div>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Edit Startup Update
          </Typography>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">
              {" "}
              {editingData ? "Edit Startup Update" : "Add Startup Update"}
            </Typography>

            <Select
              className="basic-single block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
              classNamePrefix="select startup"
              defaultValue={selectedStartup}
              isDisabled={isDisabled}
              isRtl={isRtl}
              options={startups}
              isSearchable={isSearchable}
              onChange={setSelectedStartupHandler}
              styles={customSelectStyles}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Title</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="text"
              placeholder="Enter your Startup Commission in Percentage"
              name="title"
              onChange={handleChange}
              value={inputdata.title}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Content</Typography>
            <textarea
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="text"
              placeholder="Enter your Startup Commission in Percentage"
              name="content"
              onChange={handleChange}
              value={inputdata.content}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">File Upload</Typography>
            <Button
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              startDecorator={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </SvgIcon>
              }
            >
              Upload a file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </div>

          <div className="flex gap-2 mt-2 justify-end">
            <Button
              variant="contained"
              sx={{
                background: "#90CAF9",
                ":hover": {
                  bgcolor: "#42A5F5",
                },
              }}
              onClick={editingData ? handleEdit : handleAdd}
            >
              {editingData ? "Edit" : "Add"}
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Startup_update;
